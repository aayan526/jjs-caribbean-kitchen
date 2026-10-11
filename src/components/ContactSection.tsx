import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is all the meat served at JJ’s Caribbean Kitchen 100% Halal?",
      a: "Yes, absolutely. Every cut of chicken, mutton, goat, oxtail, and beef is strictly 100% Halal certified. We handle and prepare all ingredients with the utmost integrity."
    },
    {
      q: "Is there car parking available at the restaurant?",
      a: "Yes! There is convenient free off-street parking located directly adjacent to Victoria Parade in Urmston. You can easily park for dining in or quick curbside takeout collection."
    },
    {
      q: "Can I adjust the spice levels for children or mild preferences?",
      a: "Yes! While our traditional jerk chicken and peppered steak carry authentic scotch bonnet warmth, we offer dedicated mild options including mild honey jerk tenders, macaroni pie, sweet plantains, and dumplings."
    },
    {
      q: "Do you cater for private parties, birthdays, or weddings in Manchester?",
      a: "Yes, we provide full catering services across Greater Manchester—including hot chafing dishes, party platters, and bespoke island buffets. You can submit an inquiry through our booking form or call us directly."
    },
    {
      q: "Do I need a reservation or can I walk in?",
      a: "Walk-ins are always warmly welcomed! However, during peak hours (Friday & Saturday evenings 6 PM – 9 PM), we recommend reserving ahead to guarantee your preferred table."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#121413] relative border-t border-[#232C27] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B251F] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Direct Kitchen Contact</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            We’d Love to <span className="text-amber-400">Hear from You</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            Have a question about allergens, event catering, or tonight's specials? Give us a call or check our quick FAQs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone & Quick Reach Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Feature Card */}
            <div className="reveal-on-scroll p-8 rounded-3xl bg-gradient-to-br from-[#1C2620] to-[#151D18] border-2 border-amber-400/60 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-[#0C2E19] shadow-lg shadow-amber-400/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">Direct Kitchen Line</span>
                  <div className="text-lg font-black text-white">JJ’s Caribbean Kitchen</div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                Call us directly for instant table reservations, large takeout orders, allergen inquiries, or directions.
              </p>

              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-[#0C2E19] text-lg font-extrabold flex items-center justify-center gap-3 shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <div className="mt-4 text-center text-xs text-zinc-400 flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tue–Thu 12–20 | Fri–Sat 12–22</span>
              </div>
            </div>

            {/* Address & Halal Card */}
            <div className="reveal-on-scroll p-6 rounded-3xl bg-[#171D1A] border border-[#2B392F] space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Visit the Kitchen</h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    12 Victoria Parade, Urmston, Manchester M41 9BP
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-emerald-400">
                    Free off-street parking available
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="reveal-on-scroll space-y-4">
              <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Frequently Asked Questions</span>
              </h3>

              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-[#171D1A] border border-[#27342B] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-[#232E26]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
