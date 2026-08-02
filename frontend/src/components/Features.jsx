import React from 'react';
import { FolderOpen, FileText, MessageCircle, ShieldCheck, Building2, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader';

const LARGE = [
  {
    icon: FolderOpen, title: 'Référentiel GED', desc: 'Dossiers, versions multiples, statuts et historique complet : votre mémoire documentaire, centralisée et fiable.',
    grad: 'from-afgc-secondary to-afgc-primary', tag: 'GED',
  },
  {
    icon: FileText, title: 'Demandes & workflow', desc: 'De la demande à la livraison, chaque document suit une machine à états claire : en attente → à traiter → transmis → livré.',
    grad: 'from-indigo-500 to-blue-600', tag: 'Workflow',
  },
];

const SMALL = [
  { icon: MessageCircle, title: 'Messagerie intégrée', desc: 'Échangez en temps réel, avec pièces jointes, sans quitter la plateforme.', grad: 'from-emerald-500 to-emerald-600' },
  { icon: ShieldCheck, title: 'Rôles & gouvernance', desc: "Demandeur, archiviste, administrateur, superadministrateur : chacun voit ce qu'il doit voir.", grad: 'from-blue-500 to-blue-600' },
  { icon: Building2, title: 'Isolation multi-entreprises', desc: 'Des espaces totalement isolés : vos données ne se mélangent jamais.', grad: 'from-amber-500 to-amber-600' },
  { icon: Sparkles, title: 'Onboarding guidé', desc: 'Un parcours spotlight interactif qui rend chaque nouvel utilisateur autonome.', grad: 'from-purple-500 to-purple-600' },
];

const Features = () => (
  <section id="features" className="py-20 md:py-28 px-4 relative">
    <div className="absolute top-[10%] left-[-10%] w-[30%] h-[40%] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader
        pill="Fonctionnalités"
        title={<>Un socle complet, <span className="text-gradient">pensé pour l'entreprise.</span></>}
        subtitle="Six briques qui couvrent tout le cycle de vie documentaire, sans friction, sans outil en plus."
      />

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Row 1: 2 large cards */}
        {LARGE.map((f, i) => (
          <div key={f.title} className="group relative glass-card p-7 md:p-8 border border-slate-100 hover:shadow-elevated hover:border-afgc-secondary/20 transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 120}ms` }}>
            {/* Gold corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-afgc-gold/0 group-hover:border-afgc-gold/60 rounded-tr-[1rem] transition-all duration-500" />
            <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${f.grad} text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <f.icon size={26} />
            </div>
            <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-afgc-secondary transition-colors">
              {f.tag}
            </span>
            <h3 className="text-xl font-black text-slate-800 mb-2 group-hover:text-afgc-secondary transition-colors">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">{f.desc}</p>
          </div>
        ))}

        {/* Row 2: 4 standard cards */}
        {SMALL.map((f, i) => (
          <div key={f.title} className="group relative glass-card p-6 md:p-7 border border-slate-100 hover:shadow-elevated hover:border-afgc-secondary/20 transition-all duration-500 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${(i + 2) * 100}ms` }}>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-afgc-gold/0 group-hover:border-afgc-gold/60 rounded-tr-[1rem] transition-all duration-500" />
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${f.grad} text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <f.icon size={20} />
              </div>
              <div>
                <h3 className="font-black text-slate-800 mb-1.5 group-hover:text-afgc-secondary transition-colors">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
