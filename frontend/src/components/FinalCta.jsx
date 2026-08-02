import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Handshake } from 'lucide-react';

const PLATFORM_URL = 'https://docuflow-afgc.vercel.app';

const FinalCta = () => (
  <section id="cta" className="py-20 md:py-28 px-4 relative">
    <div className="max-w-5xl mx-auto">
      <div className="relative animate-fade-in-up">
        {/* Halo */}
        <div className="absolute -inset-8 bg-gradient-to-r from-afgc-secondary/20 to-blue-400/20 rounded-[3rem] blur-3xl opacity-60 animate-glow-pulse pointer-events-none" />

        <div className="relative glass-card-premium p-10 md:p-16 text-center overflow-hidden">
          {/* Gold hairline top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-afgc-gold/60 to-transparent scale-x-0 animate-scale-in" style={{ animationDuration: '1.2s' }} />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-afgc-primary tracking-tight leading-[1.15] mb-5">
            Votre documentation mérite mieux <br className="hidden md:block" />
            que des <span className="text-gradient">tableurs.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Rejoignez les entreprises qui ont fait de DocuFlow leur référentiel documentaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/demander" className="btn-primary text-base px-9 py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-blue group relative overflow-hidden">
              Demander un test gratuit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-9 py-4 flex items-center justify-center gap-2 border-afgc-primary/15 hover:bg-blue-50 group">
              Accéder à la plateforme
              <ExternalLink size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-afgc-secondary" />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-afgc-primary/5 border border-afgc-primary/10 text-sm text-slate-600 font-semibold mb-6">
            <Handshake size={15} className="text-afgc-secondary" />
            Démo accompagnée par <strong className="text-afgc-primary">ARCHICORP</strong> — CHABI BOUKO Daniel
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {['Gratuit', 'Sans carte bancaire', 'Déployé en 5 minutes'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                <CheckCircle size={14} className="text-emerald-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCta;
