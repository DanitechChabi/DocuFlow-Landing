/**
 * Test d'envoi local via l'API HTTP Brevo.
 * Usage : BREVO_API_KEY=votre_clé node test_brevo.js
 */
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FROM_EMAIL = process.env.BREVO_SENDER_EMAIL || 'chabidaniel093@gmail.com';

if (!BREVO_API_KEY) {
  console.error('❌ Définissez BREVO_API_KEY (ex: BREVO_API_KEY=xkeysib-... node test_brevo.js)');
  process.exit(1);
}

(async () => {
  console.log('1️⃣  Vérification des senders…');
  try {
    const r = await fetch('https://api.brevo.com/v3/senders', { headers: { 'api-key': BREVO_API_KEY } });
    const data = await r.json();
    if (Array.isArray(data)) {
      console.log(`   ${data.length} sender(s) :`);
      data.forEach((s) => console.log(`   - ${s.name} <${s.email}> status=${s.status}`));
    } else {
      console.log('   Réponse:', JSON.stringify(data));
    }
  } catch (e) {
    console.error('   Erreur:', e.message);
  }

  console.log(`2️⃣  Envoi d'un email de test depuis ${FROM_EMAIL}…`);
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'api-key': BREVO_API_KEY },
      body: JSON.stringify({
        sender: { email: FROM_EMAIL, name: 'DocuFlow Test' },
        to: [{ email: 'chabidaniel093@gmail.com' }],
        subject: 'Test Brevo DocuFlow Landing',
        htmlContent: '<p>Test d\'envoi via l\'API HTTP Brevo depuis la machine locale.</p>',
      }),
    });
    const body = await res.text();
    if (!res.ok) {
      console.error(`❌ Échec (${res.status}) :`, body);
      process.exit(1);
    }
    const json = JSON.parse(body);
    console.log('✅ EMAIL ENVOYÉ, messageId:', json.messageId);
  } catch (e) {
    console.error('❌ Erreur:', e.message);
    process.exit(1);
  }
})();
