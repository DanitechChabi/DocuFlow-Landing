import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FAQS = [
  {
    q: 'Combien de temps faut-il pour déployer DocuFlow ?',
    a: 'Quelques minutes. Votre espace entreprise est créé, un superadministrateur est désigné, et l’onboarding guidé prend chaque collaborateur par la main. Une démo accompagnée est possible via la page Demander un test.',
  },
  {
    q: 'Nos documents sont-ils vraiment isolés des autres entreprises ?',
    a: 'Oui. DocuFlow est multi-tenant : chaque entreprise dispose d’un espace strictement isolé (données, utilisateurs, référentiels, branding), renforcé par une isolation au niveau base de données. Les autorisations reposent sur des rôles granulaires, du demandeur au superadministrateur.',
  },
  {
    q: 'Que contient le test gratuit ?',
    a: 'L’accès complet à la plateforme : référentiel GED, demandes et workflow, messagerie temps réel, rôles, notifications et branding personnalisable. Sans carte bancaire, sans engagement.',
  },
  {
    q: 'Pouvons-nous suivre où en est chaque demande ?',
    a: 'En permanence. Chaque demande traverse une machine à états claire — en attente, à traiter, transmis, livré — avec notification à chaque étape et historique complet des actions.',
  },
  {
    q: 'Qui peut voir et faire quoi ?',
    a: 'Tout dépend du rôle : le demandeur crée et suit ses demandes, l’archiviste traite et livre, l’administrateur configure et délègue, le superadministrateur pilote l’espace. Vous définissez les périmètres.',
  },
  {
    q: 'Une assistance est-elle prévue pour la mise en route ?',
    a: 'Oui. ARCHICORP accompagne le déploiement : configuration, import des référentiels, formation des archivistes. Votre demande de test est suivie personnellement par l’équipe.',
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-blue-50/40 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeader
          pill="FAQ"
          title={<>Questions <span className="text-gradient">fréquentes.</span></>}
        />

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass-card overflow-hidden border transition-all duration-300 animate-fade-in-up ${isOpen ? 'border-afgc-secondary/40 shadow-lg' : 'border-slate-100 hover:border-slate-200'}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className={`font-bold text-[15px] transition-colors ${isOpen ? 'text-afgc-secondary' : 'text-slate-800'}`}>{f.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-afgc-secondary text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-500 leading-relaxed text-[15px]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
