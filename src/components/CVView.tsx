import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CVViewProps {
  onBack: () => void;
}

export const CVView: React.FC<CVViewProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [scale, setScale] = useState(1);
  const [isGlitching, setIsGlitching] = useState(true);
  const cvPath = `${import.meta.env.BASE_URL}cv/michal-molenda-cv.jpg`;

  // Battlefield-style entry burst glitch on initial open
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      setIsGlitching(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#08080a] text-white pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Sci-fi entry glitch overlay */}
      {isGlitching && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-black/40">
          <div className="w-full h-full animate-[cvBurstGlitch_0.6s_ease-out_forwards] mix-blend-screen bg-gradient-to-b from-transparent via-[#00e5ff]/20 to-transparent" />
          <div className="absolute font-mono-tech text-xs tracking-widest text-[#00e5ff] animate-pulse">
            // DECRYPTING_DOCUMENT_STREAM :: CV_MOLENDA_2026 //
          </div>
        </div>
      )}

      {/* Background glow and subtle tactical mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00e5ff]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-6 relative z-10">
        
        {/* Navigation Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0c0e14]/90 border border-white/10 backdrop-blur-md shadow-2xl">
          
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-wider text-gray-200 hover:text-white transition-all cursor-pointer glitch-hover"
          >
            <ArrowLeft className="w-4 h-4 text-[#00e5ff]" />
            <span>{language === 'pl' ? 'Powrót do Portfolio' : 'Back to Portfolio'}</span>
          </button>

          {/* Title & Document status */}
          <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">MICHAŁ MOLENDA — CURRICULUM VITAE</span>
          </div>

          {/* Action buttons: Zoom & Download */}
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg bg-white/5 border border-white/10 p-1">
              <button
                onClick={() => setScale((s) => Math.max(s - 0.15, 0.7))}
                className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Pomniejsz"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setScale(1)}
                className="px-2 text-xs font-mono-tech text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Reset widoku"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                onClick={() => setScale((s) => Math.min(s + 0.15, 1.8))}
                className="p-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Powiększ"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={cvPath}
              download="Michal_Molenda_CV.jpg"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00e5ff] hover:bg-[#00b4d8] text-black font-semibold text-xs font-mono-tech uppercase tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all cursor-pointer glitch-hover"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'pl' ? 'Pobierz CV' : 'Download CV'}</span>
            </a>
          </div>

        </div>

        {/* Document Display Canvas */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0c0e14] border border-white/15 shadow-2xl p-4 md:p-8 flex justify-center">
          
          {/* Sci-fi HUD corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00e5ff]" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00e5ff]" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00e5ff]" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00e5ff]" />

          {/* Rendered CV Document */}
          <div
            className="transition-transform duration-200 ease-out origin-top flex justify-center shadow-[0_15px_50px_rgba(0,0,0,0.9)] max-w-full"
            style={{ transform: `scale(${scale})` }}
          >
            <img
              src={cvPath}
              alt="Michał Molenda - Curriculum Vitae"
              className="w-full max-w-3xl rounded-lg border border-white/20 select-none pointer-events-auto"
            />
          </div>

        </div>

        {/* Footer info */}
        <div className="text-center text-xs font-mono-tech text-gray-500">
          DOCUMENT CLASSIFICATION: PUBLIC // RESUME // MICHAŁ MOLENDA 2026
        </div>

      </div>
    </div>
  );
};
