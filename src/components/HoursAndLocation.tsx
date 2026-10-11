import React from 'react';
import { Clock, MapPin, Navigation, Car, Train, Phone, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { getUKOpenStatus } from '../utils/hoursHelper';

export const HoursAndLocation: React.FC = () => {
  const openStatus = getUKOpenStatus();

  return (
    <section id="location" className="py-24 bg-[#141916] relative border-t border-[#232C27] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B2620] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Find JJ’s in Urmston</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Hours & <span className="text-amber-400">Location</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            Join us on Victoria Parade. Free off-street parking, outdoor dining, and warm Caribbean hospitality await.
          </p>
        </div>

        {/* 2-Column Layout: Left Hours & Details, Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours Card + Travel Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Box */}
            <div className="reveal-on-scroll rounded-3xl bg-[#18201C] border border-[#2A372E] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#26342A]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">Opening Times</h3>
                    <p className="text-xs text-zinc-400">Manchester UK Time</p>
                  </div>
                </div>

                {/* Dynamic Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-extrabold border ${openStatus.badgeColor}`}>
                  {openStatus.statusText}
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-[#232F26]">
                  <span className="font-semibold text-white">Tuesday – Thursday</span>
                  <span className="text-amber-400 font-bold">12:00 – 20:00</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#232F26]">
                  <span className="font-semibold text-white">Friday – Saturday</span>
                  <span className="text-emerald-400 font-bold">12:00 – 22:00 (Late)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 text-zinc-400">
                  <span className="font-medium">Sunday & Monday</span>
                  <span className="font-semibold text-zinc-400">Closed</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#26342A] text-xs text-zinc-300">
                <span className="text-emerald-400 font-bold">Kitchen Notice: </span>
                Last hot food orders taken 30 minutes before closing. Takeout pickups available during all open hours.
              </div>
            </div>

            {/* Address & Parking Card */}
            <div className="reveal-on-scroll rounded-3xl bg-[#18201C] border border-[#2A372E] p-6 sm:p-7 shadow-xl space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-base">Address</h3>
                    <p className="text-xs text-zinc-400">Greater Manchester</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-200 font-medium pl-11">
                  {RESTAURANT_INFO.address}
                </p>
              </div>

              {/* Transport & Access bullet points */}
              <div className="space-y-2.5 pt-2 text-xs text-zinc-300 pl-1">
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Free Off-Street Parking:</strong> Dedicated parking bays directly beside Victoria Parade.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Train className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Train Access:</strong> Just 5 minutes walk from Urmston Railway Station (Manchester Oxford Rd line).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Highway Access:</strong> 5 minutes from M60 Junctions 9 & 10 (Trafford Centre corridor).</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0C2E19] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="py-3 px-4 rounded-xl bg-[#202B24] hover:bg-[#28372E] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border border-[#314035] transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Kitchen</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map Iframe */}
          <div className="lg:col-span-7">
            <div className="reveal-on-scroll rounded-3xl overflow-hidden border-2 border-[#2D3A31] shadow-2xl bg-[#151C18] h-[480px] sm:h-[560px] relative">
              
              {/* Overlay Address Badge on Top of Map */}
              <div className="absolute top-4 left-4 z-10 px-4 py-2.5 rounded-2xl bg-[#141A17]/95 border border-[#314136] backdrop-blur-md shadow-lg max-w-xs">
                <div className="text-xs font-black text-amber-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>JJ’s Caribbean Kitchen</span>
                </div>
                <div className="text-[11px] text-zinc-300 mt-0.5">
                  12 Victoria Parade, Urmston M41 9BP
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-semibold">
                  Free Parking · Outdoor Seating
                </div>
              </div>

              {/* Embedded Google Map */}
              <iframe
                title="JJ's Caribbean Kitchen Location Map"
                src="https://maps.google.com/maps?q=12%20Victoria%20Parade,%20Urmston,%20Manchester%20M41%209BP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter brightness-90 contrast-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
