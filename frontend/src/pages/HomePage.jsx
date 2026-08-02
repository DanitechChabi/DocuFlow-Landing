import React from 'react';
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

const HomePage = () => (
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

export default HomePage;
