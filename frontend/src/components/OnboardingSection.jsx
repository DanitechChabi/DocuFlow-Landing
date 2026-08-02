import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FolderOpen, Users, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const STEPS = [
  { icon: Building2, num: '1', title: 'Créez votre espace', desc: 'En quelques clics, votre entreprise dispose de son environnement sécurisé et dédié.' },
  { icon: FolderOpen, num: '2', title: 'Importez votre référentiel', desc: 'Renseignez vos types de documents, vos dossiers et vos modèles : la GED s’adapte à vos usages, pas l’inverse.' },
  { icon: Users, num: '3', title: 'Invitez et personnalisez', desc: 'Ajoutez vos collaborateurs, assignez leurs rôles, déposez votre logo et vos couleurs.' },
];

const OnboardingSection = () => (
  <section id="onboarding" className="py-20 md:py-28 px-4 bg-white relative overflow-hidden">
    <div className="absolute top-[20%] left-[10%] w-[25%] h-[40%] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-3xl mx-auto relative z-10">
      <SectionHeader
        pill="Mise en route"
        title={<>En ligne en <span className="text-gradient">quelques minutes.</span></>}
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-afgc-secondary via-afgc-secondary/50 to-afgc-gold/50" />

        <div className="space-y-10">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative flex items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 180}ms` }}>
              {/* Number disc */}
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-afgc-primary text-afgc-gold flex items-center justify-center text-xl font-black shadow-lg">
                  {s.num}
                </div>
                <div className="absolute inset-0 rounded-full bg-afgc-secondary/20 blur-md animate-pulse-soft" />
              </div>

              <div className="pt-1 flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  <s.icon size={17} className="text-afgc-secondary" />
                  <h3 className="text-lg font-black text-slate-800">{s.title}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accroche + micro-CTA */}
      <div className="mt-14 text-center animate-fade-in-up delay-500">
        <p className="text-slate-600 font-medium text-lg mb-5">Moins d’une heure pour être opérationnel. Aucun développeur, aucune formation requise.</p>
        <Link to="/demander" className="btn-secondary inline-flex items-center gap-2 group text-base px-7 py-3.5">
          Demander un test <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform text-afgc-secondary" />
        </Link>
      </div>
    </div>
  </section>
);

export default OnboardingSection;
