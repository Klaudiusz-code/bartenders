"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About({ data }: { data: any }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".reveal")
              .forEach((el: any) => el.classList.add("active"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [data]);

  if (!data) return null;

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 {
          transition-delay: 0.1s;
        }
        .reveal-delay-2 {
          transition-delay: 0.2s;
        }
      `}</style>

      <section
        id="o-nas"
        ref={ref}
        className="relative bg-[#050505] text-white py-12 md:py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="reveal relative aspect-[4/5] lg:aspect-[3/4] w-full rounded-sm overflow-hidden border border-white/5">
            {/* Używam img dla bezpieczeństwa URL, można zamienić na Next/Image z src={data.imageAbout.node.sourceUrl} */}
            <img
              src={data.imageAbout?.node.sourceUrl || "/about.jpg"}
              alt="Brothers Bartenders"
              className="w-full h-full object-cover transition-all duration-1000 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-105"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-[#C5A059]/30 px-6 py-4 rounded-lg shadow-2xl">
              <span className="block text-[#C5A059] text-3xl font-serif font-bold leading-none">
                {data.aboutExperienceNumber}+
              </span>
              <span className="text-gray-300 text-[10px] uppercase tracking-widest font-bold mt-1 block">
                Lat doświadczenia
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="reveal reveal-delay-1 mb-8">
              <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                O nas
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-white leading-[1.1]">
                {data.titleAbout}
              </h2>
            </div>

            <div className="space-y-4 text-gray-400 text-sm md:text-lg leading-relaxed reveal reveal-delay-2">
              <p>{data.aboutAkapit1}</p>
              <p>{data.aboutAkapit2}</p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 reveal reveal-delay-2">
              <div className="flex flex-wrap gap-4 text-[9px] md:text-sm font-bold uppercase tracking-widest text-gray-500">
                {data.aboutFeatures &&
                  data.aboutFeatures.map((feat: any, i: number) => (
                    <span key={i} className={i > 0 ? "ml-2" : ""}>
                      {i > 0 && <span className="text-white/20 mx-2">/</span>}
                      <span className="text-[#C5A059]">
                        {feat.nameFeatures}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
