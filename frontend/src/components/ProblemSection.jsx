import React from 'react';
import { FileX, EyeOff, History, ClipboardList, TrendingDown, Timer, AlertTriangle } from 'lucide-react';
import SectionHeader from './SectionHeader';

const PROBLEMS = [
  { icon: FileX, title: 'Documents éparpillés', desc: 'Courriels, dossiers partagés, fichiers locaux : plus personne ne sait où se trouve la version de référence.' },
  { icon: EyeOff, title: 'Statuts invisibles', desc: "Impossible de savoir où en est une demande : on relance à l'aveugle, on traite deux fois le même dossier." },
  { icon: History, title: 'Aucune traçabilité', desc: "Pas d'historique fiable, des versions qui s'écrasent, une responsabilité qui devient floue." },
  { icon: ClipboardList, title: 'Traitement artisanal', desc: 'Des tableurs et des boîtes mail pour faire tourner un circuit qui mérite un vrai système.' },
];

const COSTS = [
  { icon: TrendingDown, text: 'jusqu’à 30 % du temps de vos équipes perdu à chercher des documents' },
  { icon: Timer, text: '1 demande sur 5 nécessite une relance' },
  { icon: AlertTriangle, text: 'zéro visibilité sur les délais de livraison' },
];

const ProblemSection = () => (
  <section id="probleme" className="py-20 md:py-28 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeader
        pill="Pourquoi DocuFlow"
        title={<>Le désordre documentaire a un coût <span className="text-gradient">que l'on sous-estime.</span></>}
        subtitle="Quand vos documents sont éparpillés et leurs statuts invisibles, chaque demande devient une source de friction quotidienne."
      />

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: reality cards */}
        <div className="space-y-3">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-afgc-secondary/30 hover:bg-white transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 group-hover:text-afgc-secondary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <p.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: cost card */}
        <div className="animate-fade-in-up delay-300">
          <div className="glass-card-premium p-8 h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-afgc-gold/60 to-transparent" />
            <h3 className="text-lg font-black text-afgc-primary mb-6">Le coût, concrètement</h3>
            <div className="space-y-4">
              {COSTS.map((c, i) => (
                <div key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${400 + i * 120}ms` }}>
                  <div className="p-2 rounded-lg bg-red-50 text-red-500 flex-shrink-0">
                    <c.icon size={16} />
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-slate-600 italic font-medium text-sm leading-relaxed">
                « Chaque entreprise mérite mieux. C'est exactement le rôle de DocuFlow. »
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
