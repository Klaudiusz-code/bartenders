"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";

// Zmieniliśmy złoty na bardziej stonowany, elegancki odcień: #C5A059
const GOLD_COLOR = "#C5A059";

const slides = [
  {
    img: "hero1.jpg",
    title: "Brothers Bartenders",
    description:
      "Elegancja, smak i show. Organizujemy mobilne bary koktajlowe, które definiują styl każdego wielkiego wydarzenia.",
    cta: { label: "Sprawdź ofertę", href: "#oferta" },
  },
  {
    img: "gallery8.jpg",
    title: "Smak, który łączy ludzi",
    description:
      "Barmańskie doświadczenie na najwyższym poziomie. Autorskie menu i show, które na długo zapada w pamięć.",
    cta: { label: "Zobacz realizacje", href: "#realizacje" },
  },
  {
    img: "gallery5.jpg",
    title: "Koktajle jak sztuka",
    description:
      "Ogień, dym i techniczna perfekcja. Drinki, które zachwycają wizualnie i wybuchają smakiem.",
    cta: { label: "Poznaj nas", href: "#o-nas" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    if (!textVisible) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setTextVisible(true);
    }, 500);
  };

  const prevSlide = () => {
    if (!textVisible) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setTextVisible(true);
    }, 600);
  };

  const handleDotClick = (index: number) => {
    if (current === index || !textVisible) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setTextVisible(true);
    }, 700);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[12000ms] ease-linear ${
              index === current ? "scale-105" : "scale-100"
            }`}
            style={{ objectPosition: "center 25%" }}
          />
        </div>
      ))}

      {/* Gradients - dostosowane do płynnego przejścia w About */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-black/40 to-black/60" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/80 via-transparent to-transparent" />

      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/10 backdrop-blur-[2px] text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-500 flex items-center justify-center group opacity-0 md:opacity-100"
        aria-label="Poprzedni slajd"
      >
        <MdChevronLeft
          size={28}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/10 backdrop-blur-[2px] text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-500 flex items-center justify-center group opacity-0 md:opacity-100"
        aria-label="Następny slajd"
      >
        <MdChevronRight
          size={28}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

      <div className="absolute left-0 right-0 z-10 bottom-[15%] md:bottom-[20%] px-6 xl:px-[140px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[700px] md:max-w-[800px]">
            <h1
              className="text-white font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-8 transition-all duration-[1000ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              {slides[current].title}
            </h1>

            <p
              className="font-poppins text-white/70 text-base md:text-lg leading-relaxed mb-10 transition-all duration-[1000ms] delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] border-l-2 pl-6"
              style={{
                borderColor: textVisible ? GOLD_COLOR : "transparent",
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              {slides[current].description}
            </p>

            <div
              className="flex flex-wrap items-center gap-6 transition-all duration-[1000ms] delay-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Link
                href={slides[current].cta.href}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-poppins text-xs md:text-sm font-bold tracking-[0.15em] uppercase rounded-sm hover:bg-[#C5A059] hover:text-white transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">
                  {slides[current].cta.label}
                </span>
                <MdArrowOutward
                  size={16}
                  className="relative z-10 transition-transform group-hover:rotate-45 duration-300"
                />
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/kontakt"
                className="group font-poppins text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 border-b border-white/30 hover:border-[#C5A059] pb-1 text-white/80 hover:text-white"
                style={{
                  borderColor: textVisible
                    ? "rgba(255,255,255,0.3)"
                    : "transparent",
                }}
              >
                Wycena indywidualna
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-[140px] z-20 flex flex-col gap-3 items-end">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === current
                ? "w-12 bg-[#C5A059]"
                : "w-6 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Przejdź do slajdu ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
