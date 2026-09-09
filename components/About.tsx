"use client";

import { useEffect, useRef } from "react";

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

    if (ref.current) {
      ob.observe(ref.current);
    }

    return () => ob.disconnect();
  }, []);

  return (
    <section
      id="o-nas"
      ref={ref}
      className="bg-white py-24 md:py-32 lg:py-40 px-6 xl:px-10"
    >
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* ZDJĘCIE */}
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

        {/* TREŚĆ */}
        <div className="w-full">
          <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
            <span className="w-5 h-px bg-[#0E7490]/40" />
            Kim jesteśmy
          </span>

          <h2 className="anim d1 font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] text-black mb-8 tracking-tight">
            Bracia,
            <br />
            <span className="text-[#0E7490]">jedna pasja</span>
          </h2>

          <div className="space-y-6">
            <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.85]">
              Jesteśmy braćmi, których połączyła pasja do tworzenia wyjątkowych
              koktajli i pracy za barem. Dziś tworzymy mobilny bar, który
              pojawia się na weselach, eventach firmowych i prywatnych
              przyjęciach.
            </p>

            <p className="anim d3 font-poppins text-gray-500 text-[0.95rem] md:text-[1.05rem] leading-[1.85]">
              Stawiamy na dobrą atmosferę, profesjonalną obsługę i dopracowane
              koktajle. Do każdego wydarzenia podchodzimy indywidualnie, dbając
              o to, żeby bar był czymś więcej niż tylko miejscem z drinkami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
