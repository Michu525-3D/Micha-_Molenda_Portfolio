import React from 'react';

export const CornerGlitch: React.FC = () => {
  return (
    <aside
      aria-label="System status telemetry"
      className="fixed bottom-3 left-3 z-40 pointer-events-none select-none font-mono-tech"
    >
      <div className="relative p-2.5 rounded border border-[#00e5ff]/25 bg-[#08080a]/80 backdrop-blur-md overflow-hidden max-w-[200px] shadow-[0_0_20px_rgba(0,229,255,0.15)] group">
        {/* Animated scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e5ff]/10 to-transparent h-12 w-full animate-[glitchScan_3s_ease-in-out_infinite] pointer-events-none" />

        {/* Glitch block artifacts */}
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#00e5ff]/10 blur-sm animate-pulse pointer-events-none" />

        {/* Status header */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-ping" />
          <span className="text-[10px] text-[#00e5ff] uppercase tracking-widest font-bold">SYS_TELEMETRY // LIVE</span>
        </div>

        {/* Glitch HUD text */}
        <div className="relative text-[10px] leading-tight text-gray-400 font-mono space-y-0.5">
          <div className="flex justify-between text-[#00e5ff]/90">
            <span>CORE.FREQ</span>
            <span className="animate-[glitchText_2.5s_infinite]">2.48 THz</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>RENDER_MODE</span>
            <span className="text-[#00e5ff]/80">CYAN_HUD</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>SIGNAL</span>
            <span className="text-[#00e5ff]/70 animate-pulse">99.4% STABLE</span>
          </div>
        </div>

        {/* Corner HUD accent ticks */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00e5ff]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00e5ff]" />
      </div>
    </aside>
  );
};
