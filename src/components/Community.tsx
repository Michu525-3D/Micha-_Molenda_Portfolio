import React from 'react';
import { COMMUNITY_PROJECTS } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section id="community" className="relative py-28 border-t border-white/5 bg-[#08080a]">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#0ea5e9]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#00e5ff]">
            <span className="w-6 h-[1px] bg-[#00e5ff]" />
            INDUSTRY ENGAGEMENT & PERSONAL VENTURES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            COMMUNITY & PERSONAL PROJECTS
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Active industry involvement through AAA playtesting programs, conferences, community mods, and dedicated after-hours game development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_PROJECTS.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#0d0f16] border border-white/10 hover:border-[#00e5ff]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-[10px] font-mono-tech uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono-tech text-gray-500">
                    // ACT_0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00e5ff] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono-tech text-gray-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Points */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-300">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00e5ff] mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative bottom corner */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-tech text-gray-500">
                <span>COMMUNITY INVOLVEMENT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#00e5ff] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
