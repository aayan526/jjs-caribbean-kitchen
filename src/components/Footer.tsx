import React from 'react';
import { Sun, Phone, MapPin, Clock, AlertTriangle, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0D100E] border-t border-[#232C27] text-zinc-300 relative overflow-hidden">
      
      {/* CRITICAL REQUIRED: VISIBLE DESIGN-CONCEPT DISCLAIMER BANNER */}
      <div className="bg-amber-950/70 border-b border-amber-600/40 text-amber-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold uppercase tracking-wider text-amber-300 text-xs block">
                Client-Pitch Demo Concept Notice
              </span>
              <p className="text-xs text-amber-200/90 max-w-4xl leading-normal mt-0.5">
                This website is a premium interactive demo concept designed for client presentation. 
                It is <strong>not the live transactional website of JJ’s Caribbean Kitchen</strong>. 
                All illustrative prices, menu estimates, and booking confirmation codes are fictional test data.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-400 text-[#0C2E19] text-xs font-bold hover:bg-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>For Real Inquiries: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-md">
                <Sun className="w-6 h-6 text-[#0C2E19]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                JJ’S <span className="text-amber-400">CARIBBEAN</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Authentic Jamaican cuisine in Urmston, Manchester. Jerk chicken, curried goat, slow-braised oxtail, 
              sweet plantains, and warm island hospitality. 100% Halal certified.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Halal Certified Meats · Rated 4.9★ on Google</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">Explore Concept</h4>
            <ul className="space-y-2 text-xs">
              {['About Heritage', 'Our Menu', 'Atmosphere & Features', 'Event Catering', 'Reviews', 'Hours & Location'].map((item) => {
                const map: Record<string, string> = {
                  'About Heritage': '#about',
                  'Our Menu': '#menu',
                  'Atmosphere & Features': '#features',
                  'Event Catering': '#catering',
                  'Reviews': '#reviews',
                  'Hours & Location': '#location'
                };
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(map[item])}
                      className="text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Business Details */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">Visit & Contact</h4>
            <div className="space-y-2.5 text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>12 Victoria Parade, Urmston, Manchester M41 9BP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={RESTAURANT_INFO.phoneTel} className="text-white hover:text-amber-400 font-bold transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div>Tue–Thu: 12:00 – 20:00</div>
                  <div>Fri–Sat: 12:00 – 22:00</div>
                  <div className="text-zinc-400">Sun & Mon: Closed</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & pitch note */}
        <div className="pt-8 border-t border-[#222B25] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} JJ’s Caribbean Kitchen. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <span>Crafted for client demonstration</span>
            <span className="text-amber-400">·</span>
            <span>Urmston, Manchester M41</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
