import React from 'react';
import { Zap, Timer, ShieldCheck, Clock, Gift } from 'lucide-react';
import useCountUp from '../hooks/useCountUp';

const STATS = [
  { icon: Zap, prefix: '', value: 5, suffix: ' min', label: 'Création de votre espace' },
  { icon: Timer, prefix: '', value: 95, suffix: ' %', label: 'des documents livrés en 24 h' },
  { icon: ShieldCheck, prefix: '', value: 100, suffix: ' %', label: 'des échanges et versions tracés' },
  { icon: Clock, prefix: '', value: 24, suffix: '/7', label: 'Disponibilité de la plateforme' },
];

const StatItem = ({ stat, delay }) => {
  const [ref, value] = useCountUp(stat.value, { duration: 1400 });
  return (
    <div ref={ref} className="text-center px-2 py-4">
      <div className="flex items-center justify-center mb-2">
        <stat.icon size={18} className="text-afgc-secondary" />
      </div>
      <p className="text-3xl md:text-4xl font-black text-afgc-primary tracking-tight">
        {stat.prefix}
        {value}
        <span className="text-afgc-gold">{stat.suffix}</span>
      </p>
      <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
    </div>
  );
};

const StatsBar = () => (
  <section className="relative bg-white/60 backdrop-blur border-y border-slate-100 overflow-hidden">
    {/* Gold hairline */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-afgc-gold/50 to-transparent scale-x-0 animate-scale-in" style={{ animationDuration: '1.2s' }} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-stretch gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 flex-1 gap-2 md:gap-4">
          {STATS.map((s, i) => (
            <div key={s.label} className="animate-fade-in-up" style={{ animationDelay: `${200 + i * 120}ms` }}>
              <StatItem stat={s} delay={i} />
            </div>
          ))}
        </div>
        <div className="hidden xl:flex items-center">
          <div className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-br from-afgc-primary to-afgc-dark text-white shadow-lg">
            <Gift size={18} className="text-afgc-gold" />
            <div>
              <p className="text-sm font-black">Test gratuit</p>
              <p className="text-[10px] text-slate-300">sans engagement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsBar;
