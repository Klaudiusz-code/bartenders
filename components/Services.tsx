"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Barmani na wesela",
    desc: "Jeżeli zastanawiacie się czym zaskoczyć gości podczas Swojego przyjęcia weselnego, lub jak sprawić by nie zapomnieli go przez długi czas — zaproście nas. Mamy dla Was mnóstwo przepysznych, ciekawych, kolorowych, orzeźwiających koktajli cieszących się wielkim zainteresowaniem na każdym przyjęciu.",
    img: "https://picsum.photos/seed/wedding-cocktail-bar/800/600.jpg",
    tag: "Wesela",
  },
  {
    title: "Imprezy firmowe",
    desc: "Bankiety, konferencje czy spotkania integracyjne niewątpliwie wymagają szczególnej oprawy. Pragniemy wyjść naprzeciw oczekiwaniom i sprawić, by każdy event był udany i budził zachwyt wszystkich gości. Dostosowujemy się do indywidualnych potrzeb każdego klienta.",
    img: "https://picsum.photos/seed/corporate-event-mixology/800/600.jpg",
    tag: "Firmy",
  },
  {
    title: "Pokazy barmańskie",
    desc: "Latające w powietrzu butelki i tworzące się przy tym koktajle to wyjątkowe widowisko, które na pewno zaskoczy i zyska uwagę gości, którzy jeszcze przez długi czas będą pod wrażeniem tego co widzieli. Przekonajcie się na własne oczy!",
    img: "https://picsum.photos/seed/flair-bartending-show/800/600.jpg",
    tag: "Pokazy",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".anim, .anim-scale").forEach((el) => el.classList.add("visible"));
          ob.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="oferta" ref={ref} className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#C9A84C]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="anim inline-block text-[0.6rem] font-bold tracking-[0.35em] uppercase text-[#C9A84C]/60 mb-6">Co możemy dla Ciebie zrobić</span>
          <h2 className="anim d1 font-serif text-3xl md:text-4xl lg:text-[2.8rem] font-bold leading-[1.15]">
            Nasza <span className="bg-gradient-to-r from-[#E0C068] via-[#C9A84C] to-[#B8943F] bg-clip-text text-transparent">oferta</span>
          </h2>
          <div className="anim d2 w-12 h-px bg-gradient-to-r from-[#C9A84C]/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div key={s.title} className={`anim-scale d${i + 1} service-card group rounded-lg border border-[#1A1A1A] bg-[#0A0A0A]`}>
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover brightness-[0.55] group-hover:brightness-[0.75] transition-all duration-700" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[0.55rem] font-bold tracking-[0.2em] uppercase text-[#C9A84C] bg-[#050505]/70 backdrop-blur-md border border-[#C9A84C]/20 rounded-full px-3.5 py-1.5">{s.tag}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-serif text-xl md:text-[1.3rem] font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">{s.title}</h3>
                <p className="text-[#555] text-[0.82rem] leading-[1.8]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}