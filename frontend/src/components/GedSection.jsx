import React from 'react';
import { FolderOpen, CheckCircle, FileText, History, HardDrive } from 'lucide-react';
import SectionHeader from './SectionHeader';

const BULLETS = [
  'Dossiers hiérarchisables par service, projet ou type de document',
  'Versionnage automatique : jamais un fichier écrasé par erreur',
  'Statuts explicites pour savoir, d’un coup d’œil, ce qui est utilisable',
  'Historique complet : qui a fait quoi, et quand',
];

const FOLDERS = ['Contrats', 'RH', 'Finances', 'Certificats'];

const ACTIVITY = [
  { t: '14:32', text: 'M. Dosso a téléversé la v3 de Contrat SOTA' },
  { t: '14:15', text: 'Le document RH-2026-018 est passé "Prêt"' },
  { t: '11:47', text: 'Vérification effectuée par Aïcha K.' },
];

const GedSection = () => (
  <section id="ged" className="py-20 md:py-28 px-4 bg-white relative overflow-hidden">
    <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: text */}
        <div>
          <SectionHeader
            align="left"
            pill="Référentiel GED"
            title={<>Une mémoire documentaire <span className="text-gradient">unique et fiable.</span></>}
            subtitle="Dossiers structurés, versions multiples, statuts explicites (Disponible, Prêt, Archivé) : DocuFlow devient le point de vérité unique de vos documents. Chaque modification est datée, chaque version conservée, chaque accès tracé."
          />
          <div className="space-y-3">
            {BULLETS.map((b, i) => (
              <div key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <CheckCircle size={20} className="text-afgc-secondary flex-shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed text-[15px]">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: GED mockup */}
        <div className="animate-fade-in-up delay-300">
          <div className="relative">
            {/* Hatch pattern bg */}
            <div className="absolute -inset-4 rounded-3xl opacity-60" style={{ background: 'repeating-linear-gradient(45deg, rgba(59,130,246,0.03) 0px, rgba(59,130,246,0.03) 1px, transparent 1px, transparent 12px)' }} />

            <div className="relative glass-card-premium p-6 shadow-elevated">
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-blue-100 text-afgc-secondary"><FolderOpen size={16} /></div>
                <span className="text-sm font-black text-slate-800">Référentiel documentaire</span>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {/* Folders panel */}
                <div className="col-span-2 bg-slate-50 rounded-xl p-3">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Dossiers</p>
                  <div className="space-y-1.5">
                    {FOLDERS.map((f, i) => (
                      <div key={f} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold ${i === 0 ? 'bg-white shadow-sm text-afgc-secondary border border-blue-100' : 'text-slate-500 hover:bg-white/60 transition-colors'}`}>
                        <FolderOpen size={12} className={i === 0 ? 'text-afgc-secondary' : 'text-slate-300'} /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Files panel */}
                <div className="col-span-3 bg-white border border-slate-100 rounded-xl p-3">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Fichiers — Contrats</p>
                  {[
                    { name: 'Contrat SOTA.docx', ver: 'v3', status: 'Disponible', st: 'bg-emerald-100 text-emerald-600', size: '1,2 Mo' },
                    { name: 'Contrat SOTA.docx', ver: 'v2', status: 'Archivé', st: 'bg-slate-100 text-slate-500', size: '1,1 Mo' },
                    { name: 'Contrat SOTA.docx', ver: 'v1', status: 'Archivé', st: 'bg-slate-100 text-slate-500', size: '0,9 Mo' },
                  ].map((f, i) => (
                    <div key={i} className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-[10px] ${i === 0 ? 'bg-blue-50/50' : ''}`}>
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText size={12} className="text-slate-300 flex-shrink-0" />
                        <span className="truncate text-slate-600 font-medium">{f.name}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="font-mono text-[9px] text-afgc-secondary font-black">{f.ver}</span>
                        <span className={`px-1.5 py-0.5 rounded-full text-[8px] font-bold ${f.st}`}>{f.status}</span>
                        <span className="text-slate-300 text-[9px] hidden sm:inline">{f.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity timeline */}
              <div className="mt-4 bg-slate-50 rounded-xl p-3">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5"><History size={10} /> Activité récente</p>
                <div className="space-y-2">
                  {ACTIVITY.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 animate-fade-in-up" style={{ animationDelay: `${500 + i * 120}ms` }}>
                      <span className="font-mono text-[9px] text-slate-300 flex-shrink-0 pt-0.5">{a.t}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-afgc-secondary mt-1 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500">{a.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-elevated px-4 py-2.5 flex items-center gap-2.5 animate-float delay-500">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center"><HardDrive size={15} className="text-emerald-600" /></div>
              <div>
                <p className="text-xs font-black text-slate-800">Version v3 conservée</p>
                <p className="text-[9px] text-slate-400">automatiquement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GedSection;
