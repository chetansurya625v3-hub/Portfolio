import React, { useState } from 'react';

/**
 * TechStack Component
 * Interactive Categorized Skills Section matching Cyber-Emerald dark mode.
 * Features 3 tidy categories, official tech logos, hover lift/glow, and comfort-level tooltips.
 */
export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');

  // SVG Icons for each tech
  const icons = {
    c: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a5 5 0 100 8" />
      </svg>
    ),
    cpp: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a4.5 4.5 0 100 8m5-4h4m-2-2v4m-8-2h4m-2-2v4" />
      </svg>
    ),
    python: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.912 2C6.726 2 7.07 4.25 7.07 4.25v2.24h4.945v.718H5.066S2 6.848 2 12.012c0 5.163 2.673 5.006 2.673 5.006h1.597v-2.27s-.087-2.674 2.64-2.674h4.887s2.518.04 2.518-2.484V4.484S16.79 2 11.912 2zm-1.412 1.54a.78.78 0 11.002 1.56.78.78 0 01-.002-1.56zm1.5 18.46c5.186 0 4.842-2.25 4.842-2.25v-2.24h-4.945v-.718h6.949S22 17.152 22 11.988c0-5.163-2.673-5.006-2.673-5.006h-1.597v2.27s.087 2.674-2.64 2.674h-4.887s-2.518-.04-2.518 2.484v4.611s-.476 2.479 4.402 2.479zm1.412-1.54a.78.78 0 11-.002-1.56.78.78 0 01.002 1.56z" />
      </svg>
    ),
    java: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17s1.5 1 4 1 4-1 4-1M9 13s1 1 3 1 3-1 3-1M10 9s.8.7 2 .7 2-.7 2-.7M5 20s2.5 2 7 2 7-2 7-2" />
      </svg>
    ),
    linux: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
      </svg>
    ),
    react: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.8} />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeWidth={1.8} />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" strokeWidth={1.8} />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    tailwind: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
    nodejs: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2zm0 2.3L5.5 8.1v7.8l6.5 3.8 6.5-3.8V8.1L12 4.3z" />
      </svg>
    ),
    css: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 3l1.8 17.5L12 22l6.2-1.5L20 3H4zm13 5H8.5l.3 3.5h7.7l-.6 6-3.9 1-3.9-1-.2-2.5" />
      </svg>
    ),
    git: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="6" cy="6" r="3" strokeWidth={2} />
        <circle cx="6" cy="18" r="3" strokeWidth={2} />
        <circle cx="18" cy="9" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9v6m0-3a6 6 0 016-6h3" />
      </svg>
    ),
    dsa: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="5" r="3" strokeWidth={2} />
        <circle cx="6" cy="18" r="3" strokeWidth={2} />
        <circle cx="18" cy="18" r="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 7.5L7.5 15.5m6.5-8l2.5 8" />
      </svg>
    ),
    os: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h2m-2 4h4m-4 4h8" />
      </svg>
    ),
    dbms: (
      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <ellipse cx="12" cy="5" rx="8" ry="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5m-16 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  };

  // Skill categories data with comfort levels
  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      badge: '// CORE CODE',
      description: 'Foundational syntax, systems programming, and scripting environments.',
      skills: [
        { name: 'C', icon: icons.c, level: 'Familiar' },
        { name: 'C++', icon: icons.cpp, level: 'Familiar' },
        { name: 'Python', icon: icons.python, level: 'Familiar' },
        { name: 'Java', icon: icons.java, level: 'Learning' },
        { name: 'Linux', icon: icons.linux, level: 'Familiar' },
      ],
    },
    {
      id: 'frameworks-tools',
      title: 'Frameworks & Tools',
      badge: '// ECOSYSTEM',
      description: 'Modern reactive frontend engines, backend runtimes, and VCS pipelines.',
      skills: [
        { name: 'React', icon: icons.react, level: 'Familiar' },
        { name: 'Tailwind CSS', icon: icons.tailwind, level: 'Familiar' },
        { name: 'Node.js', icon: icons.nodejs, level: 'Familiar' },
        { name: 'CSS3', icon: icons.css, level: 'Familiar' },
        { name: 'Git & GitHub', icon: icons.git, level: 'Familiar' },
      ],
    },
    {
      id: 'core-cs',
      title: 'Core CS Concepts',
      badge: '// THEORY & SYSTEMS',
      description: 'Essential computational theory, system mechanics, and data management.',
      skills: [
        { name: 'Data Structures', icon: icons.dsa, level: 'Familiar' },
        { name: 'Operating Systems', icon: icons.os, level: 'Learning' },
        { name: 'DBMS', icon: icons.dbms, level: 'Familiar' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
              TECHNICAL ARSENAL
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Interactive overview of my programming languages, frameworks, and academic computing foundations.
          </p>
        </div>

        {/* Status indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-carbon-900/80 border border-emerald-500/20 px-4 py-2 rounded-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Hover badges to check comfort level</span>
        </div>
      </div>

      {/* 3 Tidy Category Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl p-6 sm:p-7 bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors tracking-tight">
                  {category.title}
                </h3>
                <span className="font-mono text-[11px] text-emerald-400/80 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                  {category.badge}
                </span>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                {category.description}
              </p>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const isLearning = skill.level === 'Learning';
                  return (
                    <div
                      key={skill.name}
                      className="group/badge relative"
                    >
                      {/* Skill Pill Badge with Icon */}
                      <div
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-carbon-800/80 hover:bg-emerald-950/50 border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-200 cursor-pointer transform hover:scale-105 active:scale-95"
                      >
                        <span className="text-emerald-400 group-hover/badge:text-lime-300 transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/badge:text-white transition-colors">
                          {skill.name}
                        </span>
                        {/* Tiny indicator dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isLearning ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                          }`}
                        />
                      </div>

                      {/* Tooltip on Hover */}
                      <div
                        className="absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/badge:opacity-100 group-hover/badge:-top-10 transition-all duration-200 z-30 flex flex-col items-center"
                      >
                        <div className="px-2.5 py-1 rounded-md bg-emerald-950/95 border border-emerald-400/50 text-emerald-200 text-[10px] font-mono font-medium shadow-[0_4px_12px_rgba(0,0,0,0.8),0_0_10px_rgba(16,185,129,0.3)] whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isLearning ? 'bg-amber-400' : 'bg-emerald-400'
                            }`}
                          />
                          <span>Level: {skill.level}</span>
                        </div>
                        {/* Downward Caret */}
                        <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-emerald-950/95 -mt-[1px]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Cyber Metric */}
            <div className="mt-8 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>{category.skills.length} modules</span>
              <span className="text-emerald-400/80 group-hover:text-lime-300 transition-colors">verified_vtu_lab</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

