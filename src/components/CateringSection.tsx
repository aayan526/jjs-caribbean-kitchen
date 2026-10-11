import React from 'react';
import { PartyPopper, Check, Users, Sparkles, ArrowRight, CalendarDays } from 'lucide-react';
import { CATERING_PACKAGES } from '../data/restaurantData';

interface CateringSectionProps {
  onSelectCatering: (packageTitle: string) => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onSelectCatering }) => {
  return (
    <section id="catering" className="py-24 bg-[#121413] relative border-t border-[#232C27] overflow-hidden">
      {/* Warm ambient glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B251F] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Celebrations & Private Events</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Bring the Sunshine to Your <span className="text-amber-400">Special Event</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            From intimate birthday gatherings and office parties to weddings across Greater Manchester, JJ’s delivers unforgettable Caribbean catering.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.title}
              className={`reveal-on-scroll rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#1C2720] to-[#151E18] border-2 border-amber-400/80 shadow-2xl shadow-amber-400/10'
                  : 'bg-[#161B18] border border-[#27342B] hover:border-amber-400/40'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-[#0C2E19] text-xs font-black uppercase tracking-wider shadow">
                  Most Requested Buffet
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-extrabold text-white">{pkg.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{pkg.guestRange}</span>
                </div>

                <div className="mb-6 pb-6 border-b border-[#2A372E]">
                  <div className="text-2xl font-black text-amber-400">{pkg.estimatedPrice}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Illustrative pricing guide</div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectCatering(pkg.title)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-[#0C2E19] shadow-lg shadow-amber-400/20'
                      : 'bg-[#212C24] hover:bg-[#2A392F] text-white border border-[#324237]'
                  }`}
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Inquire for {pkg.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Dietary & Setup Notice */}
        <div className="reveal-on-scroll text-center text-xs text-zinc-400 max-w-2xl mx-auto">
          Need custom vegetarian/vegan Ital trays, mild options for children, or specific timings? 
          All meats are 100% Halal certified and prepared under strict hygiene standards.
        </div>

      </div>
    </section>
  );
};
