import React, { useState } from 'react';
import { Flame, Info, Check, Sparkles, Filter, ChevronRight, X } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDishForReservation?: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDishModal, setSelectedDishModal] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'mains', label: 'Signature Mains' },
    { id: 'sides', label: 'Sides & Patties' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'vegetarian', label: 'Vegetarian / Ital' },
    { id: 'kids', label: 'Kids Options' },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const getSpicinessBadge = (level?: string) => {
    switch (level) {
      case 'Mild':
        return <span className="text-[11px] font-semibold text-emerald-400">Mild · Kid Friendly</span>;
      case 'Medium':
        return <span className="text-[11px] font-semibold text-amber-400">Medium Heat</span>;
      case 'Hot':
        return <span className="text-[11px] font-bold text-orange-400 flex items-center gap-1"><Flame className="w-3 h-3 text-orange-400" /> Hot Jerk Spice</span>;
      case 'Extra Hot':
        return <span className="text-[11px] font-bold text-red-400 flex items-center gap-1"><Flame className="w-3 h-3 text-red-400" /> Scotch Bonnet Fiery</span>;
      default:
        return null;
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#121413] relative border-t border-[#232C27]">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B251F] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Authentic Jamaican Kitchen</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Handcrafted <span className="text-amber-400">Menu</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base sm:text-lg text-zinc-300">
            Slow-simmered, charcoal-grilled, and prepared fresh daily in Urmston. 100% Halal certified meats.
          </p>

          {/* Prominent Illustrative Price Disclaimer Banner */}
          <div className="reveal-on-scroll mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/40 border border-amber-600/40 text-amber-300 text-xs sm:text-sm font-medium">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Client-Pitch Concept: <strong>All prices shown are illustrative demo prices only</strong>.</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="reveal-on-scroll flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#18201B] border border-[#2A372E] max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-[#0C2E19] shadow-md shadow-amber-400/20'
                      : 'text-zinc-300 hover:text-white hover:bg-[#202B24]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="reveal-on-scroll group rounded-2xl bg-[#171C19] border border-[#27332B] hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171C19] via-transparent to-transparent opacity-80" />
                
                {/* Top Badge: Popular / Special */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.isPopular && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500 text-[#0C2E19] text-[10px] font-black uppercase tracking-wider shadow">
                      Popular
                    </span>
                  )}
                  {item.isHalal && (
                    <span className="px-2 py-1 rounded-md bg-[#0C2E19]/90 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
                      100% Halal
                    </span>
                  )}
                </div>

                {/* Price Tag with Illustrative indicator */}
                <div className="absolute bottom-3 right-3 text-right">
                  <div className="px-3 py-1 rounded-lg bg-[#141A16]/95 border border-[#314036] backdrop-blur-sm">
                    <span className="text-base font-extrabold text-amber-400">{item.price}</span>
                    <span className="block text-[9px] text-zinc-400 font-medium leading-none">demo price</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Spiciness & Tags */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#26332A] text-xs">
                    <div>{getSpicinessBadge(item.spiciness)}</div>
                    <div className="flex gap-1.5">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[11px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Details & Pre-select */}
                  <div className="mt-4 pt-3 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDishModal(item)}
                      className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#202923] hover:bg-[#28352D] text-zinc-200 hover:text-white transition-colors cursor-pointer text-center"
                    >
                      Quick Info
                    </button>
                    {onSelectDishForReservation && (
                      <button
                        onClick={() => onSelectDishForReservation(item.name)}
                        className="py-2 px-3 rounded-lg text-xs font-bold bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-[#0C2E19] border border-amber-400/40 hover:border-amber-400 transition-all cursor-pointer"
                        title="Add to Reservation notes"
                      >
                        Select for Order
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className="reveal-on-scroll mt-12 p-6 rounded-2xl bg-[#171E19] border border-[#2B392F] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Looking for JJ’s Split Combo or Catering Platters?
              </div>
              <div className="text-xs text-zinc-300">
                Mix and match any two signature meats with plantains & rice, or inquire about full wedding & party catering.
              </div>
            </div>
          </div>
          <a
            href="#reserve"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#0C2E19] bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap"
          >
            Inquire About Custom Orders
          </a>
        </div>

      </div>

      {/* Dish Quick Info Modal */}
      {selectedDishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#171D1A] border border-[#303E34] shadow-2xl overflow-hidden p-6 text-left">
            <button
              onClick={() => setSelectedDishModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#202923] text-zinc-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-zinc-900">
              <img
                src={selectedDishModal.image}
                alt={selectedDishModal.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-4 mb-2">
              <h3 className="text-xl font-black text-white">{selectedDishModal.name}</h3>
              <div className="text-right">
                <span className="text-lg font-bold text-amber-400">{selectedDishModal.price}</span>
                <span className="block text-[10px] text-zinc-400">illustrative demo price</span>
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {selectedDishModal.description}
            </p>

            <div className="space-y-2 text-xs text-zinc-300 mb-6 bg-[#1A221E] p-3 rounded-xl border border-[#28352D]">
              <div className="flex justify-between">
                <span className="text-zinc-400">Dietary Guarantee:</span>
                <span className="font-semibold text-emerald-400">100% Halal Certified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Spice Profile:</span>
                <span className="font-semibold text-white">{selectedDishModal.spiciness || 'Mild'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Prepared:</span>
                <span className="font-semibold text-white">Fresh daily at 12 Victoria Parade</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onSelectDishForReservation) {
                    onSelectDishForReservation(selectedDishModal.name);
                  }
                  setSelectedDishModal(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-[#0C2E19] text-center transition-colors cursor-pointer"
              >
                Pre-Select Dish for Booking
              </button>
              <button
                onClick={() => setSelectedDishModal(null)}
                className="py-3 px-4 rounded-xl text-sm font-semibold bg-[#222B25] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
