import React from 'react';
import { Truck, ShoppingBag, Calendar, SunMedium, Car, Wifi, Music2, PartyPopper, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FeaturesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    halal: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    delivery: <Truck className="w-6 h-6 text-amber-400" />,
    takeout: <ShoppingBag className="w-6 h-6 text-orange-400" />,
    reservations: <Calendar className="w-6 h-6 text-emerald-400" />,
    outdoor: <SunMedium className="w-6 h-6 text-amber-400" />,
    parking: <Car className="w-6 h-6 text-emerald-400" />,
    wifi: <Wifi className="w-6 h-6 text-amber-400" />,
    reggae: <Music2 className="w-6 h-6 text-orange-400" />,
    catering: <PartyPopper className="w-6 h-6 text-amber-400" />
  };

  return (
    <section id="features" className="py-24 bg-[#141916] relative border-t border-[#232C27] overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2620] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Island Hospitality & Convenience</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            More Than Just Food — <span className="text-amber-400">A Full Island Vibe</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            From easy parking and reggae playlists to delivery and sunny terrace dining, we’ve crafted every detail for your comfort.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESTAURANT_INFO.features.map((feature) => (
            <div
              key={feature.id}
              className="reveal-on-scroll p-6 rounded-2xl bg-[#19201C] border border-[#27352C] hover:border-amber-400/50 hover:bg-[#1D2621] transition-all duration-300 group shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#202B24] border border-[#2E3C32] group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors shrink-0">
                  {iconMap[feature.id] || <CheckCircle className="w-6 h-6 text-amber-400" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reggae Atmosphere Quote Banner */}
        <div className="reveal-on-scroll mt-14 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#17261F] via-[#1E2E25] to-[#17261F] border border-[#2D4235] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2 mb-2">
                <Music2 className="w-4 h-4 text-amber-400" />
                The Soundtrack of Kingston
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                “Good vibes, warm smiles, and authentic Jamaican rhythm every single service.”
              </h3>
              <p className="mt-3 text-sm text-zinc-300">
                Whether you drop in for lunch on Victoria Parade or bring the family on a Friday evening, enjoy our curated reggae, dub, and lovers rock selections that transport you straight to the Caribbean.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-5 rounded-2xl bg-[#131E18]/80 border border-emerald-500/30 text-center backdrop-blur-sm max-w-xs w-full">
                <span className="text-4xl">🇯🇲 🎵</span>
                <div className="font-extrabold text-white text-base mt-2">Authentic Island Spirit</div>
                <div className="text-xs text-amber-400 mt-1 font-semibold">12 Victoria Parade · Urmston</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
