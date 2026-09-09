"use client";

import { useEffect, useRef } from "react";
import { MdCheck } from "react-icons/md";

interface Props {
  num: string;
  title: string;
  desc: string;
  img: string;
  tag: string;
  features: string[];
  reverse?: boolean;
}

export default function ServiceBlock({
  num,
  title,
  desc,
  img,
  tag,
  features,
  reverse,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim-left, .anim-right")
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
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center"
    >
      {/* Zdjęcie */}
      <div className={reverse ? "lg:order-2 anim-right" : "anim-left"}>
        <div className="relative overflow-hidden aspect-[4/5] rounded-3xl shadow-2xl shadow-black/10 group">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#0E7490] font-poppins text-[0.6rem] font-bold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full shadow-lg">
              {tag}
            </span>
          </div>
        </div>
      </div>

      {/* Treść */}
      <div className={reverse ? "lg:order-1 anim-left" : "anim-right"}>
        <div className="flex items-center gap-3 mb-6">
          <span className="font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80">
            {tag}
          </span>

          <span className="w-6 h-px bg-gray-200" />

          <span className="font-poppins text-gray-300 text-[0.7rem] tracking-widest font-bold">
            {num}
          </span>
        </div>

        <h3 className="font-serif text-3xl md:text-[2.5rem] lg:text-[2.8rem] font-bold leading-[1.05] text-black mb-6 tracking-tight">
          {title}
        </h3>

        <p className="font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-10 max-w-lg">
          {desc}
        </p>

        <ul className="space-y-4">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-4 font-poppins text-gray-600 text-[0.9rem]"
            >
              <span className="w-8 h-8 rounded-full border border-[#0E7490]/30 flex items-center justify-center shrink-0 bg-[#0E7490]/5">
                <MdCheck size={14} className="text-[#0E7490]" />
              </span>

              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
