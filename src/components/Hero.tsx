import React from 'react';
import { Phone, Star, MapPin, Sparkles, Flame, ShieldCheck, ArrowRight, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { getUKOpenStatus } from '../utils/hoursHelper';

interface HeroProps {
  onExploreMenu: () => void;
  onReserve: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserve }) => {
  const openStatus = getUKOpenStatus();

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 bg-[#121413] pointer-events-none" />
      
      {/* Caribbean Warm Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-emerald-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Tropical Texture Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#223328_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Top Tagline Badge */}
            <div className="reveal-on-scroll inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A261F] border border-emerald-600/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-400 font-extrabold uppercase tracking-wide">Taste the sunshine!</span>
              <span className="text-zinc-500">·</span>
              <span>100% Halal Jamaican Soul</span>
            </div>

            {/* Main Headline */}
            <h1 className="reveal-on-scroll text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] mb-6">
              Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Jamaican</span> Flavor in Manchester.
            </h1>

            {/* Subtitle with address and key value proposition */}
            <p className="reveal-on-scroll text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              Welcome to <span className="text-white font-semibold">JJ’s Caribbean Kitchen</span> on Victoria Parade, Urmston. 
              Savor slow-braised oxtail, 48-hour spiced jerk chicken, tender curried mutton, and warm island reggae vibes. 
              Every recipe is 100% Halal, made fresh daily with authentic Kingston soul.
            </p>

            {/* Action Buttons: Phone CTA + Reserve / Menu */}
            <div className="reveal-on-scroll flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Phone CTA */}
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-extrabold text-[#0C2E19] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Phone className="w-5 h-5 text-[#0C2E19]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              {/* Reserve a table */}
              <button
                onClick={onReserve}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#19221D] hover:bg-[#222E27] border border-[#324439] hover:border-amber-400/60 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Book Table / Takeout</span>
              </button>

              {/* Menu link */}
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-zinc-300 hover:text-amber-400 transition-colors cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>View Menu & Prices</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="reveal-on-scroll grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-4 border-t border-[#26312B]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4.9 / 5.0</div>
                  <div className="text-xs text-zinc-400">~168 Google Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100% Halal</div>
                  <div className="text-xs text-zinc-400">Certified Meats</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-[#C85A32]/15 text-orange-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Urmston, M41</div>
                  <div className="text-xs text-zinc-400">Free Off-Street Parking</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Platter with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="reveal-on-scroll relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-emerald-600/20 to-orange-600/30 rounded-3xl blur-xl opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2C3831] shadow-2xl bg-[#151C18] aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=85"
                  alt="JJ's Signature Jerk Chicken grilled over pimento wood in Manchester"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient scrim for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121413] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#141A17]/90 backdrop-blur-md border border-[#2D3A32]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      Fresh From The Grill
                    </span>
                    <span className="text-xs font-bold text-emerald-400">Illustrative £13.50</span>
                  </div>
                  <div className="text-base font-extrabold text-white">Signature Jerk Chicken Feast</div>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    Marinated 48hrs in scotch bonnet & pimento · Served with rice & peas
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Halal Guarantee */}
              <div className="absolute -top-4 -right-3 sm:-right-6 bg-[#16211B] border border-emerald-600/40 shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-black text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Halal</div>
                  <div className="text-[10px] text-zinc-400">Strict Quality Standards</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - Reggae Atmosphere */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#1A1816] border border-amber-500/40 shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <span className="text-base">🇯🇲</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Reggae Soul Atmosphere</div>
                  <div className="text-[10px] text-amber-300/80">Victoria Parade, Urmston</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
