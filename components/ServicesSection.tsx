"use client";

import { useEffect, useRef } from "react";
import ServiceBlock from "./ServicesBlock";

const services = [
  {
    num: "01",
    title: "Wesela",
    desc: "Tworzymy mobilny bar dopasowany do charakteru Waszego wesela. Autorskie koktajle, profesjonalna obsługa i wszystko, czego potrzeba, aby bar stał się jedną z atrakcji wieczoru.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    tag: "Wesela",
    features: [
      "Autorskie menu koktajlowe",
      "Profesjonalni barmani",
      "Szkło, składniki i sprzęt",
    ],
  },
  {
    num: "02",
    title: "Eventy firmowe",
    desc: "Obsługujemy bankiety, konferencje, imprezy integracyjne i wydarzenia firmowe. Dopasowujemy bar, menu oraz sposób obsługi do charakteru wydarzenia i liczby gości.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    tag: "Eventy firmowe",
    features: [
      "Menu dopasowane do wydarzenia",
      "Profesjonalna obsługa",
      "Obsługa małych i dużych eventów",
    ],
  },
  {
    num: "03",
    title: "Dodatkowe usługi",
    desc: "Chcesz urozmaicić swoje wydarzenie? Możemy rozszerzyć oprawę baru o dodatkowe atrakcje i pakiety dopasowane do charakteru imprezy.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    tag: "Dodatkowe usługi",
    features: [
      "Champagne Tower",
      "Pakiet lemoniad",
      "Pakiet piw kraftowych",
      "Pakiet konesera whisky",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".anim")
              .forEach((el) => el.classList.add("visible"));

            ob.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (ref.current) {
      ob.observe(ref.current);
    }

    return () => ob.disconnect();
  }, []);

  return (
    <section id="oferta" ref={ref} className="bg-[#fafafa] py-24 lg:py-36">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10">
        <div className="mb-16 md:mb-28 max-w-2xl">
          <span className="anim inline-flex items-center gap-2 text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#0E7490] mb-5">
            <span className="w-5 h-px bg-[#0E7490]/30" />
            Oferta
          </span>

          <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-black tracking-tight mb-6">
            Co możemy dla Ciebie <span className="text-[#0E7490]">zrobić</span>
          </h2>

          <p className="anim d2 text-[#888] text-[0.95rem] leading-[1.8]">
            Od kameralnych przyjęć po duże wydarzenia firmowe. Tworzymy oprawę
            baru dopasowaną do charakteru, liczby gości i stylu Twojego
            wydarzenia.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-36">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.num}
              {...service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
