import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sun, Clock, MapPin, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { getUKOpenStatus } from '../utils/hoursHelper';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openStatus = getUKOpenStatus();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Atmosphere & Features', href: '#features' },
    { label: 'Catering', href: '#catering' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Hours & Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121413]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-[#28302C]'
            : 'bg-gradient-to-b from-[#121413]/90 via-[#121413]/60 to-transparent'
        }`}
      >
        {/* Top Mini Bar with Opening Status & Demo Warning */}
        <div className="bg-[#0C2E19] text-[#E2E8F0] text-xs py-1.5 px-4 border-b border-emerald-900/40">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-emerald-300">{openStatus.statusText}</span>
              <span className="hidden sm:inline text-emerald-200/70">· {openStatus.nextEventText}</span>
              <span className="hidden md:inline text-amber-300/90 font-medium">· 100% Halal Authentic Jamaican</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-amber-400 font-medium hidden lg:inline">★ 4.9 from ~168 Google Reviews</span>
              <span className="text-zinc-400 hidden sm:inline">|</span>
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                title="Call JJ's Caribbean Kitchen"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#top');
              }}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Sun className="w-7 h-7 text-[#0C2E19]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  JJ’S <span className="text-amber-400 font-bold">CARIBBEAN</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-400 -mt-1">
                  Kitchen · Manchester
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Visible >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors py-1 relative group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-zinc-200 hover:text-white bg-[#1A1E1C] border border-[#2D3631] hover:border-amber-500/60 transition-all hover:bg-[#232926]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleLinkClick('#reserve')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-[#0C2E19] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0C2E19]" />
                <span>Book / Order</span>
              </button>
            </div>

            {/* Mobile / Tablet Controls (< 1024px) */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="p-2.5 rounded-lg bg-[#1B221E] border border-[#2F3A34] text-amber-400 hover:text-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Call JJ's Caribbean Kitchen"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#1B221E] border border-[#2F3A34] text-zinc-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay (< 1024px) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-over panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#141816] border-l border-[#28322C] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto pt-24">
            <div>
              <div className="mb-6 pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-[#0C2E19]" />
                  </div>
                  <div>
                    <div className="font-extrabold text-white">JJ’s Caribbean Kitchen</div>
                    <div className="text-xs text-emerald-400 font-medium">Urmston, Manchester M41 9BP</div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C2E19] text-emerald-300 text-xs font-semibold mt-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{openStatus.statusText} · {openStatus.nextEventText}</span>
                </div>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left py-3 px-3 rounded-lg text-base font-semibold text-zinc-200 hover:text-amber-400 hover:bg-[#1D2420] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0C2E19] font-bold text-center shadow-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <button
                onClick={() => handleLinkClick('#reserve')}
                className="w-full py-3 px-4 rounded-xl bg-[#1F2722] hover:bg-[#28322C] text-white font-semibold text-center border border-[#34423A] transition-colors cursor-pointer"
              >
                Book Table / Takeout Form
              </button>

              <div className="text-center text-[11px] text-zinc-400 flex items-center justify-center gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>12 Victoria Parade, Urmston M41 9BP</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
