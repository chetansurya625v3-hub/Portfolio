import React from 'react';

/**
 * Hero Component
 * Opening Hero section for Chetan Surya's portfolio.
 * Features Cyber-Emerald Dark Mode theme, status badge, headline, bio,
 * action buttons, tech telemetry, and ambient glow effects.
 */
export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Simulate resume download / open CV modal
    window.open('#resume', '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient background glow orbs (strictly Cyber-Emerald & Lime, no blue) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[220px] sm:w-[380px] h-[220px] sm:h-[380px] bg-lime-400/8 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* 1. Status Badge: Animated blinking radar pill */}
        <div className="mb-6 sm:mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:border-emerald-400/60 transition-all duration-300 group cursor-default">
            {/* Blinking radar dot */}
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            </span>

            {/* Pill Content */}
            <span className="font-mono text-xs sm:text-sm font-medium text-emerald-300 tracking-wide flex items-center gap-1.5">
              <span>Student Developer</span>
              <span className="text-emerald-500/70 font-semibold">//</span>
              <span className="text-lime-300 font-semibold group-hover:text-lime-200 transition-colors">
                Open for Internships
              </span>
            </span>
          </div>
        </div>

        {/* 2. Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.15] sm:leading-[1.12] mb-6 sm:mb-8">
          <span className="block text-zinc-200">Hey, I am </span>
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
            Chetan Surya
          </span>
          <span className="block text-zinc-100 mt-1 sm:mt-2">
            — Building the Future of Tech.
          </span>
        </h1>

        {/* 3. Student Bio */}
        <p className="text-zinc-300/90 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl leading-relaxed sm:leading-loose mb-10 sm:mb-12 font-normal">
          BE 2nd Year{' '}
          <span className="text-emerald-300 font-medium px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 whitespace-nowrap">
            Computer Science with Cyber Security
          </span>{' '}
          Student at{' '}
          <span className="text-zinc-100 font-medium underline decoration-emerald-500/50 decoration-2 underline-offset-4">
            K.S. Institute of Technology
          </span>
          , passionate about{' '}
          <span className="text-lime-300 font-medium">web development</span>,{' '}
          <span className="text-emerald-300 font-medium">AI</span>, and building real-world projects.
        </p>

        {/* 4. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none mb-12 sm:mb-16">
          {/* Primary Button: Glowing emerald button that lifts slightly on hover */}
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="relative group px-8 py-4 rounded-xl font-semibold text-carbon-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 transform flex items-center justify-center gap-3 text-sm sm:text-base cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-carbon-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View My Projects
            </span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1 font-bold">
              →
            </span>
          </a>

          {/* Secondary Button: Cyber outline button */}
          <a
            href="#resume"
            onClick={handleDownloadCV}
            className="px-8 py-4 rounded-xl font-medium text-zinc-200 hover:text-white bg-[#0d1117]/80 hover:bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 transform flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer group"
          >
            <svg
              className="w-5 h-5 text-emerald-400 group-hover:text-lime-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* 5. Cyber Telemetry Status Ribbon */}
        <div className="w-full max-w-3xl pt-6 border-t border-emerald-500/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3 rounded-xl bg-carbon-800/40 border border-emerald-500/15 backdrop-blur-sm">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-400/70">
              Department
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-200">
              CS & Cyber Security
            </span>
          </div>

          <div className="p-3 rounded-xl bg-carbon-800/40 border border-emerald-500/15 backdrop-blur-sm">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-400/70">
              College
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-200">
              KSIT Bengaluru
            </span>
          </div>

          <div className="p-3 rounded-xl bg-carbon-800/40 border border-emerald-500/15 backdrop-blur-sm">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-400/70">
              Core Stack
            </span>
            <span className="text-xs sm:text-sm font-semibold text-lime-300">
              React // Node // AI
            </span>
          </div>

          <div className="p-3 rounded-xl bg-carbon-800/40 border border-emerald-500/15 backdrop-blur-sm">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-400/70">
              Status
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ready for Hire
            </span>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity pointer-events-auto">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-emerald-400 transition-colors focus:outline-none"
          aria-label="Scroll to content"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400/80">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-emerald-500/40 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

