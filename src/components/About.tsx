import React, { useState } from 'react';
import { User } from 'lucide-react';

export const About: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="relative py-28 border-t border-white/5 bg-[#0a0c12]">
      {/* Subtle backdrop mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section title */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#ff5500]">
            <span className="w-6 h-[1px] bg-[#ff5500]" />
            PROFILE & ARTISTIC PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            ABOUT ME
          </h2>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait / Model Viewport */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-xl overflow-hidden bg-[#0e111a] border border-white/10 group shadow-2xl">
              
              {/* Sci-fi HUD Overlays */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                <span>ARTIST VIEWPORT // CAM_01</span>
              </div>

              {!photoError ? (
                <img
                  src="/profile/michal-molenda.jpg"
                  alt="Michał Molenda - 3D Hard Surface & Vehicle Artist"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#131722] to-[#0a0c10]">
                  <div className="w-20 h-20 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mb-4 text-[#ff5500]">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="text-white font-bold text-base tracking-wide">
                    Michał Molenda
                  </div>
                  <div className="text-xs font-mono-tech text-gray-400 mt-1">
                    Hard Surface & Vehicle Artist
                  </div>
                  <div className="mt-4 text-[10px] font-mono-tech text-gray-500 border border-white/10 px-3 py-1.5 rounded bg-black/40">
                    Replace: public/profile/michal-molenda.jpg
                  </div>
                </div>
              )}

              {/* Bottom tag bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 space-y-1">
                <div className="text-sm font-bold text-white tracking-wide">
                  MICHAŁ MOLENDA
                </div>
                <div className="text-xs font-mono-tech text-[#ff5500]">
                  GAMES • HARD SURFACE • VEHICLES • VISUALIZATION
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Statement & Key Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 md:p-8 rounded-xl bg-white/[0.02] border border-white/10 space-y-5">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
                Hi, I'm Michał – a 3D Artist focused on <strong className="text-white font-semibold">Hard Surface and Vehicle Art</strong>, with experience across game development, 3D visualization and motion design.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                I enjoy creating detailed assets, vehicles and visual experiences, combining technical precision with creativity. My experience ranges from game art production and environment assets to product visualization, motion design and experimental projects.
              </p>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light border-l-2 border-[#ff5500] pl-4">
                I'm constantly developing my skills, exploring new workflows and looking for opportunities to create compelling visual experiences.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#ff5500] text-xs font-mono-tech uppercase tracking-wider font-bold">
                  01 // PRECISION
                </div>
                <div className="text-sm font-semibold text-white">Hard Surface Craft</div>
                <p className="text-xs text-gray-400">
                  Clean topology, exact bevels, mechanical logic, and production UVs.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#0ea5e9] text-xs font-mono-tech uppercase tracking-wider font-bold">
                  02 // REAL-TIME
                </div>
                <div className="text-sm font-semibold text-white">Game-Ready Assets</div>
                <p className="text-xs text-gray-400">
                  Optimized polycounts, drawcall consciousness, and Unreal Engine setup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-emerald-400 text-xs font-mono-tech uppercase tracking-wider font-bold">
                  03 // CINEMATIC
                </div>
                <div className="text-sm font-semibold text-white">Visual Impact</div>
                <p className="text-xs text-gray-400">
                  Story-driven wear, PBR materiality, and dramatic studio/cinematic lighting.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
