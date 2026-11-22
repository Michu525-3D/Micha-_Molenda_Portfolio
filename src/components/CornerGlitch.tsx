import React, { useEffect, useRef } from 'react';

export const CornerGlitch: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 460);
    const height = (canvas.height = 460);

    interface GlitchSlice {
      y: number;
      h: number;
      offsetX: number;
      color: string;
      alpha: number;
      life: number;
    }

    interface ArtifactBox {
      x: number;
      y: number;
      w: number;
      h: number;
      color: string;
      life: number;
    }

    const slices: GlitchSlice[] = [];
    const boxes: ArtifactBox[] = [];
    let frame = 0;

    const colors = [
      '#00e5ff', // cyan/light blue
      '#38bdf8', // sky blue
      '#ffffff', // bright white signal flash
      '#0284c7', // deeper cyan
      '#00f0ff', // electric teal
    ];

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Random trigger for glitch bursts (like Battlefield 2042 / BF4 HUD interference)
      if (Math.random() < 0.28) {
        const count = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < count; i++) {
          slices.push({
            y: height - (Math.random() * 320 + 10),
            h: Math.random() * 7 + 2,
            offsetX: (Math.random() - 0.45) * 60,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.5 + 0.15,
            life: Math.floor(Math.random() * 6) + 3,
          });
        }
      }

      // Random digital data block artifacts
      if (Math.random() < 0.2) {
        boxes.push({
          x: Math.random() * 260,
          y: height - (Math.random() * 260 + 10),
          w: Math.random() * 60 + 10,
          h: Math.random() * 5 + 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.floor(Math.random() * 5) + 2,
        });
      }

      // Draw horizontal chromatic slices
      for (let i = slices.length - 1; i >= 0; i--) {
        const s = slices[i];
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        // Shifted block
        ctx.fillRect(0 + s.offsetX, s.y, width * 0.8, s.h);

        // Thin chromatic offset line (chromatic aberration)
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = s.alpha * 0.7;
        ctx.fillRect(0 + s.offsetX * 1.3, s.y + 1, width * 0.45, 1);

        ctx.restore();

        s.life--;
        if (s.life <= 0) slices.splice(i, 1);
      }

      // Draw digital data blocks
      for (let i = boxes.length - 1; i >= 0; i--) {
        const b = boxes[i];
        ctx.save();
        ctx.fillStyle = b.color;
        ctx.globalAlpha = Math.random() * 0.5 + 0.25;
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.restore();

        b.life--;
        if (b.life <= 0) boxes.splice(i, 1);
      }

      // Subtle CRT raster scanline
      if (frame % 2 === 0) {
        ctx.save();
        ctx.fillStyle = 'rgba(0, 229, 255, 0.05)';
        const scanY = (frame * 3) % height;
        ctx.fillRect(0, scanY, 320, 2);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 pointer-events-none select-none z-10 overflow-hidden w-[450px] h-[450px]"
    >
      {/* Battlefield atmospheric cyan flare blur in background */}
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#00e5ff]/12 rounded-full blur-[110px] pointer-events-none" />

      {/* Canvas rendering military/sci-fi digital displacement slices */}
      <canvas
        ref={canvasRef}
        width={460}
        height={460}
        className="absolute bottom-0 left-0 w-full h-full mix-blend-screen opacity-90"
      />

      {/* Cyber/Tactical corner grid overlay */}
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[linear-gradient(to_right,rgba(0,229,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.08)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_bottom_left,black_30%,transparent_80%)] pointer-events-none" />

      {/* Battlefield-style corner technical markings */}
      <div className="absolute bottom-6 left-6 text-[9px] font-mono tracking-widest text-[#00e5ff]/40 space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-5 h-[1px] bg-[#00e5ff]/50" />
          <span className="font-semibold tracking-wider">BF // DISP.LAYER_01</span>
        </div>
        <div className="text-[8px] text-[#00e5ff]/30 tracking-tight pl-7">
          RGB.DISPLACE :: [ 0x00E5FF ]
        </div>
      </div>
    </div>
  );
};
