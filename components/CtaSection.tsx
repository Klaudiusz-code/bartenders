"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowRight, MdPhone } from "react-icons/md";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (estr) => {
        estr.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative py-28 lg:py-40 px-6 xl:px-10 overflow-hidden"
      >
        <div className="absolute inset-0 scale-105 cta-bg-anim">
          <Image
            src="/gallery5.jpg"
            alt=""
            fill
            className="object-cover object-center h-full w-full"
            priority={false}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(14,116,144,0.2) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <div className="anim inline-flex items-center gap-6 justify-center mb-12">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#0E7490]/50" />
            <Image
              src="/logo.png"
              alt="Brothers Bartenders"
              width={140}
              height={40}
              className="h-10 md:h-12 w-auto brightness-0 invert drop-shadow-[0_0_15px_rgba(14,116,144,0.3)]"
              priority={false}
            />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#0E7490]/50" />
          </div>

          <h2 className="anim d1 font-serif text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-8">
            Twój wieczór zaczyna się{" "}
            <span className="relative inline-block text-[#0E7490]">
              <span className="relative z-10">tutaj</span>
              <span className="absolute -bottom-2 left-0 w-full h-5 bg-[#0E7490]/50 blur-[30px]" />
            </span>
          </h2>

          <p className="anim d2 font-poppins text-white/60 text-sm md:text-base leading-[1.85] mb-12 max-w-lg mx-auto">
            Skontaktuj się z nami i powiedz o swoich planach. Przygotowujemy
            ofertę dopasowaną do Twoich potrzeb — odpowiadamy w 24 godziny.
          </p>

          <div className="anim d3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#0E7490] to-[#0B9AAA] text-white font-poppins text-[0.75rem] font-semibold tracking-[0.08em] uppercase rounded-full hover:shadow-[0_20px_40px_-15px_rgba(14,116,144,0.5)] hover:-translate-y-1.5 transition-all duration-500 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-3">
                Zarezerwuj termin
                <MdArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
            <a
              href="tel:+48000000000"
              className="group inline-flex items-center gap-3 px-8 py-5 text-white font-poppins text-[0.75rem] font-semibold tracking-[0.08em] uppercase rounded-full border border-white/10 backdrop-blur-sm hover:border-[#0E7490]/50 hover:bg-white/5 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/20 transition-all duration-500 w-full sm:w-auto justify-center"
            >
              <MdPhone size={16} className="text-[#0E7490]" />
              Zadzwoń
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1.05);
          }
        }
        .cta-bg-anim {
          animation: slowZoom 20s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
