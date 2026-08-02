import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MessageCircle, CheckCircle, Lock } from 'lucide-react';

const PLATFORM_URL = 'https://docuflow-afgc.vercel.app';

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 px-4">
    {/* Background grid 72px */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_100%)] pointer-events-none" />

    {/* Glow orbs */}
    <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[45%] bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
    <div className="absolute bottom-[-15%] right-[-8%] w-[40%] h-[40%] bg-indigo-500/8 rounded-full blur-3xl pointer-events-none animate-float delay-500" />
    <div className="absolute bottom-[20%] left-[30%] w-[20%] h-[20%] bg-afgc-gold/5 rounded-full blur-3xl pointer-events-none animate-float delay-300" />

    {/* Gold diagonal line */}
    <div className="absolute top-[25%] left-[-10%] right-[40%] h-px bg-gradient-to-r from-transparent via-afgc-gold/40 to-transparent scale-x-0 animate-scale-in delay-700" style={{ animationDuration: '1.2s' }} />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ============ LEFT: COPY ============ */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-afgc-primary/5 border border-afgc-primary/10 text-afgc-primary text-xs font-bold mb-7 animate-fade-in-down">
            <span className="w-1.5 h-1.5 rounded-full bg-afgc-gold animate-pulse-soft" />
            Plateforme de gestion documentaire — Niveau entreprise
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-afgc-primary tracking-tight leading-[1.08] mb-6 animate-fade-in-up">
            La gestion documentaire,
            <br />
            à la hauteur de <span className="text-gradient relative inline-block">vos ambitions
              {/* Gold underline SVG */}
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                <path d="M2 8C60 3 140 2 298 6" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: 'left', animation: 'draw-line 1s cubic-bezier(.16,1,.3,1) 0.6s both' }} />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 animate-fade-in-up delay-200">
            DocuFlow centralise vos demandes de documents, leur suivi en temps réel et leur livraison, dans un espace sécurisé et conçu pour les entreprises exigeantes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-blue group relative overflow-hidden">
              Accéder à la plateforme
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <Link to="/demander" className="btn-secondary text-base px-8 py-4 flex items-center justify-center gap-2 group">
              Demander un test
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-afgc-secondary" />
            </Link>
          </div>

          {/* Reassurance */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 mt-8 animate-fade-in-up delay-400">
            {['Gratuit', 'Sans carte bancaire', 'Déployé en 5 minutes'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                <CheckCircle size={15} className="text-emerald-500" /> {t}
              </span>
            ))}
          </div>

          {/* Signature */}
          <p className="text-xs text-slate-400 mt-8 font-medium animate-fade-in-up delay-500">
            Conçu par <strong className="text-slate-500">ARCHICORP</strong> — <strong className="text-slate-500">CHABI BOUKO Daniel</strong>
          </p>
        </div>

        {/* ============ RIGHT: CONTROL ROOM VISUAL ============ */}
        <div className="lg:col-span-5 animate-scale-in delay-400">
          <div className="relative">
            {/* Blue halo behind */}
            <div className="absolute -inset-6 bg-gradient-to-br from-afgc-secondary/25 via-blue-400/15 to-transparent rounded-[2.5rem] blur-2xl opacity-70 animate-glow-pulse" />

            {/* Dashboard card */}
            <div className="relative bg-afgc-primary rounded-3xl shadow-elevated border border-white/10 p-6 overflow-hidden">
              {/* Header chrome */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-[10px] text-slate-400 font-mono">DocuFlow — Centre documentaire</span>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {[
                  { label: 'En attente', value: '12', cls: 'bg-orange-500/15 text-orange-300' },
                  { label: 'À traiter', value: '8', cls: 'bg-purple-500/15 text-purple-300' },
                  { label: 'Transmis', value: '5', cls: 'bg-blue-500/15 text-blue-300' },
                  { label: 'Livré', value: '47', cls: 'bg-emerald-500/15 text-emerald-300' },
                ].map((s) => (
                  <div key={s.label} className={`${s.cls} rounded-xl p-2 text-center`}>
                    <p className="text-base sm:text-lg font-black text-white">{s.value}</p>
                    <p className="text-[8px] font-bold uppercase tracking-wider opacity-80">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Workflow milestones */}
              <div className="bg-white/5 rounded-2xl p-4 mb-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Circuit de demande</p>
                <div className="relative flex justify-between">
                  <div className="absolute top-[13px] left-[6%] right-[6%] h-0.5 bg-blue-500/40" />
                  <div className="absolute top-[13px] left-[6%] w-0 h-0.5 bg-gradient-to-r from-afgc-secondary to-afgc-gold" />
                  {[
                    { n: '01', label: 'En attente', color: 'bg-orange-400' },
                    { n: '02', label: 'À traiter', color: 'bg-blue-400' },
                    { n: '03', label: 'Transmis', color: 'bg-purple-400' },
                    { n: '04', label: 'Livré', color: 'bg-afgc-gold', gold: true },
                  ].map((s) => (
                    <div key={s.n} className="flex flex-col items-center gap-1.5 relative">
                      <div className={`w-7 h-7 rounded-full ${s.gold ? 'bg-afgc-gold text-afgc-primary' : 'bg-white/10 text-white'} flex items-center justify-center text-[9px] font-black border ${s.gold ? 'border-afgc-gold shadow-[0_0_16px_rgba(212,175,55,0.5)] animate-glow-pulse' : 'border-white/15'}`}>
                        {s.gold ? <CheckCircle size={12} /> : s.n}
                      </div>
                      <span className="text-[8px] font-bold text-slate-300">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent docs */}
              <div className="space-y-2">
                {[
                  { ref: 'DOC-2026-047', status: 'Livré', st: 'bg-emerald-500/15 text-emerald-300' },
                  { ref: 'DOC-2026-048', status: 'Transmis', st: 'bg-purple-500/15 text-purple-300' },
                  { ref: 'DOC-2026-049', status: 'En attente', st: 'bg-orange-500/15 text-orange-300' },
                ].map((d) => (
                  <div key={d.ref} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2">
                    <span className="font-mono text-[10px] text-slate-300">{d.ref}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${d.st}`}>{d.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-3 bg-white/90 backdrop-blur rounded-2xl shadow-elevated px-4 py-3 flex items-center gap-3 animate-float delay-400">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                <ShieldCheck size={18} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">Document livré</p>
                <p className="text-[10px] text-slate-400">DOC-2026-047 · 2 min</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 bg-white/90 backdrop-blur rounded-2xl shadow-elevated px-4 py-3 flex items-center gap-3 animate-float delay-600">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center">
                <MessageCircle size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">Nouveau message</p>
                <p className="text-[10px] text-slate-400">Pièce jointe PDF</p>
              </div>
            </div>

            {/* Gold trust seal */}
            <div className="absolute -top-6 left-6 animate-float delay-200">
              <div className="relative w-16 h-16">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" style={{ animation: 'spin 20s linear infinite' }}>
                  <defs>
                    <path id="seal-circle" d="M32,32 m-26,0 a26,26 0 1,1 52,0 a26,26 0 1,1 -52,0" />
                  </defs>
                  <text fill="#d4af37" fontSize="9" fontWeight="bold" letterSpacing="1.5">
                    <textPath href="#seal-circle">100% TRACÉ • 100% TRACÉ • </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock size={16} className="text-afgc-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Inline keyframes for the underline + seal */}
    <style>{`
      @keyframes draw-line { from { stroke-dasharray: 300; stroke-dashoffset: 300; } to { stroke-dasharray: 300; stroke-dashoffset: 0; } }
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </section>
);

export default Hero;
