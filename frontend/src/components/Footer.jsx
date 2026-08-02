import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Globe, Heart, ArrowRight, ExternalLink } from 'lucide-react';

const PLATFORM_URL = 'https://docuflow-afgc.vercel.app';

const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Le circuit', href: '#workflow' },
  { label: 'Référentiel', href: '#ged' },
  { label: 'Sécurité', href: '#securite' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
];

const Footer = () => (
  <footer className="bg-afgc-primary text-white pt-16 pb-8 px-4 relative overflow-hidden">
    {/* Orbs */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-afgc-secondary/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-afgc-secondary to-blue-500 flex items-center justify-center shadow-md">
              <FileText size={18} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">Docu</span><span className="text-afgc-secondary">Flow</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Plateforme complète de gestion documentaire conçue pour faciliter le suivi des demandes de documents au sein de votre organisation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-wider text-slate-400 mb-4">Navigation</h4>
          <div className="space-y-2">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-slate-300 hover:text-afgc-secondary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Platform + Contact */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-wider text-slate-400 mb-4">Plateforme</h4>
          <div className="space-y-2 mb-6">
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-afgc-secondary transition-colors">
              Accéder à la plateforme <ExternalLink size={12} />
            </a>
            <Link to="/demander" className="flex items-center gap-1.5 text-sm text-afgc-secondary hover:text-blue-300 font-semibold transition-colors">
              Demander un test <ArrowRight size={12} />
            </Link>
          </div>
          <h4 className="font-black text-sm uppercase tracking-wider text-slate-400 mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="mailto:chabidaniel093@gmail.com" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Mail size={14} /> chabidaniel093@gmail.com
            </a>
            <a href="https://danielchabi.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Globe size={14} /> danielchabi.netlify.app
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} <strong className="text-slate-400">ARCHICORP</strong> — Tous droits réservés
        </p>
        <p className="text-xs text-slate-500 flex items-center gap-1">
          Conçu et développé avec <Heart size={12} className="text-red-400 fill-red-400" /> par <strong className="text-slate-400">CHABI BOUKO Daniel</strong>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
