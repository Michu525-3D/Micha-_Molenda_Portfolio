import React, { useState, useEffect } from 'react';
import { Box, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenCV?: () => void;
  isCVOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, isCVOpen = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.projects'), href: '#portfolio' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.community'), href: '#community' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-[#12141a] border border-white/15 flex items-center justify-center text-[#00e5ff] group-hover:border-[#00e5ff] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300">
            <Box className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-white group-hover:text-white text-base">
              MICHAŁ MOLENDA
            </span>
            <span className="text-[10px] uppercase font-mono-tech tracking-widest text-[#94a3b8]">
              3D Artist // Hard Surface
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links & Controls */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group glitch-text-hover"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00e5ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 pl-2 border-l border-white/10">
            {/* CV / Resume Page Button */}
            {onOpenCV && (
              <button
                onClick={onOpenCV}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider font-semibold border transition-all cursor-pointer glitch-hover ${
                  isCVOpen
                    ? 'bg-[#00e5ff] text-black border-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                    : 'bg-white/5 border-white/10 text-gray-200 hover:text-white hover:border-[#00e5ff]/50 hover:bg-white/10'
                }`}
              >
                <span>{t('nav.cv')}</span>
              </button>
            )}

            {/* Language Switcher Button */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-tech font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-[#00e5ff] hover:border-[#00e5ff]/50 transition-all cursor-pointer glitch-hover"
              title={language === 'en' ? 'Zmień na język polski' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span className={language === 'en' ? 'text-[#00e5ff]' : 'text-gray-400'}>EN</span>
              <span className="text-gray-600">/</span>
              <span className={language === 'pl' ? 'text-[#00e5ff]' : 'text-gray-400'}>PL</span>
            </button>

            {/* External ArtStation Link */}
            <a
              href="https://www.artstation.com/energydronepl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider bg-white/5 border border-white/10 text-gray-200 hover:bg-[#00e5ff] hover:text-black hover:border-[#00e5ff] transition-all duration-300 glitch-hover"
            >
              <span>{t('nav.artstation')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger & Lang Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 border border-white/15 text-xs font-mono-tech font-bold text-gray-200"
          >
            <span className={language === 'en' ? 'text-[#00e5ff]' : 'text-gray-400'}>EN</span>
            <span className="text-gray-600">/</span>
            <span className={language === 'pl' ? 'text-[#00e5ff]' : 'text-gray-400'}>PL</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {onOpenCV && (
              <button
                onClick={() => {
                  onOpenCV();
                  setMobileMenuOpen(false);
                }}
                className="text-left text-base font-semibold text-[#00e5ff] py-2 border-b border-white/10"
              >
                {t('nav.cv')}
              </button>
            )}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-200 hover:text-[#00e5ff] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://www.artstation.com/energydronepl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 text-base font-medium text-gray-200 hover:text-[#00e5ff]"
            >
              <span>{t('nav.artstation')}</span>
              <ArrowUpRight className="w-4 h-4 text-[#00e5ff]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
