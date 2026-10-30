import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar fixed at the top of the viewport
 * with cyber-emerald accents, responsive mobile drawer, and smooth navigation links.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor scroll for glass elevation and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'skills', 'about', 'campus', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Campus Life', href: '#campus', id: 'campus' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none">
      <nav
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.12)] py-3 px-5 sm:px-7'
            : 'bg-[#0d1117]/70 backdrop-blur-lg border-emerald-500/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3.5 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Chetan Surya Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-950 to-carbon-900 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
              <span className="font-mono text-sm font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                CS
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border-2 border-[#0d1117]" />
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold text-zinc-100 tracking-tight flex items-center gap-1">
                <span>Chetan</span>
                <span className="text-emerald-400 group-hover:text-lime-400 transition-colors">Surya</span>
                <span className="text-xs text-emerald-500/80 font-mono font-normal hidden sm:inline">&lt;dev/&gt;</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                      : 'text-zinc-300 hover:text-emerald-400 hover:bg-emerald-950/20'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA / Terminal status */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_18px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
                Let's Connect
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/30 to-lime-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-zinc-300 hover:text-emerald-400 bg-carbon-800/60 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu with Frosted Glass styling */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/20 flex flex-col gap-1.5 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 hover:bg-emerald-950/40 rounded-xl transition-all duration-150 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-emerald-500/60 font-mono text-xs">→</span>
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-emerald-500/10">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full block text-center py-2.5 rounded-xl font-mono text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Open for Internships // Connect
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

