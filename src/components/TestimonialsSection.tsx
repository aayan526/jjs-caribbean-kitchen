import React from 'react';
import { Star, Quote, CheckCircle, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#141916] relative border-t border-[#232C27] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2620] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Loved Across <span className="text-amber-400">Greater Manchester</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            Rated {RESTAURANT_INFO.rating} out of 5 stars based on ~{RESTAURANT_INFO.reviewCount} Google reviews. Real feedback from our guests.
          </p>
        </div>

        {/* Rating Summary Banner */}
        <div className="reveal-on-scroll max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17221C] via-[#1C2922] to-[#17221C] border border-[#2D3E33] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex flex-col items-center justify-center text-[#0C2E19] shadow-lg shadow-amber-400/20 shrink-0">
              <span className="text-3xl font-black leading-none">4.9</span>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Google</span>
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <div className="text-base font-bold text-white">Top Rated Caribbean in Urmston</div>
              <div className="text-xs text-zinc-300">Over 160+ five-star experiences on Google Maps</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-[#141C17] border border-[#2B392F] text-xs font-semibold text-emerald-300">
              ✓ Verified Diners
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#141C17] border border-[#2B392F] text-xs font-semibold text-amber-300">
              ✓ 100% Halal
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="reveal-on-scroll p-7 rounded-2xl bg-[#171D1A] border border-[#26332A] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-700/40 group-hover:text-amber-400/20 transition-colors pointer-events-none" />

              <div>
                {/* Reviewer info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1C2C22] to-[#25392D] border border-[#344639] flex items-center justify-center text-amber-400 font-black text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">{review.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <span>{review.location}</span>
                      <span>·</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  “{review.comment}”
                </p>
              </div>

              {/* Tagged dish recommendation */}
              <div className="pt-4 border-t border-[#243027] flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-medium">Favorite Order:</span>
                <span className="font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  {review.favoriteDish}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
