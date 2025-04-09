
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ClubSection from '@/components/ClubSection';
import MissionSection from '@/components/MissionSection';
import DirectionsSection from '@/components/DirectionsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import NewsSection from '@/components/NewsSection';
import ExpertCouncilSection from '@/components/ExpertCouncilSection';
import LeadershipSection from '@/components/LeadershipSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Set page title and possibly other metadata
  useEffect(() => {
    document.title = "QAZTECH - Альянс технологических компаний Казахстана";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ClubSection />
      <MissionSection />
      <DirectionsSection />
      <AdvantagesSection />
      <NewsSection />
      <TeamSection />
      <ExpertCouncilSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
