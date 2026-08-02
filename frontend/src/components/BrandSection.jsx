import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const THEMES = [
  { name: 'ARCHICORP', primary: '#0f172a', accent: '#3b82f6', cls: 'from-slate-900 to-blue-600' },
  { name: 'BENIN CONSULT', primary: '#14532d', accent: '#d4af37', cls: 'from-green-800 to-yellow-500' },
  { name: 'FINEX AFRIQUE', primary: '#4c1d95', accent: '#e2e8f0', cls: 'from-purple-900 to-slate-300' },
];

const Mockup = ({ theme, slide }) => (
  <div className={`relative glass-card-premium p-4 bg-white/95 shadow-xl animate-fade-in-${slide}`}>
    {/* Chrome */}
    <div className="flex items-center gap-1.5 mb-3">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-amber-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
      <span className="ml-1.5 text-[8px] text-slate-300 font-mono truncate">{theme.name} · DocuFlow</span>
    </div>

    {/* Brand header */}
    <div className={`rounded-lg bg-gradient-to-r ${theme.cls} p-2.5 mb-2.5 flex items-center gap-2`}>
      <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center"><FileText size={10} className="text-white" /></div>
      <span className="text-white text-[10px] font-black">{theme.name}</span>
      <span className="ml-auto px-1.5 py-0.5 rounded-full bg-white/20 text-white text-[7px] font-bold">Super Admin</span>
    </div>

    {/* KPI mini */}
    <div className="grid grid-cols-3 gap-1.5 mb-2.5">
      {[['4', 'Demandes'], ['9', 'Livrés'], ['100%', 'Tracé']].map((s) => (
        <div key={s[1]} className="bg-slate-50 rounded-md p-1.5 text-center">
          <p className="text-[10px] font-black text-slate-800">{s[0]}</p>
          <p className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wide">{s[1]}</p>
        </div>
      ))}
    </div>

    {/* Status rows */}
    <div className="space-y-1.5">
      {[['DOC-2026-101', 'Livré'], ['DOC-2026-102', 'En cours']].map((d) => (
        <div key={d[0]} className="flex items-center justify-between bg-slate-50 rounded-md px-2 py-1">
          <span className="font-mono text-[8px] text-slate-500">{d[0]}</span>
          <span className={`px-1.5 py-0.5 rounded-full text-[7px] font-bold ${d[1] === 'Livré' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
            {d[1] === 'Livré' && <CheckCircle size={7} className="inline mr-0.5 -mt-px" />}{d[1]}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const BrandSection = () => (
  <section id="marque" className="py-20 md:py-28 px-4 bg-afgc-primary text-white relative overflow-hidden">
    {/* Gold orbs */}
    <div className="absolute top-[-10%] right-[10%] w-[30%] h-[50%] bg-afgc-gold/8 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
    <div className="absolute bottom-[-10%] left-[5%] w-[25%] h-[40%] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-14 animate-fade-in-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-afgc-gold/30 text-afgc-gold text-xs font-bold uppercase tracking-widest mb-5">
          Personnalisation
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-5">
          Une plateforme à l'image de <span className="text-gradient-gold">votre entreprise.</span>
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Couleurs, logo, libellés de sections : DocuFlow adopte votre identité. Vos équipes retrouvent votre univers dès la connexion.
        </p>
      </div>

      {/* 3 mini mockups */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {THEMES.map((t, i) => (
          <div key={t.name} className={i === 0 ? '' : 'sm:-mt-6'}>
            <Mockup theme={t} slide={i === 0 ? 'right' : i === 1 ? 'left' : 'up'} />
            <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-3">{t.name}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-slate-400 text-sm animate-fade-in-up delay-500">
        Configuration en quelques minutes, appliquée à toute l'équipe.
      </p>
    </div>
  </section>
);

export default BrandSection;
