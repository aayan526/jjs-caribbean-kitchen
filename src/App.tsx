import React, { useState } from 'react';
import { Phone, Calendar, ArrowUp, Sun } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CateringSection } from './components/CateringSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ReservationOrderForm } from './components/ReservationOrderForm';
import { HoursAndLocation } from './components/HoursAndLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RESTAURANT_INFO } from './data/restaurantData';
import { useLenisAndGSAP } from './hooks/useLenisAndGSAP';

export default function App() {
  const { scrollTo } = useLenisAndGSAP();
  const [selectedDishNote, setSelectedDishNote] = useState('');
  const [selectedService, setSelectedService] = useState('dine-in');

  const handleNavigate = (targetId: string) => {
    scrollTo(targetId);
  };

  const handleSelectDishForReservation = (dishName: string) => {
    setSelectedDishNote(`Pre-selected dish: ${dishName}`);
    scrollTo('#reserve');
  };

  const handleSelectCatering = (pkgTitle: string) => {
    setSelectedService('catering');
    setSelectedDishNote(`Inquiry for: ${pkgTitle}`);
    scrollTo('#reserve');
  };

  return (
    <div className="min-h-screen bg-[#121413] text-[#F3F4F6] font-['Raleway'] relative flex flex-col selection:bg-amber-400 selection:text-[#0C2E19]">
      
      {/* Sticky Top Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => handleNavigate('#menu')}
          onReserve={() => handleNavigate('#reserve')}
        />

        {/* 2. About & Kingston Heritage */}
        <About />

        {/* 3. Handcrafted Menu (Mains, Sides, Desserts, Vegetarian, Kids) */}
        <MenuSection onSelectDishForReservation={handleSelectDishForReservation} />

        {/* 4. Atmosphere & Features (Halal, Parking, Wi-Fi, Reggae, Outdoor) */}
        <FeaturesSection />

        {/* 5. Catering & Celebrations */}
        <CateringSection onSelectCatering={handleSelectCatering} />

        {/* 6. Testimonials & Google Reviews (4.9 Rating) */}
        <TestimonialsSection />

        {/* 7. Order & Reservation Interactive Form */}
        <ReservationOrderForm
          initialService={selectedService}
          initialNotes={selectedDishNote}
        />

        {/* 8. Hours & Location with Google Maps & Live Status */}
        <HoursAndLocation />

        {/* 9. Direct Contact & FAQ */}
        <ContactSection />
      </main>

      {/* 10. Footer with Visible Demo Concept Disclaimer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button on Mobile: Quick Call & Book Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2 p-1.5 rounded-2xl bg-[#141A17]/95 border border-[#2D3C32] backdrop-blur-md shadow-2xl">
        <a
          href={RESTAURANT_INFO.phoneTel}
          className="flex-1 py-3 px-3 rounded-xl bg-amber-400 text-[#0C2E19] text-xs font-black flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-4 h-4" />
          <span>Call JJ’s</span>
        </a>
        <button
          onClick={() => handleNavigate('#reserve')}
          className="flex-1 py-3 px-3 rounded-xl bg-[#202923] hover:bg-[#28352D] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-[#344439] cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Book / Order</span>
        </button>
      </div>

      {/* Floating Back to Top Button for Desktop */}
      <button
        onClick={() => handleNavigate('#top')}
        className="hidden md:flex fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#1C2520] hover:bg-amber-400 text-zinc-300 hover:text-[#0C2E19] border border-[#2C3B31] hover:border-amber-400 shadow-xl transition-all duration-300 cursor-pointer"
        aria-label="Scroll back to top"
        title="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}
