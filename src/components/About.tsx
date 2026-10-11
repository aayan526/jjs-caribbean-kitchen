import React from 'react';
import { Heart, Music, Flame, Award, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#141816] relative border-t border-[#232C27] overflow-hidden">
      {/* Decorative Caribbean Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A261F] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Our Story & Heritage</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Kingston Soul, Brought Home to <span className="text-amber-400">Manchester</span>.
          </h2>
          <p className="reveal-on-scroll mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            At JJ’s Caribbean Kitchen, cooking isn’t just food—it’s memory, culture, and deep family heritage. 
            We brought authentic Jamaican recipes to Victoria Parade in Urmston to share the authentic warmth 
            of island home cooking.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Photos Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="reveal-on-scroll space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2B3830] shadow-xl aspect-[4/5] bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                    alt="Slow-braised oxtail with rich butter bean gravy at JJ's Caribbean Kitchen"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#1A221D] border border-[#2A372E] text-center">
                  <span className="text-2xl font-black text-amber-400">48 hrs</span>
                  <p className="text-xs text-zinc-300 mt-1 font-medium">Traditional Slow Marination</p>
                </div>
              </div>

              <div className="reveal-on-scroll space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-[#1A221D] border border-[#2A372E] text-center">
                  <span className="text-2xl font-black text-emerald-400">100%</span>
                  <p className="text-xs text-zinc-300 mt-1 font-medium">Strict Halal Certified</p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#2B3830] shadow-xl aspect-[4/5] bg-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=700&q=80"
                    alt="Authentic slow-simmered curried goat and mutton with Jamaican spices"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars of Quality */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="reveal-on-scroll p-6 rounded-2xl bg-[#19211C] border border-[#28362D] hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Pimento Wood & Scotch Bonnet Heat</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    We never cut corners with bottled sauces. Our jerk marinade is blended from fresh scotch bonnet peppers, 
                    scallions, crushed pimento berries, and wild thyme before resting for two whole days.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-on-scroll p-6 rounded-2xl bg-[#19211C] border border-[#28362D] hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">100% Halal Integrity</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Every cut of chicken, mutton, goat, oxtail, and beef is sourced from certified Halal purveyors. 
                    Families and diners across Manchester enjoy peace of mind with every meal.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-on-scroll p-6 rounded-2xl bg-[#19211C] border border-[#28362D] hover:border-orange-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#C85A32]/15 text-orange-400 shrink-0">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Reggae Soul & Family Hospitality</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Step inside 12 Victoria Parade to the sound of Bob Marley, Studio One, and lovers rock. 
                    Whether you are dining in, picking up takeout, or sitting outside, you are welcomed as family.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Feature Checkmarks */}
            <div className="reveal-on-scroll grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Off-Street Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Outdoor Seating Area</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free High-Speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Delivery & Event Catering</span>
              </div>
            </div>

          </div>

        </div>

        {/* Stat Bar */}
        <div className="reveal-on-scroll grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17221C] via-[#1B2921] to-[#17221C] border border-[#2F4236] shadow-xl">
          <div className="text-center p-3">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">4.9 ★</div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Google Review Score</div>
            <div className="text-[11px] text-zinc-400">~168 Verified Reviews</div>
          </div>
          <div className="text-center p-3 border-l border-zinc-800">
            <div className="text-3xl sm:text-4xl font-black text-white">48 hrs</div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Authentic Jerk Marinade</div>
            <div className="text-[11px] text-zinc-400">Scotch Bonnet & Thyme</div>
          </div>
          <div className="text-center p-3 border-l border-zinc-800">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400">100%</div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Halal Certified</div>
            <div className="text-[11px] text-zinc-400">Strict Quality Checks</div>
          </div>
          <div className="text-center p-3 border-l border-zinc-800">
            <div className="text-3xl sm:text-4xl font-black text-amber-400">M41 9BP</div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-1">Urmston, Manchester</div>
            <div className="text-[11px] text-zinc-400">Victoria Parade</div>
          </div>
        </div>

      </div>
    </section>
  );
};
