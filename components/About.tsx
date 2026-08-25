"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".anim-left, .anim-right").forEach((el) => el.classList.add("visible"));
          ob.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="o-nas" ref={ref} className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#C9A84C]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="anim-left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#111]">
                <img src="https://picsum.photos/seed/bartender-pouring-drink/800/1000.jpg" alt="Brothers Bartenders" className="w-full h-full object-cover brightness-[0.7] saturate-[0.8] hover:brightness-[0.85] hover:saturate-[0.9] transition-all duration-700" loading="lazy" />
              </div>
              <div className="anim-left d4 absolute -top-3 -left-3 w-14 h-14 border-t border-l border-[#C9A84C]/20" />
              <div className="anim-left d5 absolute -bottom-3 -right-3 w-14 h-14 border-b border-r border-[#C9A84C]/20" />
              <div className="absolute -bottom-1.5 -left-1.5">
                <div className="w-3 h-3 rounded-full bg-[#C9A84C]/40" style={{ animation: "ripple 2.5s ease-out infinite" }} />
              </div>
              <div className="anim-left d3 absolute bottom-6 right-6 bg-[#050505]/80 backdrop-blur-xl border border-[#1A1A1A] rounded-md px-4 py-3">
                <span className="text-[0.58rem] font-bold tracking-[0.2em] uppercase text-[#C9A84C] block">Doświadczenie</span>
                <span className="font-serif text-xl font-bold text-white">8+ lat</span>
              </div>
            </div>
          </div>

          <div>
            <span className="anim-right inline-block text-[0.6rem] font-bold tracking-[0.35em] uppercase text-[#C9A84C]/60 mb-6">Kim jesteśmy</span>
            <h2 className="anim-right d1 font-serif text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.15] mb-8">
              Dwie pasje,{" "}
              <span className="bg-gradient-to-r from-[#E0C068] via-[#C9A84C] to-[#B8943F] bg-clip-text text-transparent">jeden cel</span>
            </h2>
            <div className="space-y-5">
              <p className="anim-right d2 text-[#666] text-[0.92rem] leading-[1.85]">
                Jesteśmy braćmi, którzy wspólnie otrzymali dar i pasję do tworzenia najwyższej jakości koktajli — jest to nasz sposób na życie. Poprzez wieloletnią ciężką pracą za barem nauczyliśmy się tworzyć wokół siebie miejsce wyjątkowe, beztroskie i pełne pozytywnej energii.
              </p>
              <p className="anim-right d3 text-[#666] text-[0.92rem] leading-[1.85]">
                Przeszkoliliśmy się u najlepszych w Londynie, Nowym Jorku i Tokio. Dziś łączymy techniczną perfekcję z artystyczną wizją — każde zlecenie traktujemy jak nowy projekt.
              </p>
            </div>
            <div className="anim-right d4 mt-10 flex flex-wrap items-center gap-5">
              <Link href="/#oferta" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#C9A84C] text-[#050505] text-[0.72rem] font-semibold tracking-[0.08em] uppercase rounded-[3px] hover:bg-[#E0C068] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-all duration-300">
                <span>Nasza oferta</span>
                <span className="iconify" data-icon="mdi:arrow-right" data-width="14" />
              </Link>
              <span className="text-[#333] text-[0.72rem] tracking-wide">500+ eventów • 12 nagród</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}