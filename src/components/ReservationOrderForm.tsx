import React, { useState } from 'react';
import { Calendar, Users, Phone, Clock, MessageSquare, CheckCircle2, Sparkles, AlertCircle, Copy, Check, RefreshCw } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationOrderFormProps {
  initialService?: string;
  initialNotes?: string;
}

export const ReservationOrderForm: React.FC<ReservationOrderFormProps> = ({
  initialService = 'dine-in',
  initialNotes = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState<string>(initialService);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('18:00');
  const [partySize, setPartySize] = useState('2');
  const [dietaryRequirements, setDietaryRequirements] = useState<string[]>(['100% Halal Certified']);
  const [notes, setNotes] = useState(initialNotes);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    referenceCode: string;
    timestamp: string;
    name: string;
    phone: string;
    service: string;
    date: string;
    time: string;
    party: string;
    notes: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  // Sync initial props if changed from external triggers
  React.useEffect(() => {
    if (initialService) setServiceType(initialService);
  }, [initialService]);

  React.useEffect(() => {
    if (initialNotes) {
      setNotes((prev) => (prev ? `${prev}, ${initialNotes}` : initialNotes));
    }
  }, [initialNotes]);

  const toggleDietary = (item: string) => {
    setDietaryRequirements((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter a contact phone number.';
    } else if (phoneNumber.trim().length < 7) {
      errs.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!bookingDate) {
      errs.bookingDate = 'Please select a preferred date.';
    }
    if (!bookingTime) {
      errs.bookingTime = 'Please select a preferred time slot.';
    }
    if (!partySize) {
      errs.partySize = 'Please choose party size.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate snappy network confirmation
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const code = `JJ-MCR-${randomSuffix}`;

      setConfirmationData({
        referenceCode: code,
        timestamp: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
        name: fullName.trim(),
        phone: phoneNumber.trim(),
        service: serviceType === 'catering' ? 'Catering Event Inquiry' : serviceType === 'takeout' ? 'Takeout Collection' : 'Dine-In Table Reservation',
        date: bookingDate,
        time: bookingTime,
        party: partySize,
        notes: notes.trim()
      });

      setIsSubmitting(false);
    }, 550);
  };

  const handleCopyCode = () => {
    if (confirmationData) {
      navigator.clipboard.writeText(confirmationData.referenceCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setConfirmationData(null);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setBookingDate('');
    setNotes('');
    setErrors({});
  };

  return (
    <section id="reserve" className="py-24 bg-[#121413] relative border-t border-[#232C27] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B251F] text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-900/40">
            <span>Online Booking & Orders</span>
          </div>
          <h2 className="reveal-on-scroll text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Reserve Your <span className="text-amber-400">Table or Order</span>
          </h2>
          <p className="reveal-on-scroll mt-3 text-base text-zinc-300 max-w-xl mx-auto">
            Book a dining table, arrange takeout collection, or inquire about catering. You can also call us directly at{' '}
            <a href={RESTAURANT_INFO.phoneTel} className="text-amber-400 font-bold hover:underline">
              {RESTAURANT_INFO.phone}
            </a>.
          </p>
        </div>

        {/* Form Card or Confirmation State */}
        <div className="reveal-on-scroll rounded-3xl bg-[#171D1A] border border-[#2B392F] shadow-2xl overflow-hidden p-6 sm:p-10">
          
          {confirmationData ? (
            /* CONFIRMATION STATE */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                Fictional Demo Confirmation
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                Reservation Request Recorded!
              </h3>
              
              <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-white">{confirmationData.name}</strong>. In this client-pitch concept, 
                your booking request has been successfully processed with reference code:
              </p>

              {/* Reference Code Box */}
              <div className="max-w-sm mx-auto mb-8 p-4 rounded-2xl bg-[#121614] border-2 border-dashed border-amber-400/60 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Demo Reference Code</span>
                  <span className="text-xl sm:text-2xl font-black tracking-widest text-amber-400">
                    {confirmationData.referenceCode}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-2 rounded-xl bg-amber-400/20 hover:bg-amber-400 text-amber-400 hover:text-[#0C2E19] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Booking Summary Card */}
              <div className="max-w-md mx-auto bg-[#1A221E] rounded-2xl p-5 border border-[#2C3B31] text-left text-xs sm:text-sm space-y-2.5 mb-8">
                <div className="flex justify-between border-b border-[#28372C] pb-2">
                  <span className="text-zinc-400">Service Type:</span>
                  <span className="font-bold text-white">{confirmationData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#28372C] pb-2">
                  <span className="text-zinc-400">Date & Time:</span>
                  <span className="font-bold text-white">{confirmationData.date} at {confirmationData.time}</span>
                </div>
                <div className="flex justify-between border-b border-[#28372C] pb-2">
                  <span className="text-zinc-400">Party Size:</span>
                  <span className="font-bold text-white">{confirmationData.party} guests</span>
                </div>
                <div className="flex justify-between border-b border-[#28372C] pb-2">
                  <span className="text-zinc-400">Contact Phone:</span>
                  <span className="font-bold text-amber-400">{confirmationData.phone}</span>
                </div>
                {confirmationData.notes && (
                  <div className="flex justify-between pt-1">
                    <span className="text-zinc-400">Notes / Dishes:</span>
                    <span className="font-medium text-zinc-200 text-right max-w-[200px] truncate">{confirmationData.notes}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#212C25] hover:bg-[#2C3B31] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Submit Another Request</span>
                </button>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0C2E19] text-sm font-bold flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM STATE */
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Service Type Selector */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  1. Select Experience / Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'dine-in', label: 'Dine-In Table', desc: 'Victoria Parade restaurant' },
                    { id: 'takeout', label: 'Takeout Pickup', desc: 'Hot collection in Urmston' },
                    { id: 'catering', label: 'Event Catering', desc: 'Weddings & parties' }
                  ].map((s) => {
                    const isSelected = serviceType === s.id;
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setServiceType(s.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400/10 border-amber-400 text-white shadow-md shadow-amber-400/10'
                            : 'bg-[#1A221E] border-[#29372D] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                        }`}
                      >
                        <div className={`font-bold text-sm ${isSelected ? 'text-amber-400' : 'text-zinc-200'}`}>
                          {s.label}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{s.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Guest Details: Name, Phone, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Jordan Bennett"
                    className={`w-full px-4 py-3 rounded-xl bg-[#141916] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-[#2C3B31]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Contact Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 07393 628344"
                    className={`w-full px-4 py-3 rounded-xl bg-[#141916] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.phoneNumber ? 'border-red-500' : 'border-[#2C3B31]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Booking Date, Time, Party Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl bg-[#141916] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.bookingDate ? 'border-red-500' : 'border-[#2C3B31]'
                    }`}
                  />
                  {errors.bookingDate && (
                    <span className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.bookingDate}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Time Slot <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141916] border border-[#2C3B31] text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="12:00">12:00 PM (Lunch)</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM (Dinner)</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:30">8:30 PM (Fri/Sat Late)</option>
                    <option value="21:15">9:15 PM (Fri/Sat Late)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                    Party Size <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#141916] border border-[#2C3B31] text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests (Table for 2)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family Table)</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Group)</option>
                    <option value="10+">10+ Guests (Private/Celebration)</option>
                    <option value="25+">25+ Guests (Catering Event)</option>
                  </select>
                </div>
              </div>

              {/* Dietary Preferences Filter Checkboxes */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Dietary / Special Needs
                </label>
                <div className="flex flex-wrap gap-2">
                  {['100% Halal Certified', 'Mild Heat Only', 'Vegetarian / Ital', 'High Chair Needed', 'Outdoor Seating Preferred'].map((pref) => {
                    const isChecked = dietaryRequirements.includes(pref);
                    return (
                      <button
                        type="button"
                        key={pref}
                        onClick={() => toggleDietary(pref)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                            : 'bg-[#151B18] border-[#29362E] text-zinc-400 hover:text-white'
                        }`}
                      >
                        {isChecked && '✓ '}
                        {pref}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Dish Pre-selection Notes */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Message / Desired Dishes (e.g. Jerk Chicken, JJ’s Split, Birthday celebration)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us any favorite dishes you'd like reserved, dietary restrictions, or celebration requests..."
                  className="w-full px-4 py-3 rounded-xl bg-[#141916] border border-[#2C3B31] text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0C2E19] text-base font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Demo Booking...</span>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-[#0C2E19]" />
                      <span>Confirm Demo Reservation / Order</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-zinc-400 mt-2.5">
                  * Demo concept form: creates a live preview reference code without charging your card.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
