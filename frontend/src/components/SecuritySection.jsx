import React from 'react';
import { Shield, Lock, Building2, User, Archive, Crown, UserCog, KeyRound } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ROLES = [
  { icon: User, name: 'Demandeur', desc: 'crée et suit ses demandes de documents' },
  { icon: Archive, name: 'Archiviste', desc: 'traite, vérifie et livre les documents' },
  { icon: UserCog, name: 'Administrateur', desc: 'gère utilisateurs, sections et marque' },
  { icon: Crown, name: 'Superadministrateur', desc: 'accès complet et paramètres globaux' },
];

const ISOLATION = [
  'Séparation stricte des données entre organisations',
  'Branding et sections propres à chaque entreprise',
  'Journal d’accès et d’activité par espace',
];

const SecuritySection = () => (
  <section id="securite" className="py-20 md:py-28 px-4 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Header with shield icon */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="relative inline-flex mb-6">
          <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl animate-glow-pulse" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-afgc-primary to-afgc-dark text-afgc-gold shadow-elevated">
            <Shield size={32} />
          </div>
        </div>
        <SectionHeader
          pill="Gouvernance & sécurité"
          title={<>Des accès précis. Des espaces isolés. <span className="text-gradient">Zéro compromis.</span></>}
        />
      </div>

      {/* Trust seals */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 animate-fade-in-up delay-200">
        {[
          { icon: Lock, text: 'Chiffrement & authentification JWT' },
          { icon: Building2, text: 'Isolation des données (multi-tenant)' },
          { icon: Shield, text: 'Traçabilité totale des versions' },
        ].map((s, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-100 text-emerald-700 text-xs font-bold shadow-sm">
            <s.icon size={14} className="text-emerald-500" /> {s.text}
          </span>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Governance */}
        <div className="glass-card-premium p-7 md:p-8 animate-fade-in-up delay-300">
          <h3 className="font-black text-lg text-afgc-primary mb-2 flex items-center gap-2"><UserCog size={20} className="text-afgc-secondary" /> Une gouvernance granulaire</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">Quatre rôles, chacun avec ses permissions exactes. Vos équipes avancent, sans jamais dépasser leurs prérogatives.</p>
          <div className="space-y-2">
            {ROLES.map((r, i) => (
              <div key={r.name} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-afgc-secondary/30 hover:bg-white transition-all duration-300 animate-scale-in" style={{ animationDelay: `${400 + i * 100}ms` }}>
                <div className="p-2 rounded-lg bg-white border border-slate-100 text-afgc-secondary flex-shrink-0">
                  <r.icon size={15} />
                </div>
                <div>
                  <span className="text-sm font-black text-slate-800 block">{r.name}</span>
                  <span className="text-xs text-slate-500">{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Isolation */}
        <div className="glass-card-premium p-7 md:p-8 animate-fade-in-up delay-500">
          <h3 className="font-black text-lg text-afgc-primary mb-2 flex items-center gap-2"><Building2 size={20} className="text-afgc-gold" /> Isolation multi-entreprises</h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">Chaque entreprise vit dans son propre espace, cloisonné au niveau base de données. Données, utilisateurs, référentiels et branding : rien ne se croise.</p>
          <div className="space-y-3">
            {ISOLATION.map((text, i) => (
              <div key={i} className="relative p-3.5 rounded-xl bg-gradient-to-br from-afgc-primary/5 to-blue-500/5 border border-slate-100">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-afgc-secondary/50 to-afgc-gold/50" />
                <p className="text-sm text-slate-600 font-medium">{text}</p>
              </div>
            ))}
          </div>
          {/* Partition visual */}
          <div className="mt-5 flex gap-2">
            {['A', 'B', 'C'].map((letter, i) => (
              <div key={letter} className={`flex-1 h-14 rounded-xl flex items-center justify-center text-lg font-black ${i === 0 ? 'bg-afgc-primary/90 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500 font-medium animate-fade-in-up delay-600">
        {['Authentification sécurisée', 'Isolation des données (multi-tenant)', 'Historique d’activité complet'].map((t) => (
          <span key={t} className="flex items-center gap-1.5"><KeyRound size={13} className="text-afgc-secondary" /> {t}</span>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
