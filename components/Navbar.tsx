"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-line/40 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading font-bold text-lg text-slate-100 tracking-tight hover:text-accent transition-colors duration-200"
        >
          DKS<span className="text-accent">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-accent rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="https://www.upwork.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 btn-glow transition-all duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-accent transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
          <span
            className={`block w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span className="block w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 backdrop-blur-md border-b border-line/40 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-slate-400 hover:text-accent border-b border-line/20 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-2 text-accent text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Hire Me on Upwork
          </a>
        </div>
      )}
    </nav>
  );
}
