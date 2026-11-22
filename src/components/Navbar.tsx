import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Box } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00e5ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="https://www.artstation.com/energydronepl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tech uppercase tracking-wider bg-white/5 border border-white/10 text-gray-200 hover:bg-[#00e5ff] hover:text-white hover:border-[#00e5ff] transition-all duration-300"
          >
            <span>ArtStation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c10] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
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
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.artstation.com/energydronepl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded bg-white/5 border border-white/10 text-sm font-medium text-white"
              >
                <span>ArtStation Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#00e5ff]" />
              </a>
              <a
                href="https://pl.linkedin.com/in/micha%C5%82-molenda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded bg-white/5 border border-white/10 text-sm font-medium text-white"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#0ea5e9]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
