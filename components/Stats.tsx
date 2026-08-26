"use client";

import { useEffect, useRef } from "react";
import {
  FaHeart,
  FaBuilding,
  FaStar,
  FaGlassMartiniAlt,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const stats = [
  { value: 163, label: "Zorganizowanych Wesel", icon: FaHeart },
  { value: 26, label: "Imprez Firmowych", icon: FaBuilding },
  { value: 47, label: "Pokazów Flair", icon: FaStar },
  { value: 249, label: "Tysięcy Drinków", icon: FaGlassMartiniAlt },
];

const socials = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaTiktok, label: "TikTok" },
];

function animateCounter(el: HTMLElement, target: number) {
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / 2000, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toString();
  };
  requestAnimationFrame(tick);
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            e.target
              .querySelectorAll("[data-count]")
              .forEach((c) =>
                animateCounter(
                  c as HTMLElement,
                  parseInt(c.getAttribute("data-count") || "0", 10),
                ),
              );
            e.target
              .querySelectorAll(".anim")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2670&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="anim inline-flex items-center justify-center gap-3 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-5">
            <span className="w-5 h-px bg-[#0E7490]/40" />
            Liczby mówią same za siebie
            <span className="w-5 h-px bg-[#0E7490]/40" />
          </span>
          <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-white tracking-tight">
            Nasze <span className="text-[#0E7490]">osiągnięcia</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="anim d1 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm group hover:border-[#0E7490]/20 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0E7490]/20 group-hover:border-[#0E7490]/30 transition-colors duration-500">
                <s.icon size={20} className="text-[#0E7490]" />
              </div>
              <div className="font-serif text-3xl md:text-5xl font-bold text-white mb-2 leading-none">
                <span data-count={s.value}>0</span>
              </div>
              <div className="font-poppins text-white/30 text-[0.6rem] md:text-[0.7rem] font-medium tracking-wider uppercase leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="anim d2 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <p className="font-poppins text-white/20 text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
            Śledź nas w social mediach
          </p>
          <div className="w-8 h-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#0E7490] transition-colors duration-300"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
