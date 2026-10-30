import React from 'react';

/**
 * CampusJourney Component
 * Education & Campus Journey section placed directly below Tech Stack & Skills.
 * Features an interactive vertical illuminated timeline and a 2x2 grid of achievement callouts.
 */
export default function CampusJourney() {
  const milestones = [
    {
      year: '2026',
      badge: 'CURRENT MILESTONE',
      title: '2nd Year B.Tech & Built My First Website',
      institution: 'K.S. Institute of Technology, Bangalore',
      note: 'Pursuing B.E. in Computer Science with Cyber Security; designed and deployed my first responsive web applications and interactive developer suites.',
      tags: ['KSIT Bengaluru', 'CyberSec B.E.', 'Frontend Engineering'],
      isCurrent: true,
    },
    {
      year: '2025',
      badge: 'PAST MILESTONE',
      title: 'Core Technical Club Member & Club Service Lead',
      institution: 'Student Technical Society & Campus Clubs',
      note: 'Spearheaded collegiate technical service activities and hands-on coding sessions, mentoring fellow students in foundational systems and collaborative tools.',
      tags: ['Club Service Lead', 'Student Leadership', 'Hackathon Prep'],
      isCurrent: false,
    },
  ];

  const achievements = [
    {
      id: 'bmc-pitch',
      icon: (
        <svg className="w-6 h-6 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      metric: '1st Place',
      title: 'Business Model Canvas Pitch Winner',
      description: 'Secured top honors for pitching a scalable collegiate tech enterprise model with robust product architecture.',
    },
    {
      id: 'hackathons',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      metric: '5+ Sprints',
      title: 'Participated in 5+ Hackathons',
      description: 'Competed in collegiate and inter-college hackathons, designing rapid prototypes under rigorous 24-48h timeframes.',
    },
    {
      id: 'cybersec-lab',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      metric: 'Security Focus',
      title: 'Cyber Threat Analysis Drills',
      description: 'Hands-on participation in defensive network security simulations, vulnerability testing, and threat model audits.',
    },
    {
      id: 'community-lead',
      icon: (
        <svg className="w-6 h-6 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      metric: '50+ Peers',
      title: 'Technical Service Leadership',
      description: 'Coordinated student study circles and technical workshops on Git version control, Linux commands, and web fundamentals.',
    },
  ];

  return (
    <section id="campus" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              CAMPUS CHRONICLES
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Campus Journey</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            My collegiate milestones at K.S. Institute of Technology, leadership roles, and hackathon milestones.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-carbon-900/80 border border-emerald-500/20 px-4 py-2 rounded-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          <span>B.E. CSE // Class of 2028</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Vertical Illuminated Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <span className="text-emerald-400 font-mono">//</span>
              <span>Milestone Timeline</span>
            </h3>
            <span className="text-xs font-mono text-emerald-400/80 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              KSIT Bengaluru
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8">
            {/* Illuminated Emerald Vertical Spine */}
            <div
              className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/70 to-lime-400 shadow-[0_0_12px_rgba(16,185,129,0.45)]"
              aria-hidden="true"
            />

            {milestones.map((m) => (
              <div key={m.year} className="relative group">
                {/* Glowing Nodal Dot */}
                <div
                  className={`absolute -left-[23px] sm:-left-[27px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full ${
                    m.isCurrent
                      ? 'bg-emerald-400 shadow-[0_0_15px_#10b981]'
                      : 'bg-emerald-600/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                  } border-4 border-[#0d1117] transition-transform duration-300 group-hover:scale-125`}
                >
                  {m.isCurrent && (
                    <span className="absolute w-7 h-7 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
                  )}
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl p-6 sm:p-7 bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300 hover:-translate-y-1">
                  {/* Milestone Year & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {m.year}
                      </span>
                      <span className="h-4 w-[1px] bg-emerald-500/30" />
                      <span className="text-xs font-mono text-zinc-400">
                        {m.institution}
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        m.isCurrent
                          ? 'bg-emerald-950/70 border border-emerald-400/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                          : 'bg-carbon-800 border border-zinc-700 text-zinc-400'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2 tracking-tight">
                    {m.title}
                  </h4>

                  {/* 1-Line Note */}
                  <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    {m.note}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-emerald-500/10">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-carbon-800/80 border border-emerald-500/15 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Achievement Badges (5 cols) */}
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <span className="text-lime-400 font-mono">//</span>
              <span>Accomplishment Badges</span>
            </h3>
            <span className="text-xs font-mono text-lime-300/80 bg-emerald-950/40 border border-lime-500/20 px-2.5 py-1 rounded-lg">
              Honors & Callouts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="group p-5 rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_30px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/30 group-hover:border-emerald-400 transition-colors shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-lime-300 bg-emerald-950/40 border border-lime-500/20 px-2 py-0.5 rounded">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Verified</span>
                  <span className="text-emerald-400 group-hover:text-lime-300 transition-colors">★ KSIT Honor</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

