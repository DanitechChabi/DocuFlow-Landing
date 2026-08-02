import React from 'react';
import { UserPlus, Send, CheckCircle } from 'lucide-react';

const steps = [
  { icon: UserPlus, num: '01', title: 'Créez votre espace', desc: 'Inscrivez votre entreprise en quelques secondes. Un superadmin est automatiquement créé.', color: 'from-blue-500 to-blue-600' },
  { icon: Send, num: '02', title: 'Soumettez vos demandes', desc: 'Créez des demandes de documents avec pièces jointes, priorité et suivi en temps réel.', color: 'from-purple-500 to-purple-600' },
  { icon: CheckCircle, num: '03', title: 'Recevez vos documents', desc: 'Les archivistes traitent, vérifient et livrent les documents. Vous êtes notifié à chaque étape.', color: 'from-emerald-500 to-emerald-600' },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-black text-afgc-primary tracking-tight mb-4">
          Comment ça marche ?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Trois étapes simples pour démarrer avec DocuFlow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-px bg-gradient-to-r from-slate-200 to-slate-100" />
            )}

            <div className="relative inline-flex mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg`}>
                <s.icon size={32} />
              </div>
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-afgc-primary text-white text-xs font-black flex items-center justify-center shadow-md">
                {s.num}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
