"use client";

import { useEffect, useRef } from "react";

const images = [
  { src: "/gallery1.jpg", tall: true },
  { src: "https://picsum.photos/seed/cocktail-making-bar/600/400.jpg", tall: false },
  { src: "https://picsum.photos/seed/wedding-drinks-table/600/400.jpg", tall: false },
  { src: "https://picsum.photos/seed/bartender-flair-trick/600/400.jpg", tall: false },
  { src: "https://picsum.photos/seed/tropical-cocktail-glow/600/400.jpg", tall: false },
  { src: "https://picsum.photos/seed/cocktail-closeup-ice/600/800.jpg", tall: true },
  { src: "https://picsum.photos/seed/bar-party-night/600/400.jpg", tall: false },
  { src: "https://picsum.photos/seed/mojito-mint-fresh/600/400.jpg", tall: false },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".anim-scale").forEach((el) => el.classList.add("visible"));
          ob.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="galeria" ref={ref} className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#C9A84C]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-14">
          <span className="anim inline-block text-[0.6rem] font-bold tracking-[0.35em] uppercase text-[#C9A84C]/60 mb-6">Świat kolorowych koktajli</span>
          <h2 className="anim d1 font-serif text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.15]">
            Nasza <span className="bg-gradient-to-r from-[#E0C068] via-[#C9A84C] to-[#B8943F] bg-clip-text text-transparent">galeria</span>
          </h2>
          <div className="anim d2 w-12 h-px bg-gradient-to-r from-[#C9A84C]/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div key={i} className={`anim-scale d${(i % 6) + 1} ${img.tall ? "row-span-2" : ""} rounded-lg overflow-hidden border border-[#111] group cursor-pointer`}>
              <img src={img.src} alt="" className="w-full h-full object-cover brightness-[0.55] saturate-[0.7] group-hover:brightness-[0.8] group-hover:saturate-[0.9] transition-all duration-700 group-hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}