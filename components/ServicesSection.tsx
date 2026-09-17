"use client";

import { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const GOLD_COLOR = "#C5A059";

export default function Services({ data }: { data: any }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal")
              .forEach((el: any) => el.classList.add("active"));
            ob.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [data]);

  if (!data) return null;

  const services = data.services || [];

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease-out;
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
        .reveal-delay-3 {
          transition-delay: 0.3s;
        }
      `}</style>

      <section
        id="oferta"
        ref={ref}
        className="relative py-20 md:py-32 px-6 bg-[#FAFAFA]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-black mb-4">
              {data.titleServices}
            </h2>
            <div className="w-12 h-[2px] bg-[#C5A059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <div
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 3)} group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#C5A059]/30 flex flex-col h-full`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image?.node.sourceUrl || "/placeholder.jpg"}
                    alt={service.nameServices}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-8">
                  <h3 className="font-serif text-2xl font-bold text-black mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.nameServices}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow min-h-[60px]">
                    {service.descriptionServices}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.benefits &&
                      service.benefits.map((benefit: any, i: number) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-wide"
                        >
                          <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
                          {benefit.nameBenefit}
                        </li>
                      ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link
                      href="#kontakt"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-[#C5A059] transition-colors group-hover:gap-3"
                    >
                      Zapytaj o termin
                      <MdArrowOutward
                        size={16}
                        className="transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
