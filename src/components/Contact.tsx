import React from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  const email = 'michal.molenda21@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/5 bg-[#0a0c12]">
      {/* Heavy glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-[#00e5ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase text-[#00e5ff]">
            <span className="w-6 h-[1px] bg-[#00e5ff]" />
            INITIATE CONTACT
            <span className="w-6 h-[1px] bg-[#00e5ff]" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            Let's create something great.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto font-light">
            Open to opportunities, collaborations and interesting projects.
          </p>
        </div>

        {/* Contact Action Card */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-[#11141e] to-[#0c0e15] border border-white/10 shadow-2xl space-y-8 max-w-3xl mx-auto">
          
          {/* Email Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono-tech uppercase text-gray-400">Direct Email</div>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#00e5ff] transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyEmailToClipboard}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-gray-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-4 py-2 rounded-lg bg-[#00e5ff] hover:bg-[#00b4d8] text-white text-xs font-mono-tech uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* External Social Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* ArtStation */}
            <a
              href="https://www.artstation.com/energydronepl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00e5ff] transition-all flex items-center justify-between group"
            >
              <div className="text-left">
                <div className="text-xs font-mono-tech text-gray-400">ArtStation Portfolio</div>
                <div className="text-base font-bold text-white group-hover:text-[#00e5ff] transition-colors">
                  energydronepl
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#00e5ff] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://pl.linkedin.com/in/micha%C5%82-molenda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#0ea5e9] transition-all flex items-center justify-between group"
            >
              <div className="text-left">
                <div className="text-xs font-mono-tech text-gray-400">Professional Profile</div>
                <div className="text-base font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                  LinkedIn Profile
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#0ea5e9] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

          </div>

        </div>

        {/* Footer info */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} MICHAŁ MOLENDA — ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>HARD SURFACE & VEHICLE ARTIST</span>
            <span>•</span>
            <span>UNREAL ENGINE PIPELINE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
