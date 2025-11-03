import React from 'react';
import QualificationHero from '../components/qualification/QualificationHero';
import QualificationForm from '../components/qualification/QualificationForm';
import TrustIndicators from '../components/qualification/TrustIndicators';
import Footer from '../components/solar/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <QualificationHero />
      <QualificationForm />
      <TrustIndicators />
      <Footer />
    </div>
  );
}