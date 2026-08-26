"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    text: "Dzięki Państwu nasze wesele nabrało pięknych kolorów i smaku! Goście byli zachwyceni drinkami — pyszne i przyciągające oko. Barmani na weselu to strzał w 10! Jeszcze raz dziękujemy za wspaniałą współpracę.",
    author: "Joanna L.",
    event: "Wesele, Warszawa",
  },
  {
    text: "100% profesjonalizmu, humoru, kolorów i dekoracji pysznych drinków z pomysłem nazwanych. Kto raz podszedł — zawsze wracał. Drinki Minionek i Żabka z dymiącym lodem zachwyciły najmłodszych!",
    author: "Halina Z.",
    event: "Wesele, Kraków",
  },
  {
    text: "Wybór Was to był strzał w 10! Drinki wyglądały świetnie, a smak nie ustępował wyglądowi. Goście byli zachwyceni, o czym świadczyła kolejka. Gorąco polecamy!",
    author: "Monika S.",
    event: "Impreza firmowa, Gdańsk",
  },
];

export default function Testimonials() {
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
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 lg:py-36 px-6 xl:px-10 relative overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,149,108,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto relative">
        <div className="text-center mb-14">
          <span className="anim inline-flex items-center gap-2 justify-center text-[0.52rem] font-bold tracking-[0.3em] uppercase text-[#C8956C] mb-3">
            <span className="w-6 h-px bg-[#C8956C]/30" />
            Opinie klientów
            <span className="w-6 h-px bg-[#C8956C]/30" />
          </span>
          <h2 className="anim d1 font-serif text-3xl md:text-4xl font-bold leading-[1.12] text-[#1A1008]">
            Co mówią <span className="text-[#C8956C]">o nas</span>
          </h2>
          <div className="anim d2 flex items-center justify-center gap-2 mt-3">
            <span
              className="iconify text-[#C8956C]"
              data-icon="mdi:google"
              data-width="14"
            />
            <span className="text-[#B8A99A] text-[0.68rem]">
              Opinie z Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`anim-scale d${i + 1} bg-[#FFFCF8] rounded-2xl border border-[#E8E0D6] p-7 lg:p-8 flex flex-col relative overflow-hidden`}
            >
              <span className="absolute top-4 right-5 font-serif text-6xl text-[#C8956C]/6 leading-none select-none">
                &ldquo;
              </span>
              <div className="flex items-center gap-0.5 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="iconify text-[#C8956C]"
                    data-icon="mdi:star"
                    data-width="13"
                  />
                ))}
              </div>
              <p className="text-[#7A6B5E] text-[0.84rem] leading-[1.85] flex-1 mb-6 relative z-10">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#E8E0D6]">
                <div className="w-10 h-10 rounded-full bg-[#2A1F16] flex items-center justify-center text-[#C8956C] text-[0.72rem] font-bold shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[#1A1008] text-[0.82rem] font-medium">
                    {t.author}
                  </div>
                  <div className="text-[#B8A99A] text-[0.66rem]">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
