import React, { useState } from 'react';
import { PORTFOLIO_DATA_EN, PORTFOLIO_DATA_PL } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';
import { ProjectModal } from './ProjectModal';
import { Eye, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const currentDataset = language === 'pl' ? PORTFOLIO_DATA_PL : PORTFOLIO_DATA_EN;
  const currentProjects = currentDataset.projects;

  const activeModalProject = currentProjects.find((p) => p.id === activeModalProjectId) || null;

  const filterOptions = [
    { label: t('portfolio.all'), value: 'ALL' },
    { label: t('portfolio.gameArt'), value: 'GAME' },
    { label: t('portfolio.vehicles'), value: 'VEHICLE' },
    { label: t('portfolio.props'), value: 'VISUALIZATION' },
  ];

  const filteredProjects = currentProjects.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'GAME') {
      return item.id === 'biogenesis' || item.id === 'undo-revolution' || item.id === 'rubens-games';
    }
    if (selectedFilter === 'VEHICLE') {
      return item.id === 'star-wars-rogue-squadron' || item.id === 'biogenesis';
    }
    if (selectedFilter === 'VISUALIZATION') {
      return item.id === 'gpd-agency' || item.id === 'furniture-visualization';
    }
    return true;
  });

  return (
    <section id="portfolio" className="relative py-28 border-t border-white/5 bg-[#08080a]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00e5ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#00e5ff]">
              <span className="w-6 h-[1px] bg-[#00e5ff]" />
              {t('portfolio.badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
              {t('portfolio.title')}
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {t('portfolio.desc')}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter.value
                    ? 'bg-[#00e5ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.35)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProjectId(project.id)}
              className="group relative bg-[#0e1017] border border-white/10 rounded-xl overflow-hidden hover:border-[#00e5ff]/60 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.15)] flex flex-col cursor-pointer glitch-hover"
            >
              {/* Media Thumbnail Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#06070a]">
                <ProjectImage
                  src={project.images.hero}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  aspectRatio="video"
                  className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono-tech uppercase tracking-wider text-gray-200">
                    {project.category.split('/')[0]}
                  </span>
                </div>

                {project.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 rounded bg-[#00e5ff]/80 text-white text-[10px] font-mono-tech uppercase tracking-wider shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                )}

                {/* Hover Quick Action Cue */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#00e5ff]" />
                    <span>Inspect Details</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00e5ff] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono-tech text-gray-400 line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed pt-1">
                    {project.summary}
                  </p>
                </div>

                {/* Roles & Footer */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-gray-400">
                  <div className="flex flex-wrap gap-1.5">
                    {project.roles.slice(0, 2).map((role, idx) => (
                      <span key={idx} className="text-[11px] text-gray-400">
                        {role}{idx < Math.min(project.roles.length, 2) - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>

                  <span className="text-[#00e5ff] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{t('portfolio.viewDetails')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

              {/* Technical corner line */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:border-[#00e5ff] transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Modal Window for active project details */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProjectId(null)}
        />

      </div>
    </section>
  );
};
