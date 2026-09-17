"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MdArrowRight, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

interface CTASectionProps {
  data: any;
  settings?: {
    phoneNumber?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}

export default function CTASection({ data, settings }: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (estr) => {
        estr.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim")
              .forEach((el: any) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [data]);

  if (!data) return null;

  const socials = [
    { href: settings?.instagram || "#", icon: FaInstagram },
    { href: settings?.facebook || "#", icon: FaFacebook },
    { href: settings?.tiktok || "#", icon: FaTiktok },
  ];

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[600px] py-24 overflow-hidden bg-black text-white border-y border-white/5"
      >
        <div className="absolute inset-0 z-0 scale-110 animate-slow-pan">
          <img
            src={data.imageCta?.node.sourceUrl || "/hero1.jpg"}
            alt="Background"
            className="object-cover object-center w-full h-full opacity-40"
          />
        </div>

        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/60" />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        <div className="relative z-20 max-w-[1000px] mx-auto text-center px-6 h-full flex flex-col justify-center">
          <div className="anim inline-flex items-center gap-6 justify-center mb-8 opacity-90">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="font-sans text-[0.6rem] font-bold tracking-[0.4em] uppercase text-[#C5A059]">
              Brothers Bartenders
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          <h2 className="anim d1 font-serif text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
            {data.titleCta}
          </h2>

          <p className="anim d2 font-sans text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            {data.descriptionCta}
          </p>

          <div className="anim d3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/kontakt"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C5A059] text-black font-sans text-xs font-bold tracking-[0.15em] uppercase rounded-sm hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto justify-center overflow-hidden shadow-[0_0_30px_-5px_rgba(197,160,89,0.3)]"
            >
              <span className="relative z-10">Zarezerwuj termin</span>
              <MdArrowRight
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine"></div>
            </Link>
            <a
              href={`tel:${settings?.phoneNumber || ""}`}
              className="group inline-flex items-center gap-3 px-8 py-4 text-white font-sans text-xs font-bold tracking-[0.15em] uppercase rounded-sm border border-white/20 backdrop-blur-md hover:border-[#C5A059] hover:bg-white/5 hover:text-[#C5A059] transition-all duration-500 w-full sm:w-auto justify-center"
            >
              <MdPhone size={16} />
              Zadzwoń teraz
            </a>
          </div>

          <div className="anim d4 flex items-center justify-center gap-8 border-t border-white/10 pt-6 mt-2 w-full">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-1"
              >
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 transition-all duration-300">
                  <s.icon
                    size={16}
                    className="text-white/70 group-hover:text-[#C5A059] transition-colors"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slowPan {
          0%,
          100% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-1%, -1%);
          }
        }
        .animate-slow-pan {
          animation: slowPan 25s ease-in-out infinite;
        }
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .group-hover\\:animate-shine:hover {
          animation: shine 1s;
        }
      `}</style>
    </>
  );
}
