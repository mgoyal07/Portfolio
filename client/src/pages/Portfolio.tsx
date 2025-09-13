import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { AnimatedBackground } from '@/components/AnimatedBackground';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize dark mode
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-background text-foreground">
        <Header isDark={isDark} onThemeToggle={handleThemeToggle} />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
}