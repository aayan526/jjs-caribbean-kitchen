/**
 * Calculates whether JJ's Caribbean Kitchen is currently open based on UK local time.
 * Hours:
 * - Tue–Thu: 12:00–20:00
 * - Fri–Sat: 12:00–22:00
 * - Sun & Mon: Closed
 */
export interface OpenStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  badgeColor: string;
}

export function getUKOpenStatus(): OpenStatus {
  try {
    // Get current date/time in Europe/London timezone
    const now = new Date();
    const ukTimeStr = now.toLocaleString('en-GB', { timeZone: 'Europe/London' });
    // Parse UK day of week and time
    const ukDate = new Date(ukTimeStr);
    
    // Fallback if Date parse is invalid
    const day = isNaN(ukDate.getDay()) ? now.getDay() : ukDate.getDay();
    const hours = isNaN(ukDate.getHours()) ? now.getHours() : ukDate.getHours();
    const minutes = isNaN(ukDate.getMinutes()) ? now.getMinutes() : ukDate.getMinutes();
    const currentDecimalHour = hours + minutes / 60;

    // Day: 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
    if (day === 0 || day === 1) {
      return {
        isOpen: false,
        statusText: "Closed Today",
        nextEventText: "Reopens Tuesday at 12:00 PM",
        badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60"
      };
    }

    if (day >= 2 && day <= 4) {
      // Tue - Thu (12:00 - 20:00)
      if (currentDecimalHour >= 12 && currentDecimalHour < 20) {
        return {
          isOpen: true,
          statusText: "Open Now",
          nextEventText: `Open until 8:00 PM today`,
          badgeColor: "bg-emerald-950/70 text-emerald-400 border-emerald-700/60"
        };
      } else if (currentDecimalHour < 12) {
        return {
          isOpen: false,
          statusText: "Opens at 12:00 PM",
          nextEventText: "Open today 12:00 – 20:00",
          badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60"
        };
      } else {
        return {
          isOpen: false,
          statusText: "Closed for the evening",
          nextEventText: day === 4 ? "Reopens Friday at 12:00 PM" : "Reopens tomorrow at 12:00 PM",
          badgeColor: "bg-zinc-900/80 text-zinc-400 border-zinc-700/60"
        };
      }
    }

    if (day === 5 || day === 6) {
      // Fri - Sat (12:00 - 22:00)
      if (currentDecimalHour >= 12 && currentDecimalHour < 22) {
        return {
          isOpen: true,
          statusText: "Open Now",
          nextEventText: `Open late until 10:00 PM tonight`,
          badgeColor: "bg-emerald-950/70 text-emerald-400 border-emerald-700/60"
        };
      } else if (currentDecimalHour < 12) {
        return {
          isOpen: false,
          statusText: "Opens at 12:00 PM",
          nextEventText: "Weekend hours: 12:00 – 22:00",
          badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60"
        };
      } else {
        return {
          isOpen: false,
          statusText: "Closed for the night",
          nextEventText: day === 6 ? "Reopens Tuesday at 12:00 PM" : "Reopens Saturday at 12:00 PM",
          badgeColor: "bg-zinc-900/80 text-zinc-400 border-zinc-700/60"
        };
      }
    }
  } catch (e) {
    console.error('Error calculating UK open status:', e);
  }

  // Safe default
  return {
    isOpen: true,
    statusText: "Open Tue–Sat",
    nextEventText: "Tue–Thu 12–20, Fri–Sat 12–22",
    badgeColor: "bg-emerald-950/70 text-emerald-400 border-emerald-700/60"
  };
}
