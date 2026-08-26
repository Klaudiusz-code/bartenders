"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

export default function AboutTeaser() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim, .anim-left, .anim-right")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white py-24 md:py-32 lg:py-40 px-6 xl:px-10"
    >
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="anim-left relative max-w-md mx-auto lg:max-w-none w-full">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0E7490]/5 rounded-full blur-2xl pointer-events-none" />
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 relative">
            <img
              src="/about.jpg"
              alt="Bracia barmani"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="w-full">
          <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
            <span className="w-5 h-px bg-[#0E7490]/40" />
            Kim jesteśmy
          </span>

          <h2 className="anim d1 font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] text-black mb-8 tracking-tight">
            Dwie pasje,
            <br />
            <span className="text-[#0E7490]">jeden cel</span>
          </h2>

          <div className="space-y-6 mb-12">
            <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.85]">
              Jesteśmy braćmi, którzy wspólnie otrzymali dar i pasję do
              tworzenia najwyższej jakości koktajli — jest to nasz sposób na
              życie. Poprzez wieloletnią ciężką pracą za barem nauczyliśmy się
              tworzyć wokół siebie miejsce wyjątkowe i pełne pozytywnej energii.
            </p>
            <p className="anim d3 font-poppins text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.85]">
              Przeszkoliliśmy się u najlepszych w Londynie, Nowym Jorku i Tokio.
              Dziś łączymy techniczną perfekcję z artystyczną wizją — każde
              zlecenie traktujemy jak nowy projekt.
            </p>
          </div>

          <div className="anim d4 grid grid-cols-3 mb-12 gap-8 py-8 border-y border-gray-100">
            {[
              { num: "100+", label: "Eventów" },
              { num: "12", label: "Nagród" },
              { num: "3", label: "Kraje szkoleń" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-poppins font-bold text-3xl md:text-4xl text-[#0E7490] leading-none mb-2">
                  {s.num}
                </div>
                <div className="font-poppins text-gray-400 text-[0.7rem] tracking-wider uppercase font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/o-nas"
            className="anim d5 group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase hover:bg-[#0E7490] transition-all duration-300 rounded-full hover:shadow-xl hover:shadow-[#0E7490]/20"
          >
            <span>Nasza historia</span>
            <MdArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
