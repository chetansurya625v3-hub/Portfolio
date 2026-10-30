import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import CampusJourney from './components/CampusJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import CursorSpark from './components/CursorSpark';

/**
 * Main Application Component
 * Theme: Cyber-Emerald / Dark Mode (#0d1117 matte carbon with neon emerald & lime accents)
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* 1. Interactive HTML5 Matrix-Dot Grid Background Canvas */}
      <MatrixGridCanvas />

      {/* 2. Easter Egg: Smooth Trailing Cursor Light Spark Follower */}
      <CursorSpark />

      {/* 3. Floating Frosted-Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Opening Screen */}
        <Hero />

        {/* Featured Projects Showcase (3D Perspective Tilt Cards) */}
        <FeaturedProjects />

        {/* Interactive Tech Stack & Skills (3 Categories, Icons, Comfort Tooltips) */}
        <TechStack />

        {/* Education & Campus Journey (Illuminated Timeline & Accomplishment Badges) */}
        <CampusJourney />

        {/* About Me Section */}
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-carbon-900/80 border border-emerald-500/20 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-emerald-400 text-sm font-semibold">// 05</span>
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

        {/* Contact Section: Interactive Form, Spinner & Magnetic Links */}
        <Contact />
      </main>

      {/* Cyber Footer */}
      <Footer />
    </div>
  );
}
