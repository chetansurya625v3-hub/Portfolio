import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import CampusJourney from './components/CampusJourney';
import MatrixGridCanvas from './components/MatrixGridCanvas';

/**
 * Main Application Component
 * Theme: Cyber-Emerald / Dark Mode (#0d1117 carbon background with neon emerald & lime accents)
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* 1. Interactive HTML5 Matrix-Dot Grid Background Canvas */}
      <MatrixGridCanvas />

      {/* 2. Floating Frosted-Glass Navigation Bar */}
      <Navbar />

      {/* 3. Opening Hero Intro Screen */}
      <main className="relative z-10">
        <Hero />

        {/* 4. Featured Projects Showcase */}
        <FeaturedProjects />

        {/* 5. Interactive Tech Stack & Skills */}
        <TechStack />

        {/* 6. Education & Campus Journey (Timeline & Achievement Badges) */}
        <CampusJourney />

        {/* 7. About Me Section */}
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-carbon-900/80 border border-emerald-500/20 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-emerald-400 text-sm font-semibold">// 04</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500/30 to-transparent ml-4" />
            </div>
            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg mb-6">
              I am currently pursuing my Bachelor of Engineering in Computer Science with Cyber Security at K.S. Institute of Technology, Bangalore.
              My focus lies in building defensive security mechanisms, proactive threat detection systems, and high-performance reactive web interfaces.
              I believe in leveraging technology to protect digital privacy while creating intuitive developer tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-carbon-800/50 border border-emerald-500/15">
                <span className="text-emerald-400 font-mono text-sm block mb-1">01. Defensive CyberSec</span>
                <p className="text-xs text-zinc-400">Phishing mitigation, social engineering detection, and vulnerability testing.</p>
              </div>
              <div className="p-4 rounded-xl bg-carbon-800/50 border border-emerald-500/15">
                <span className="text-lime-300 font-mono text-sm block mb-1">02. Modern Frontend</span>
                <p className="text-xs text-zinc-400">Building responsive, fluid, and interactive React & Tailwind web apps.</p>
              </div>
              <div className="p-4 rounded-xl bg-carbon-800/50 border border-emerald-500/15">
                <span className="text-emerald-300 font-mono text-sm block mb-1">03. Python Threat Intel</span>
                <p className="text-xs text-zinc-400">Developing automated scanners, heuristic analyzers, and awareness toolkits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Contact Section */}
        <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-gradient-to-b from-carbon-900 to-carbon-950 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <span className="font-mono text-emerald-400 text-xs font-semibold uppercase tracking-widest block mb-2">
              Ready to Collaborate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether you have an internship opportunity, a project proposal, or want to discuss cyber threat intelligence and web architecture, my inbox is always open.
            </p>
            <a
              href="mailto:chetansurya@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-carbon-950 bg-emerald-400 hover:bg-lime-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <span>Say Hello</span>
              <span>⚡</span>
            </a>
          </div>
        </section>
      </main>

      {/* Cyber Footer */}
      <footer className="relative z-10 py-8 border-t border-emerald-500/15 text-center text-xs font-mono text-zinc-500">
        <p>© {new Date().getFullYear()} Chetan Surya. Built with React & Tailwind CSS // Cyber-Emerald Edition</p>
      </footer>
    </div>
  );
}
