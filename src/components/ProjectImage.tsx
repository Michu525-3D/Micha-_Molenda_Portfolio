import React, { useState } from 'react';
import { Box } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  category?: string;
  title?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide' | 'auto';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  category,
  title,
  className = '',
  aspectRatio = 'video'
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Fallback UI when real image is not yet provided by the artist
  if (error || !src) {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#12141a] via-[#0d0f14] to-[#08080a] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none group/placeholder ${className}`}
      >
        {/* Subtle Tech Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Corner Marks (Viewport Blueprint Style) */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />

        {/* Diagonal Tech Hatching */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00e5ff] shadow-[0_0_20px_rgba(0,229,255,0.15)] group-hover/placeholder:border-[#00e5ff]/50 transition-colors">
            <Box className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono-tech text-gray-400">
              {category || '3D Render Asset Slot'}
            </div>
            <div className="text-sm font-semibold text-white tracking-wide">
              {title || alt}
            </div>
            <div className="text-[11px] font-mono-tech text-[#00e5ff]/80">
              [ Drop real render to: {src || 'assets'} ]
            </div>
          </div>
        </div>
      </div>
    );
  }

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-[16/10]'
      : aspectRatio === 'wide'
      ? 'aspect-[21/9]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : '';

  const resolvedSrc = src && src.startsWith('/')
    ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`
    : src;

  return (
    <div className={`relative overflow-hidden bg-[#0e1015] ${aspectClass} ${className}`}>
      {/* Loading Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02] animate-pulse" />
      )}
      
      <img
        src={resolvedSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
