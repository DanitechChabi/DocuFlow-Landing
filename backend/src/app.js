/**
 * Backend minimal pour le site de démo DocuFlow
 * POST /api/submit — Enregistre une demande + envoie email + écrit Excel
 * GET /api/requests — Liste toutes les demandes
 */
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Config email ---
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || 'chabidaniel093@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const MAIL_TO = process.env.MAIL_TO || 'chabidaniel093@gmail.com';

const transporter = SMTP_PASS
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      requireTLS: true,
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

// --- Config Excel ---
// Sur Render, DATA_DIR pointe vers le disque persistant (render.yaml → /var/data).
// Si le disque n'est pas monté (conteneur non-root sans permission sur /var/data),
// on retombe sur un dossier local pour que l'API démarre quand même.
let DATA_DIR = process.env.DATA_DIR || path.join(__dirname, '../data');
try {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  // Test d'écriture réel (le disque peut exister mais être non-writable)
  const probe = path.join(DATA_DIR, '.write-test');
  fs.writeFileSync(probe, 'ok');
  fs.unlinkSync(probe);
} catch (e) {
  console.warn(`[excel] DATA_DIR "${DATA_DIR}" non accessible (${e.code}) — fallback local`);
  DATA_DIR = path.join(__dirname, '../data');
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const EXCEL_FILE = path.join(DATA_DIR, 'demandes.xlsx');

const EXCEL_HEADERS = ['Date', 'Nom complet', 'Email', 'Entreprise', 'Poste', 'Fonctionnalités', 'Message'];

async function ensureExcel() {
  if (fs.existsSync(EXCEL_FILE)) return;
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Demandes de test');
  ws.columns = EXCEL_HEADERS.map((h, i) => ({ header: h, key: h.toLowerCase().replace(/ /g, '_'), width: [22, 25, 30, 25, 20, 40, 50][i] }));
  // Header styling
  const headerRow = ws.getRow(1);
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0f172a' } };
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
  await wb.xlsx.writeFile(EXCEL_FILE);
}

async function appendToExcel(data) {
  await ensureExcel();
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(EXCEL_FILE);
  const ws = wb.getWorksheet('Demandes de test');
  ws.addRow([
    new Date().toLocaleString('fr-FR'),
    data.full_name,
    data.email,
    data.company,
    data.position,
    Array.isArray(data.features) ? data.features.join(', ') : (data.features || ''),
    data.message || '',
  ]);
  // Alternate row colors
  const rowCount = ws.rowCount;
  if (rowCount > 1) {
    const row = ws.getRow(rowCount);
    row.fill = rowCount % 2 === 0
      ? { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } }
      : undefined;
  }
  await wb.xlsx.writeFile(EXCEL_FILE);
}

// --- Email de confirmation au demandeur ---
function buildConfirmationHtml(data) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
        <tr><td style="background:#0f172a;padding:24px 32px;">
          <span style="color:#fff;font-size:20px;font-weight:800;">DocuFlow</span>
          <span style="color:#3b82f6;font-size:20px;font-weight:800;">AFGC</span>
        </td></tr>
        <tr><td style="padding:32px;">
          <div style="text-align:center;margin-bottom:16px;">
            <div style="width:56px;height:56px;margin:0 auto 16px;background:#ecfdf5;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;">✅</div>
            <h1 style="font-size:18px;color:#0f172a;margin:0 0 8px;">Demande bien reçue !</h1>
          </div>
          <p style="font-size:14px;color:#64748b;line-height:1.7;margin:0 0 16px;">
            Bonjour <strong style="color:#0f172a;">${data.full_name}</strong>,<br/>
            Nous avons bien reçu votre demande de test de la plateforme DocuFlow. Voici un récapitulatif :
          </p>
          <table style="width:100%;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;font-size:13px;color:#64748b;">
            <tr><td style="padding:12px 16px;font-weight:700;color:#0f172a;width:140px;">Entreprise</td><td style="padding:12px 16px;color:#334155;">${data.company || '—'}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Fonctionnalités</td><td style="padding:12px 16px;color:#334155;">${Array.isArray(data.features) ? data.features.join(', ') : (data.features || '—')}</td></tr>
          </table>
          <p style="font-size:14px;color:#64748b;line-height:1.7;margin:16px 0 0;">
            Notre équipe va examiner votre demande et vous recontactera très rapidement à cette adresse pour activer votre accès de test.
          </p>
          <p style="font-size:12px;color:#94a3b8;margin:16px 0 0;">Ceci est un message automatique — merci de ne pas y répondre.</p>
        </td></tr>
        <tr><td style="padding:16px 32px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">DocuFlow AFGC © ARCHICORP</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// --- Email template ---
