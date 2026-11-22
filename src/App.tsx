import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { CVView } from './components/CVView';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'main' | 'cv'>('main');

  // Support URL hash routing: #cv or direct navigation
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#cv') {
        setCurrentView('cv');
      } else if (currentView === 'cv') {
        setCurrentView('main');
      }
    };
    if (window.location.hash === '#cv') {
      setCurrentView('cv');
    }
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentView]);

  const openCV = () => {
    window.location.hash = 'cv';
    setCurrentView('cv');
  };

  const closeCV = () => {
    window.location.hash = '';
    setCurrentView('main');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#08080a] text-[#e2e8f0] relative selection:bg-[#00e5ff]/30 selection:text-white">
        {/* Navigation */}
        <Navbar onOpenCV={openCV} isCVOpen={currentView === 'cv'} />

        {/* View Switcher */}
        {currentView === 'cv' ? (
          <CVView onBack={closeCV} />
        ) : (
          /* Main Portfolio Sections */
          <main>
            <Hero onOpenCV={openCV} />
            <Portfolio />
            <About />
            <Experience />
            <Skills />
            <Community />
            <Contact />
          </main>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
