import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

const PLATFORM_URL = 'https://docuflow-afgc.vercel.app';

const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Le circuit', href: '#workflow' },
  { label: 'Référentiel', href: '#ged' },
  { label: 'Sécurité', href: '#securite' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06),0_8px_32px_rgba(15,23,42,0.06)]' : 'bg-transparent'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-afgc-secondary to-blue-600 flex items-center justify-center shadow-md group-hover:shadow-glow-blue transition-all duration-300 group-hover:scale-105">
              <FileText size={18} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tight">
              <span className="text-afgc-primary">Docu</span><span className="text-afgc-secondary">Flow</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="link-underline text-sm font-semibold text-slate-500 hover:text-afgc-secondary transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-600 hover:text-afgc-secondary transition-colors flex items-center gap-1.5">
              Accéder à la plateforme <ArrowRight size={14} />
            </a>
            <Link to="/demander" className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2 shadow-md hover:shadow-glow-blue">
              Demander un test
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors" aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-afgc-secondary transition-colors">
                {l.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-slate-100 mt-2">
              <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="block text-center btn-secondary text-sm py-3">Accéder à la plateforme</a>
              <Link to="/demander" onClick={() => setMobileOpen(false)} className="block text-center btn-primary text-sm py-3">Demander un test</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
export { PLATFORM_URL };
