import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { CornerGlitch } from './components/CornerGlitch';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#08080a] text-[#e2e8f0] relative selection:bg-[#00e5ff]/30 selection:text-white">
        {/* Sci-fi Corner Glitch in bottom-left */}
        <CornerGlitch />

        {/* Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Experience />
          <Skills />
          <Community />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
