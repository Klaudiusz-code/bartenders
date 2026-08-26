"use client";

import { useEffect, useRef } from "react";
import ServiceBlock from "./ServicesBlock";

const services = [
  {
    num: "01",
    title: "Barmani na wesela",
    desc: "Zaskoczcie gości kolorowymi, orzeźwiającymi koktajlami, które cieszą się ogromnym zainteresowaniem na każdym przyjęciu. Każde menu tworzymy indywidualnie.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    tag: "Wesela",
    href: "/wesela",
    features: [
      "Autorskie menu koktajlowe",
      "Garnitur barmański w cenie",
      "Szkło, składniki i sprzęt",
    ],
  },
  {
    num: "2",
    title: "Imprezy firmowe",
    desc: "Bankiety, konferencje czy spotkania integracyjne wymagają szczególnej oprawy. Tworzymy menu dopasowane do profilu gości.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
    tag: "Eventy",
    href: "/eventy",
    features: [
      "Menu dopasowane do branży",
      "Branding koktajli pod firmę",
      "Obsługa od 50 do 2000 gości",
    ],
  },
  {
    num: "3",
    title: "Pokazy barmańskie",
    desc: "Latające w powietrzu butelki i tworzące się przy tym koktajle to wyjątkowe widowisko. Łączymy technikę flair z choreografią.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    tag: "Pokazy",
    href: "/eventy",
    features: [
      "Choreografia do muzyki",
      "Interakcja z publicznością",
      "Show od 15 do 45 minut",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#fafafa] py-24 lg:py-36">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10">
        <div className="mb-16 md:mb-28 max-w-2xl">
          <span className="anim inline-flex items-center gap-2 text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#0E7490] mb-5">
            <span className="w-5 h-px bg-[#0E7490]/30" />
            Oferta
          </span>
          <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-black tracking-tight mb-6">
            Co możemy dla Ciebie <span className="text-[#0E7490]">zrobić</span>
          </h2>
          {/* Dodany subtitle dla głębi i luksusowego odczucia */}
          <p className="anim d2 text-[#888] text-[0.95rem] leading-[1.8]">
            Od kameralnych spotkań po wielkie imprezy plenerowe — dopasowujemy
            nasze usługi do wizji Twojego wydarzenia.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-36">
          {services.map((s, i) => (
            <ServiceBlock key={s.num} {...s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
