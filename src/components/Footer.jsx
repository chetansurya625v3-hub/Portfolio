import React from 'react';

/**
 * Footer Component
 * Production-ready cyber footer with centered attribution line:
 * 'Designed & Engineered by Chetan Surya • Class of 2029'
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-emerald-500/15 bg-[#0d1117]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Brand Monogram Icon */}
        <div className="flex items-center gap-2 mb-4 group cursor-pointer" onClick={scrollToTop}>
          <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-500/30 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
            CS
          </div>
          <span className="font-mono text-xs font-bold tracking-tight text-zinc-300">
            ChetanSurya<span className="text-emerald-400">.dev</span>
          </span>
        </div>

        {/* Required Centered Attribution Line */}
        <p className="font-mono text-xs sm:text-sm text-zinc-300 mb-3 tracking-wide">
          Designed & Engineered by <span className="text-emerald-400 font-semibold hover:text-lime-300 transition-colors">Chetan Surya</span> • Class of 2029
        </p>

        {/* Sub-status & Technical Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            React 18 // Tailwind CSS // Cyber-Emerald
          </span>
          <span>•</span>
          <span>K.S. Institute of Technology, Bengaluru</span>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="text-emerald-400 hover:text-lime-300 transition-colors focus:outline-none flex items-center gap-1"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

