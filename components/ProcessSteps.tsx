"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MdMessage,
  MdPhoneInTalk,
  MdEditNote,
  MdLocalBar,
  MdArrowRight,
} from "react-icons/md";

const steps = [
  {
    num: "1",
    title: "Wyślij zapytanie",
    desc: "Opowiedz nam o wydarzeniu — typ, data, liczba gości. Szybki i bezproblemowy formularz kontaktowy.",
    icon: MdMessage,
  },
  {
    num: "2",
    title: "Omawiamy szczegóły",
    desc: "Odzwaniamy w ciągu 24 godzin. Dobieramy idealny styl barowy, menu koktajlowe i logistykę.",
    icon: MdPhoneInTalk,
  },
  {
    num: "3",
    title: "Tworzymy menu",
    desc: "Przygotowujemy spersonalizowane propozycje drinków dopasowane do wizji Twojego wydarzenia.",
    icon: MdEditNote,
  },
  {
    num: "4",
    title: "Dostarczamy show",
    desc: "Przyjeżdżamy ze sprzętem i składnikami. Robimy barmański show, którego goście zapamiętają.",
    icon: MdLocalBar,
  },
];

export default function ProcessSteps() {
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
    <section ref={ref} className="bg-gray-50/50 py-24 lg:py-36 overflow-hidden">
      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-6 xl:px-10">
        <div className="mb-16 md:mb-20 max-w-2xl">
          <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
            <span className="w-5 h-px bg-[#0E7490]/40" />
            Jak to działa?
          </span>
          <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-black tracking-tight">
            Od zapytania do{" "}
            <span className="text-[#0E7490]">niezapomnianego wieczoru</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="anim relative bg-white rounded-2xl p-8 lg:p-10 group border border-gray-100 hover:border-[#0E7490]/20 hover:shadow-xl hover:shadow-[#0E7490]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#0E7490]/10 flex items-center justify-center mb-6 group-hover:bg-[#0E7490] transition-colors duration-300">
                    <s.icon
                      size={22}
                      className="text-[#0E7490] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="font-poppins text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#0E7490]/40">
                    Krok {s.num}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="font-serif text-xl lg:text-[1.5rem] font-bold text-black mb-3 leading-tight tracking-tight">
                    {s.title}
                  </h3>

                  <p className="font-poppins text-gray-400 text-sm leading-[1.8]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="anim d5 mt-16 md:mt-20 text-center">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase hover:bg-[#0E7490] transition-all duration-300 rounded-full hover:shadow-xl hover:shadow-[#0E7490]/20"
          >
            <span>Rozpocznij współpracę</span>
            <MdArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
