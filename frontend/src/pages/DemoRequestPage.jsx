import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, User, Mail, Building2, Briefcase, MessageSquare, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:3002';

const FEATURES_LIST = [
  'Demandes documentaires',
  'Référentiel GED',
  'Messagerie interne',
  'Gestion multi-entreprises',
  'Gestion des rôles',
  'Onboarding guidé',
  'Notifications',
  'Upload de fichiers',
];

const DemoRequestPage = () => {
  const [form, setForm] = useState({ full_name: '', email: '', company: '', position: '', features: [], message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const toggleFeature = (f) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.includes(f) ? prev.features.filter((x) => x !== f) : [...prev.features, f],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/submit`, form);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="glass-card-premium p-12 max-w-md text-center animate-scale-in relative z-10 shadow-elevated">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in-down">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-3 animate-fade-in-up">
            Demande envoyée !
          </h2>
          <p className="text-slate-500 mb-8 animate-fade-in-up delay-100">
            Merci pour votre intérêt ! Nous avons bien reçu votre demande de test. Nous vous contacterons très bientôt à l'adresse <strong className="text-slate-700">{form.email}</strong>.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2 animate-fade-in-up delay-200">
            <ArrowLeft size={18} /> Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />

      <div className="pt-28 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        <div className="absolute top-[-15%] left-[-10%] w-[40%] h-[40%] bg-blue-500/8 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none animate-float delay-500" />

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-afgc-secondary/10 text-afgc-secondary text-xs font-bold mb-4">
              <Sparkles size={14} /> Demande de test
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-afgc-primary tracking-tight mb-3">
              Essayez DocuFlow
            </h1>
            <p className="text-slate-500 text-lg">
              Remplissez ce formulaire pour recevoir un accès de test gratuit à la plateforme.
            </p>
          </div>

          {/* Form */}
          <div className="glass-card-premium p-8 md:p-10 shadow-elevated animate-fade-in-up delay-100">
            {error && (
              <div className="mb-6 p-4 bg-red-50/80 backdrop-blur-sm text-red-600 rounded-xl border border-red-200 text-sm font-bold flex items-center gap-3 animate-fade-in-down">
                <AlertCircle size={18} /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nom complet *</label>
                <div className="relative group">
                  <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-afgc-secondary transition-colors pointer-events-none" />
                  <input type="text" className="input-premium pl-12" value={form.full_name} onChange={(e) => setForm({...form, full_name: e.target.value})} required placeholder="Votre nom complet" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email *</label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-afgc-secondary transition-colors pointer-events-none" />
                  <input type="email" className="input-premium pl-12" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required placeholder="votre@email.com" />
                </div>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Entreprise</label>
                  <div className="relative group">
                    <Building2 size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-afgc-secondary transition-colors pointer-events-none" />
                    <input type="text" className="input-premium pl-12" value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} placeholder="Nom de votre entreprise" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Poste</label>
                  <div className="relative group">
                    <Briefcase size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-afgc-secondary transition-colors pointer-events-none" />
                    <input type="text" className="input-premium pl-12" value={form.position} onChange={(e) => setForm({...form, position: e.target.value})} placeholder="Votre poste" />
                  </div>
                </div>
              </div>

              {/* Features checkboxes */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Fonctionnalités intéressées <span className="text-slate-300 normal-case font-medium">(optionnel)</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {FEATURES_LIST.map((f) => (
                    <button key={f} type="button" onClick={() => toggleFeature(f)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                        form.features.includes(f)
                          ? 'bg-afgc-secondary/10 border-afgc-secondary/30 text-afgc-secondary'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                      }`}>
                      {form.features.includes(f) && <span className="mr-1">✓</span>}
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <div className="relative group">
                  <MessageSquare size={18} className="absolute left-3.5 top-3.5 text-slate-400 group-focus-within:text-afgc-secondary transition-colors pointer-events-none" />
                  <textarea className="input-premium pl-12 min-h-[120px] resize-y" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="Décrivez vos besoins ou posez une question..." />
                </div>
              </div>

              {/* Submit */}
              <button type="submit" disabled={loading}
                className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-blue relative overflow-hidden group">
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-400 font-medium animate-fade-in-up delay-300">
            <span>🔒 Données sécurisées</span>
            <span>📧 Réponse sous 24h</span>
            <span>🎯 100% gratuit</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DemoRequestPage;
