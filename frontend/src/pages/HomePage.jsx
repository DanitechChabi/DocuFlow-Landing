import React from 'react';
import useSEO from '../hooks/useSEO';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ProblemSection from '../components/ProblemSection';
import WorkflowSection from '../components/WorkflowSection';
import Features from '../components/Features';
import GedSection from '../components/GedSection';
import SecuritySection from '../components/SecuritySection';
import OnboardingSection from '../components/OnboardingSection';
import BrandSection from '../components/BrandSection';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const HomePage = () => {
  useSEO({
    title: 'DocuFlow — Plateforme de gestion documentaire | Test gratuit',
    description:
      'DocuFlow, la plateforme de gestion documentaire pour entreprises : demandes de documents, suivi en temps réel, GED, messagerie et rôles. Sans carte bancaire, déployée en 5 minutes. Demandez un test gratuit.',
    path: '/',
  });

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative">
    <Navbar />
    <main>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <WorkflowSection />
      <Features />
      <GedSection />
      <SecuritySection />
      <OnboardingSection />
      <BrandSection />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </main>
    <Footer />
    <BackToTop />
  </div>
  );
};

export default HomePage;
