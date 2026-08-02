import React, { useEffect, useState } from 'react';
import { CheckCircle, Bell } from 'lucide-react';
import SectionHeader from './SectionHeader';

const MILESTONES = [
  { n: '01', label: 'En attente', color: 'bg-orange-500', dot: 'bg-orange-400', desc: 'Votre demande est créée : référence unique, pièces jointes, priorité. Tout est capturé dès le départ.' },
  { n: '02', label: 'À traiter', color: 'bg-blue-500', dot: 'bg-blue-400', desc: "Un archiviste prend le dossier en charge. L'état bascule automatiquement." },
  { n: '03', label: 'Transmis', color: 'bg-purple-500', dot: 'bg-purple-400', desc: 'Le document est transmis pour vérification interne avant livraison.' },
  { n: '04', label: 'Livré', color: 'bg-emerald-500', dot: 'bg-afgc-gold', desc: "Le document est livré, une notification part instantanément. L'historique est clos, la traçabilité est totale.", gold: true },
];

const TOASTS = [
  { icon: '🟣', text: 'Statut mis à jour : Transmis' },
  { icon: '🟢', text: 'Document livré : DOC-2026-050' },
  { icon: '🟠', text: 'Nouvelle demande en attente' },
];

const WorkflowSection = () => {
  const [toastIdx, setToastIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setToastIdx((i) => (i + 1) % TOASTS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="workflow" className="py-20 md:py-28 px-4 bg-blue-50/50 relative overflow-hidden">
      <div className="absolute top-[-30%] left-[20%] w-[40%] h-[60%] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          pill="Le workflow"
          title={<>Votre circuit documentaire, <span className="text-gradient">maîtrisé de bout en bout.</span></>}
          subtitle="Quatre états, zéro ambiguïté. Chaque partie prenante sait exactement où en est le dossier, à chaque instant."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-[22px] left-[12%] right-[12%] h-[3px] bg-slate-200 rounded-full hidden md:block" />
          <div className="absolute top-[22px] left-[12%] w-[76%] h-[3px] bg-gradient-to-r from-afgc-secondary via-blue-500 to-afgc-gold rounded-full scale-x-0 animate-scale-in" style={{ animationDuration: '1.6s' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {MILESTONES.map((m, i) => (
              <div key={m.n} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 180}ms` }}>
                {/* Status pill */}
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${m.gold ? 'bg-afgc-gold/15 text-yellow-700' : 'bg-white text-slate-600'} border border-slate-200 text-[10px] font-bold uppercase tracking-wider mb-4 ${m.gold ? 'animate-glow-pulse border-afgc-gold/30' : ''}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${m.dot} animate-pulse-soft`} />
                  {m.label}
                </span>

                {/* Number disc */}
                <div className={`relative mx-auto mb-4 flex items-center justify-center w-11 h-11 rounded-full font-black text-sm ${m.gold ? 'bg-afgc-gold text-afgc-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-afgc-primary text-white'}`}>
                  {m.gold ? <CheckCircle size={18} /> : m.n}
                  <span className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-white border-2 border-afgc-secondary animate-pulse-soft" />
                </div>

                <p className="text-sm text-slate-500 leading-relaxed max-w-[220px] mx-auto">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line + live toast */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center animate-fade-in-up delay-500">
          <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
            <Bell size={15} className="text-afgc-secondary" />
            Chaque changement de statut déclenche une notification en temps réel.
          </p>
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-lg border border-slate-100">
            <span className="text-base">{TOASTS[toastIdx].icon}</span>
            <span className="text-sm font-semibold text-slate-700" key={toastIdx}>{TOASTS[toastIdx].text}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
