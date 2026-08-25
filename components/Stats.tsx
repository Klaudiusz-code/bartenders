"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: 163, label: "Wesel" },
  { value: 26, label: "Imprez firmowych" },
  { value: 47, label: "Pokazów barmańskich" },
  { value: 249, label: "Polanych litrów alkoholu" },
];

function animateCounter(el: HTMLElement, target: number) {
  const start = performance.now();
  const dur = 2200;
  const tick = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target).toString();
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toString();
  };
  requestAnimationFrame(tick);
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          e.target.querySelectorAll("[data-count]").forEach((c) => {
            animateCounter(c as HTMLElement, parseInt(c.getAttribute("data-count") || "0", 10));
          });
          e.target.querySelectorAll(".anim").forEach((el) => el.classList.add("visible"));
          ob.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#C9A84C]/15 to-transparent" />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="anim inline-block text-[0.6rem] font-bold tracking-[0.35em] uppercase text-[#C9A84C]/60 mb-4">Brothers Bartenders w liczbach</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`anim d${i + 1} text-center`}>
              <div className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#E0C068] to-[#B8943F] bg-clip-text text-transparent mb-2">
                <span data-count={s.value}>0</span>
              </div>
              <div className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-[#555]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}