import React, { useState } from 'react';
import { ArrowDown, User, Mail, Crosshair, ChevronRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [photoError, setPhotoError] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic ambient sci-fi lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & Call To Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Tech badge status */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-tech tracking-wider text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] -ml-4" />
            <span>AVAILABLE FOR AAA / GAME & CINEMATIC PROJECTS</span>
          </div>

          {/* Main Title & Specialist Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
              {t('hero.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                {t('hero.title2')}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-mono-tech text-[#00e5ff] font-semibold tracking-wide flex items-center gap-2">
              <Crosshair className="w-5 h-5 text-[#00e5ff]" />
              Hard Surface & Vehicle Artist
            </p>
          </div>

          {/* Core Mantra */}
          <p className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed border-l-2 border-[#00e5ff] pl-4 py-1">
            „Building worlds, machines and visual experiences.”
          </p>

          <p className="text-sm md:text-base text-gray-400 max-w-xl">
            {t('hero.desc')}
          </p>

          {/* Action Buttons: View Resume, About Me, Contact */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#portfolio"
              className="px-6 py-3.5 rounded bg-[#00e5ff] hover:bg-[#00b4d8] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center gap-2 group cursor-pointer glitch-hover"
            >
              <span>{t('hero.explore')}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {onOpenCV && (
              <button
                onClick={onOpenCV}
                className="px-6 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-[#00e5ff]/40 text-[#00e5ff] hover:text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer glitch-hover"
              >
                <FileText className="w-4 h-4 text-[#00e5ff]" />
                <span>{t('nav.cv')}</span>
              </button>
            )}

            <a
              href="#about"
              className="px-6 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer glitch-hover"
            >
              <User className="w-4 h-4 text-gray-400" />
              <span>{t('hero.aboutMe')}</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer glitch-hover"
            >
              <Mail className="w-4 h-4 text-[#00e5ff]" />
              <span>{t('hero.contact')}</span>
            </a>
          </div>

        </div>

        {/* Right Column: Artist Photo or 3D Showcase Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl group">
            
            {/* HUD Corner Accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00e5ff] z-20" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00e5ff] z-20" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00e5ff] z-20" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00e5ff] z-20" />

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0d0f14] border border-white/10 flex flex-col justify-end p-6">
              
              {!photoError ? (
                <img
                  src={`${import.meta.env.BASE_URL}profile/michal-molenda.jpg`}
                  alt="Michał Molenda - 3D Hard Surface & Vehicle Artist"
                  onError={() => setPhotoError(true)}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Fallback Sci-Fi HUD Slot */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#121620] to-[#08090d]">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                  <div className="relative z-10 w-24 h-24 rounded-full border-2 border-dashed border-[#00e5ff]/60 flex items-center justify-center mb-6 bg-[#00e5ff]/5 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
                    <User className="w-10 h-10 text-[#00e5ff]" />
                  </div>
                  <div className="relative z-10 space-y-2">
                    <span className="text-xs uppercase font-mono-tech tracking-widest text-[#94a3b8]">
                      Artist Portrait Slot
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      Michał Molenda
                    </h3>
                    <p className="text-xs text-gray-400 font-mono-tech max-w-xs">
                      Drop your photo or avatar render to: <br />
                      <span className="text-[#00e5ff]">public/profile/michal-molenda.jpg</span>
                    </p>
                  </div>
                </div>
              )}

              {/* Foreground Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Quick Info Tag inside the card */}
              <div className="relative z-10 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono-tech text-gray-300">MICHAŁ MOLENDA</div>
                  <div className="text-[11px] text-[#00e5ff] font-mono-tech">VEHICLE & HARD SURFACE</div>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Available for work" />
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#portfolio"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
        aria-label="Scroll down to portfolio"
      >
        <span className="text-[10px] font-mono-tech tracking-widest uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#00e5ff]" />
      </a>
    </section>
  );
};
