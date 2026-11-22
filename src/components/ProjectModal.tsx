import React, { useEffect, useState } from 'react';
import type { Project } from '../data/portfolioData';
import { X, Cpu, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { ProjectImage } from './ProjectImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allImages = [
    { url: project.images.hero, caption: `${project.title} - Main Key Render` },
    ...project.images.gallery
  ];

  const currentDisplayImage = allImages[activeImageIndex] || allImages[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 lg:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Dialog Window */}
      <div className="relative z-10 w-full max-w-6xl max-h-[92vh] bg-[#0c0e14] border border-white/15 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08080a]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono-tech tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs font-mono-tech hidden sm:inline">
              // PROJECT ID: {project.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Main Visual Display (Large Viewport) */}
          <div className="space-y-3">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#050608] shadow-2xl">
              <ProjectImage
                src={currentDisplayImage.url}
                alt={currentDisplayImage.caption}
                title={project.title}
                category={project.category}
                aspectRatio="wide"
                className="w-full max-h-[55vh]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between text-xs font-mono-tech text-gray-300">
                <span>{currentDisplayImage.caption}</span>
                <span className="text-[#00e5ff]">
                  [{activeImageIndex + 1} / {allImages.length}]
                </span>
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 pt-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-md overflow-hidden border transition-all duration-200 text-left aspect-video bg-[#12151d] cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#00e5ff] ring-2 ring-[#00e5ff]/40 scale-[1.02]'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <ProjectImage
                    src={img.url}
                    alt={img.caption}
                    title={project.title}
                    category=""
                    aspectRatio="video"
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-white/10">
            
            {/* Left Column: Title, Narrative & Scope */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base text-[#00e5ff] font-mono-tech mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Summary / Context */}
              <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
                {project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-mono-tech uppercase tracking-wider text-white font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00e5ff]" />
                  Key Scope & Responsibilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300 p-2.5 rounded bg-white/[0.02] border border-white/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Metadata & Tools */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Context / Client info */}
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-3">
                <div className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider">
                  Production Context
                </div>
                <div className="text-sm font-semibold text-white">
                  {project.clientOrContext}
                </div>
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.roles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-mono-tech text-gray-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Software Stack */}
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#00e5ff]" />
                    Tools & Technologies
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono-tech">Editable in data</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-white text-xs font-mono-tech tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructions for replacing renders */}
              <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 text-xs font-mono-tech text-gray-400 space-y-1.5">
                <div className="text-blue-400 font-semibold flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Asset Directory
                </div>
                <p>
                  Place your high-res renders into folder: <br />
                  <code className="text-white text-[11px] bg-black/40 px-1 py-0.5 rounded">
                    public/projects/{project.id}/
                  </code>
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#08080a] flex items-center justify-between text-xs font-mono-tech text-gray-400">
          <span>MICHAŁ MOLENDA // PORTFOLIO SHOWCASE</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            Close Viewer (Esc)
          </button>
        </div>

      </div>
    </div>
  );
};
