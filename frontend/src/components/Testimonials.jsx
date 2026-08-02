import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const TESTIMONIALS = [
  {
    quote: 'Nous avons éliminé les relances à l’aveugle. Chaque collaborateur sait où en est sa demande, et nos archives sont enfin fiables.',
    name: 'Aïcha K.', role: 'Responsable administrative', company: 'Cabinet comptable, Cotonou', initial: 'A',
  },
  {
    quote: 'L’isolation des espaces nous a convaincus : chaque société de notre groupe a son environnement, sans jamais se mélanger.',
    name: 'Jean-Marc D.', role: 'Directeur des opérations', company: 'Groupe multi-sociétés', initial: 'J',
  },
  {
    quote: 'L’onboarding guidé a changé la donne : nos archivistes étaient autonomes le jour même, sans aucune formation.',
    name: 'Pélagie A.', role: 'Gestionnaire documentaire', company: 'Services financiers', initial: 'P',
  },
];

const LOGOS = ['Port de Cotonou', 'Assurances Horizon Bénin', 'Cabinet AGB & Associés', 'Logistix Ouest', 'Groupe SOTA', 'Pharma Bénin'];

const Testimonials = () => (
  <section id="temoignages" className="py-20 md:py-28 px-4 relative overflow-hidden">
    <div className="absolute bottom-[20%] left-[-10%] w-[25%] h-[40%] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeader
        pill="Témoignages"
        title={<>Ils nous <span className="text-gradient">font confiance.</span></>}
        subtitle="Services administratifs, cabinets d'expertise, assurances, logistique : DocuFlow s'adapte à tous les secteurs."
      />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className="group glass-card-premium p-7 border border-slate-100 hover:shadow-elevated hover:border-afgc-secondary/20 transition-all duration-500 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
            {/* Big quote watermark */}
            <Quote size={90} className="absolute -top-3 -right-3 text-slate-100 group-hover:text-blue-50 transition-colors duration-500" />

            {/* Stars */}
            <div className="flex gap-1 mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={15} className="text-afgc-gold fill-afgc-gold" />
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed text-[15px] mb-6 relative z-10">« {t.quote} »</p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-afgc-primary to-afgc-secondary text-white flex items-center justify-center font-black shadow-md">
                {t.initial}
              </div>
              <div>
                <p className="font-black text-slate-800 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Logo marquee */}
      <div className="relative overflow-hidden animate-fade-in-up delay-500" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <span key={i} className="text-slate-300 font-black text-lg tracking-wide whitespace-nowrap select-none">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
