import React, { useState, useRef } from 'react';

/**
 * MagneticLink Component
 * Sleek icon button with physical magnetic pull effect toward cursor position on hover.
 */
function MagneticLink({ href, label, icon, username, external = true }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Magnetic attraction factor
    setOffset({ x: x * 0.28, y: y * 0.28 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : ''}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="group relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-carbon-800/60 hover:bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-colors duration-200"
      aria-label={label}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-carbon-900 border border-emerald-500/30 text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400 transition-colors shadow-inner">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-300 transition-colors">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate max-w-[190px] sm:max-w-[220px]">
          {username}
        </span>
      </div>
      <span className="ml-auto text-zinc-500 group-hover:text-lime-300 group-hover:translate-x-1 transition-all text-sm">
        ↗
      </span>
    </a>
  );
}

/**
 * Contact Component
 * Student-friendly 'Get In Touch' card with interactive feedback form
 * and magnetic direct social links.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: 'Chetan Surya',
    email: 'chetansurya625v3@gmail.com',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === 'sending' || status === 'sent') return;

    setStatus('sending');

    // Simulate reactive submission & network request
    setTimeout(() => {
      setStatus('sent');
      // Reset back to idle after 4.5 seconds
      setTimeout(() => {
        setStatus('idle');
        setFormData((prev) => ({ ...prev, message: '' }));
      }, 4500);
    }, 1100);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative ambient backdrop glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-emerald-500/8 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Pill Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>OPEN FOR SUMMER INTERNSHIPS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s Collaborate & <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-zinc-300/90 text-sm sm:text-base max-w-xl text-center leading-relaxed font-normal">
            Open for summer internships, open-source projects, or tech chats. Drop me a message!
          </p>
        </div>

        {/* Contact Layout Grid: Interactive Form & Direct Social Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl p-7 sm:p-9 bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.12)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-emerald-500/15">
                <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime-400" />
                  direct_transmission.sh
                </span>
                <span className="text-xs font-mono text-zinc-500">256-bit encrypted</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-emerald-300 mb-1.5">
                    // 01. YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Chetan Surya"
                    className="w-full px-4 py-3 rounded-xl bg-carbon-800/80 border border-emerald-500/20 focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] text-zinc-100 text-sm placeholder-zinc-500 transition-all outline-none"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-emerald-300 mb-1.5">
                    // 02. YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="chetansurya625v3@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-carbon-800/80 border border-emerald-500/20 focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] text-zinc-100 text-sm placeholder-zinc-500 transition-all outline-none"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-emerald-300 mb-1.5">
                    // 03. YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey Chetan, let's connect regarding a summer cybersecurity internship or a collaborative project..."
                    className="w-full px-4 py-3 rounded-xl bg-carbon-800/80 border border-emerald-500/20 focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] text-zinc-100 text-sm placeholder-zinc-500 transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit Button with Animated Spinner & Feedback */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer transform ${
                    status === 'sent'
                      ? 'bg-lime-400 text-carbon-950 shadow-[0_0_25px_rgba(163,230,53,0.6)]'
                      : status === 'sending'
                      ? 'bg-emerald-600/70 text-zinc-200 cursor-wait'
                      : 'bg-emerald-400 hover:bg-emerald-300 text-carbon-950 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      {/* Emerald Loading Spinner */}
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-emerald-950"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Transmitting Payload...</span>
                    </>
                  )}

                  {status === 'sent' && (
                    <>
                      <span>Message Sent! 🚀</span>
                    </>
                  )}

                  {status === 'idle' && (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4 text-carbon-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-4 pt-3 text-center">
              <span className="text-[11px] font-mono text-zinc-500">
                Guaranteed response within 24 hours // KSIT Bangalore
              </span>
            </div>
          </div>

          {/* Right Column: Direct Links with Magnetic Hover (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="text-emerald-400 font-mono">//</span>
                  <span>Direct Communication</span>
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Prefer reaching out directly? Connect via GitHub, LinkedIn, or Email with one click.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* 1. GitHub Direct Link */}
                <MagneticLink
                  href="https://github.com/chetansurya625v3-hub"
                  label="GITHUB PROFILE"
                  username="chetansurya625v3-hub"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  }
                />

                {/* 2. LinkedIn Direct Link */}
                <MagneticLink
                  href="https://www.linkedin.com/in/chetan-surya-v"
                  label="LINKEDIN NETWORK"
                  username="chetan-surya-v"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  }
                />

                {/* 3. Direct Email Link */}
                <MagneticLink
                  href="mailto:chetansurya625v3@gmail.com"
                  label="OFFICIAL EMAIL"
                  username="chetansurya625v3@gmail.com"
                  external={false}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Availability Callout Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-950/40 via-carbon-900 to-carbon-950 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-xs font-mono font-semibold text-emerald-300">INTERNSHIP TIMELINE</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Available for Summer 2026/2027 technical internships, remote security testing sprints, or collaborative software engineering hackathons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

