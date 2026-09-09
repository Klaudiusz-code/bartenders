"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

const images = [
  { src: "gallery1.jpg" },
  { src: "gallery2.jpg" },
  { src: "gallery5.jpg" },
  { src: "gallery4.jpg" },
];

const delays = ["d2", "d3", "d4"];

export default function GalleryTeaser() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim, .anim-scale")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="realizacje" ref={ref} className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-5">
              <span className="w-5 h-px bg-[#0E7490]/40" />
              Realizacje
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-black tracking-tight">
              Świat kolorowych <span className="text-[#0E7490]">koktajli</span>
            </h2>
          </div>
          <Link
            href="/realizacje"
            className="anim d2 group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase hover:bg-[#0E7490] transition-all duration-300 rounded-full hover:shadow-xl hover:shadow-[#0E7490]/20 shrink-0"
          >
            <span>Zobacz galerię</span>
            <MdArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="anim-scale d1 w-full md:w-1/2 h-[300px] md:h-[550px] lg:h-[650px] rounded-2xl overflow-hidden relative group cursor-pointer bg-neutral-100">
            <img
              src={images[0].src}
              alt="Barman przygotowujący drinka z ogniem"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          <div className="w-full md:w-1/2 grid grid-rows-3 gap-3 md:gap-4 h-[300px] md:h-[550px] lg:h-[650px]">
            {images.slice(1).map((img, i) => (
              <div
                key={i}
                className={`anim-scale ${delays[i]} rounded-xl overflow-hidden relative group cursor-pointer bg-neutral-100`}
              >
                <img
                  src={img.src}
                  alt={`Realizacja ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