function buildEmailHtml(data) {
  const features = Array.isArray(data.features) ? data.features.join(', ') : (data.features || '—');
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
        <tr><td style="background:#0f172a;padding:24px 32px;">
          <span style="color:#fff;font-size:20px;font-weight:800;">DocuFlow</span>
          <span style="color:#3b82f6;font-size:20px;font-weight:800;">AFGC</span>
        </td></tr>
        <tr><td style="padding:32px;">
          <h1 style="font-size:18px;color:#0f172a;margin:0 0 8px;">📋 Nouvelle demande de test</h1>
          <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0 0 16px;">Un utilisateur souhaite tester DocuFlow :</p>
          <table style="width:100%;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;font-size:13px;color:#64748b;">
            <tr><td style="padding:12px 16px;font-weight:700;color:#0f172a;width:140px;">Nom</td><td style="padding:12px 16px;color:#334155;">${data.full_name}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Email</td><td style="padding:12px 16px;color:#334155;">${data.email}</td></tr>
            <tr><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Entreprise</td><td style="padding:12px 16px;color:#334155;">${data.company || '—'}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Poste</td><td style="padding:12px 16px;color:#334155;">${data.position || '—'}</td></tr>
            <tr><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Fonctionnalités</td><td style="padding:12px 16px;color:#334155;">${features}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:12px 16px;font-weight:700;color:#0f172a;">Message</td><td style="padding:12px 16px;color:#334155;white-space:pre-wrap;">${data.message || '—'}</td></tr>
          </table>
          <p style="font-size:12px;color:#94a3b8;margin:16px 0 0;">Envoyé depuis le site de démo DocuFlow — ${new Date().toLocaleString('fr-FR')}</p>
        </td></tr>
        <tr><td style="padding:16px 32px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">Message automatique — DocuFlow AFGC © ARCHICORP</td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// --- Routes ---
app.get('/', (req, res) => res.json({ status: 'ok', message: 'DocuFlow Landing API' }));

// --- Diagnostic SMTP (temporaire, pour le débogage du déploiement) ---
app.get('/api/diag', async (req, res) => {
  const result = { transporter: !!transporter, smtp: null, send: null };
  if (!transporter) return res.json(result);
  try {
    result.smtp = await Promise.race([
      new Promise((resolve) => {
        transporter.verify((err, success) => resolve(err ? { ok: false, error: err.message, code: err.code, response: err.response } : { ok: true }));
      }),
      new Promise((resolve) => setTimeout(() => resolve({ ok: false, error: 'timeout verify 20s' }), 20000)),
    ]);
  } catch (e) { result.smtp = { ok: false, error: e.message }; }
  try {
    result.send = await Promise.race([
      transporter.sendMail({
        from: `"DocuFlow Diag" <${SMTP_USER}>`,
        to: MAIL_TO,
        subject: 'Diagnostic DocuFlow Landing',
        html: '<p>Test diagnostic</p>',
      }).then((info) => ({ ok: true, messageId: info.messageId })),
      new Promise((resolve) => setTimeout(() => resolve({ ok: false, error: 'timeout 20s' }), 20000)),
    ]);
  } catch (e) { result.send = { ok: false, error: e.message, code: e.code, response: e.response }; }
  res.json(result);
});

app.post('/api/submit', async (req, res) => {
  const { full_name, email, company, position, features, message } = req.body;

  if (!full_name || !email) {
    return res.status(400).json({ message: 'Le nom et l\'email sont requis' });
  }
  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Adresse email invalide' });
  }

  try {
    // 1. Write to Excel (rapide, synchrone pour garantir la persistance)
    await appendToExcel({ full_name, email, company, position, features, message });

    // 2. Send emails en arrière-plan (fire-and-forget) pour ne pas dépasser
    //    le timeout HTTP de Render. La réponse est immédiate, l'utilisateur
    //    reçoit la confirmation sans attendre le SMTP.
    if (transporter) {
      (async () => {
        try {
          // 2a. Notification au propriétaire (chabidaniel093@gmail.com)
          await transporter.sendMail({
            from: `"DocuFlow Démo" <${SMTP_USER}>`,
            to: MAIL_TO,
            subject: `[DocuFlow] Demande de test de ${full_name}`,
            html: buildEmailHtml({ full_name, email, company, position, features, message }),
          });
          console.log(`[email] Notification envoyée à ${MAIL_TO} depuis ${full_name} <${email}>`);

          // 2b. Confirmation automatique au demandeur
          await transporter.sendMail({
            from: `"DocuFlow AFGC" <${SMTP_USER}>`,
            to: email,
            subject: `✅ Demande de test DocuFlow bien reçue`,
            html: buildConfirmationHtml({ full_name, company, features }),
          });
          console.log(`[email] Confirmation envoyée au demandeur ${email}`);
        } catch (mailErr) {
          console.error('[email] Erreur d\'envoi:', mailErr.message);
        }
      })();
    } else {
      console.log(`[email] SMTP non configuré — emails non envoyés pour ${full_name}`);
    }

    res.status(201).json({ message: 'Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.' });
  } catch (err) {
    console.error('[submit] Erreur:', err.message);
    res.status(500).json({ message: 'Une erreur est survenue. Veuillez réessayer.' });
  }
});

app.get('/api/requests', async (req, res) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) return res.json([]);
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(EXCEL_FILE);
    const ws = wb.getWorksheet('Demandes de test');
    if (!ws || ws.rowCount <= 1) return res.json([]);
    const rows = [];
    ws.eachRow((row, idx) => {
      if (idx === 1) return; // skip header
      rows.push({
        date: row.getCell(1).value,
        full_name: row.getCell(2).value,
        email: row.getCell(3).value,
        company: row.getCell(4).value,
        position: row.getCell(5).value,
        features: row.getCell(6).value,
        message: row.getCell(7).value,
      });
    });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lecture Excel' });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 DocuFlow Landing API on port ${PORT}`);
  console.log(`📧 Email: ${transporter ? 'configuré' : 'non configuré (SMTP_PASS manquant)'}`);
});
