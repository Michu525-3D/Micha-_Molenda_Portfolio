import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Box, Layers, Cpu, Gamepad2, Wrench, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-5 h-5 text-[#ff5500]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#0ea5e9]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-amber-400" />;
      default:
        return <Wrench className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="relative py-28 border-t border-white/5 bg-[#0a0c12]">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#ff5500]">
            <span className="w-6 h-[1px] bg-[#ff5500]" />
            TECHNICAL PROFICIENCY & WORKFLOWS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            SKILLS & CAPABILITIES
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl">
            A comprehensive overview of competencies across 3D production, automotive/hard surface, real-time game art, and motion design.
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0e1017] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Category Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                    MODULE // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tag List */}
              <div className="space-y-2 pt-2 border-t border-white/5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between text-xs font-mono-tech py-1.5 px-2 rounded bg-white/[0.02] border border-white/5 text-gray-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    <span>{skill}</span>
                    <Check className="w-3.5 h-3.5 text-[#ff5500]/70" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
