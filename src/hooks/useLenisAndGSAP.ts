import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisAndGSAP() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis Smooth Scroll (unless user prefers reduced motion)
    let lenis: Lenis | null = null;
    if (!prefersReducedMotion) {
      try {
        lenis = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.95,
          touchMultiplier: 1.5,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        const tickerCallback = (time: number) => {
          lenis?.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn('Lenis init notice:', err);
      }
    }

    // 2. Setup GSAP ScrollTrigger reveals
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));

    revealElements.forEach((el) => {
      if (prefersReducedMotion) {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.visibility = 'visible';
        return;
      }

      // Initial state
      gsap.set(el, { opacity: 0, y: 28 });

      // Snappy reveal trigger
      ScrollTrigger.create({
        trigger: el,
        start: 'top 95%', // threshold ~0.05 into viewport
        once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            overwrite: 'auto',
            clearProps: 'transform' // clean transform for crisp subpixel text
          });
        }
      });
    });

    // 3. CRITICAL SAFETY NET
    // "every scroll reveal must include a JS fallback safety net (setTimeout ~3s + getBoundingClientRect
    // viewport check that force-reveals any in-viewport element still hidden) so no section can ever stay invisible."
    const forceRevealInViewport = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealElements.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If element is inside or near viewport (or user scrolled past)
        if (rect.top <= vh * 0.98) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        }
      });
    };

    // Immediate check
    forceRevealInViewport();

    // Scroll & resize listeners for fallback check
    window.addEventListener('scroll', forceRevealInViewport, { passive: true });
    window.addEventListener('resize', forceRevealInViewport, { passive: true });

    // Hard fallback safety timers: 1.2s and 3s
    const timer1 = setTimeout(forceRevealInViewport, 1200);
    const timerHardSafety = setTimeout(() => {
      // Force all reveal elements visible unconditionally after 3s so nothing is EVER stuck hidden
      revealElements.forEach((el) => {
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.visibility = 'visible';
        }
      });
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timerHardSafety);
      window.removeEventListener('scroll', forceRevealInViewport);
      window.removeEventListener('resize', forceRevealInViewport);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  const scrollTo = (target: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -70, duration: 1.2 });
    } else {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return { scrollTo };
}
