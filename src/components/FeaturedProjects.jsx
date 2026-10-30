import React, { useState, useRef } from 'react';

/**
 * 3D Tilt Project Card Component
 * Implements smooth cursor-based perspective tilt, dynamic shine reflection,
 * translateY(-6px) lift, and soft emerald edge glow.
 */
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  const [shineStyle, setShineStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle 3D tilt angles (max ~8 degrees for elegant perspective)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`
    );

    // Calculate dynamic radial shine position relative to mouse
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    setShineStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(16, 185, 129, 0.22) 0%, rgba(163, 230, 53, 0.08) 35%, transparent 70%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    setShineStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 transition-all duration-300 ${
        isHovered
          ? 'border-emerald-500/50 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.25)]'
          : 'shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Sleek Interactive Cursor Shine Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl z-0"
        style={shineStyle}
        aria-hidden="true"
      />

      {/* Decorative Cyber Accent Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 blur-2xl rounded-full pointer-events-none" />

      {/* Card Header & Content */}
      <div className="relative z-10 flex flex-col">
        {/* Top Meta: Primary Badge & Serial Code */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {project.badge}
          </span>
          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
            <span>{project.serial}</span>
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-3 tracking-tight">
          {project.title}
        </h3>

        {/* 2-Sentence Description */}
        <p className="text-zinc-300/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-lg bg-carbon-800/80 border border-emerald-500/15 text-zinc-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="relative z-10 pt-4 border-t border-emerald-500/15 flex items-center gap-3">
        {/* Live Demo Button */}
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (project.demoUrl === '#') {
              e.preventDefault();
              alert(`Launching Live Demo for ${project.title}`);
            }
          }}
          className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-carbon-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
        >
          <span>Live Demo</span>
          <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* GitHub Code Button */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (project.githubUrl === '#') {
              e.preventDefault();
              alert(`Opening GitHub Code Repository for ${project.title}`);
            }
          }}
          className="flex-1 py-2.5 px-4 rounded-xl font-medium text-xs sm:text-sm text-zinc-200 hover:text-white bg-carbon-800/80 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-200 flex items-center justify-center gap-1.5 group/gh cursor-pointer"
        >
          <svg className="w-4 h-4 text-emerald-400 group-hover/gh:text-lime-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
}

/**
 * FeaturedProjects Component
 * Placed directly below the Hero section.
 * Renders filter pill row and 3-column responsive grid with 3D tilt interactive physics.
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  // Project cards configured exactly as requested
  const projectsData = [
    {
      id: 'phishing-email-scanner',
      serial: '// 01',
      title: 'Phishing Email Scanner',
      badge: 'React // Security',
      categories: ['Web Apps'],
      description:
        'Intelligent defense system that scans incoming emails and SMS messages to detect phishing signatures and deceptive URLs. Proactively notifies users with risk severity alerts before they interact with malicious payloads.',
      tags: ['React', 'Tailwind CSS', 'NLP / Heuristics', 'REST API'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'cyber-threat-awareness',
      serial: '// 02',
      title: 'Cyber Threat Awareness for Students',
      badge: 'Python // Threat Intel',
      categories: ['AI / ML', 'Mini-Projects'],
      description:
        'Interactive educational platform built in Python designed to educate students about prevalent cyber threats and digital attack vectors around them. Features interactive attack simulations, safety audits, and real-time threat intelligence feeds.',
      tags: ['Python', 'FastAPI', 'CyberSec', 'Threat Intel'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'social-engineering-detector',
      serial: '// 03',
      title: 'Social Engineering Detector',
      badge: 'Node.js // Real-time',
      categories: ['Web Apps', 'AI / ML'],
      description:
        'Real-time behavioral monitoring application that analyzes communication patterns to identify psychological manipulation and pretexting tactics. Delivers immediate push notifications and defensive guidance while the user is actively targeted.',
      tags: ['Node.js', 'Express', 'Socket.io', 'Sentiment Analysis'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  // Smooth filter evaluation
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((item) => item.categories.includes(activeFilter));

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              FEATURED PROJECTS
            </span>
            <span className="h-[1px] w-8 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Cyber & Web <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Real-world security and engineering tools built with React, Python, and Node.js.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-carbon-900/90 border border-emerald-500/20 backdrop-blur-md shadow-lg self-start md:self-auto">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-carbon-950 font-semibold bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.45)]'
                    : 'text-zinc-400 hover:text-emerald-300 hover:bg-emerald-950/30'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Fallback indicator when filtering */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl bg-carbon-900/50 border border-emerald-500/15">
          <p className="font-mono text-zinc-400 text-sm">No projects currently under the "{activeFilter}" filter.</p>
          <button
            onClick={() => setActiveFilter('All')}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:border-emerald-400"
          >
            Show All Projects
          </button>
        </div>
      )}
    </section>
  );
}
