import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 border-t border-white/5 bg-[#08080a]">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#ff5500]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#ff5500]">
            <span className="w-6 h-[1px] bg-[#ff5500]" />
            CAREER & PRODUCTION HISTORY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            EXPERIENCE
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            Commercial agency production, game development internships, and high-fidelity 3D visualization.
          </p>
        </div>

        {/* Timeline / Cards */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#08080a] border-2 border-[#ff5500] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5500] m-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-xl bg-[#0c0e14] border border-white/10 group-hover:border-[#ff5500]/40 transition-all duration-300 shadow-xl space-y-5">
                
                {/* Header row: Company, Role, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      {exp.status && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono-tech uppercase tracking-wider">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-[#ff5500] font-mono-tech mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400 px-3 py-1.5 rounded bg-white/[0.03] border border-white/5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Subproject note if present */}
                {exp.subproject && (
                  <div className="text-xs font-mono-tech text-gray-300 bg-white/[0.02] p-2.5 rounded border border-white/5">
                    <span className="text-[#0ea5e9] uppercase font-bold">Project: </span>
                    <span className="text-white font-medium">{exp.subproject}</span>
                  </div>
                )}

                {/* Bullets List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                  {exp.points.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-center gap-2 text-xs md:text-sm text-gray-300 p-2.5 rounded bg-white/[0.02] border border-white/5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
