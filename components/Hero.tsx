"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const slides = [
  {
    img: "/hero1.jpg",
    eyebrow: "Premium Mobile Bar",
    title: "Brothers Bartenders",
    description:
      "Elegancja, smak i show. Organizujemy mobilne bary koktajlowe, które definiują styl każdego wielkiego wydarzenia.",
    cta: { label: "Sprawdź ofertę", href: "/oferta" },
  },
  {
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop",
    eyebrow: "Wesela & Imprezy Firmowe",
    title: "Smak, który łączy ludzi",
    description:
      "Barmańskie doświadczenie na najwyższym poziomie. Autorskie menu i show, które na długo zapada w pamięć.",
    cta: { label: "Zobacz realizacje", href: "/realizacje" },
  },
  {
    img: "/hero1.jpg",
    eyebrow: "Flair & Wyjątkowy Kunszt",
    title: "Koktajle jak sztuka",
    description:
      "Ogień, dym i techniczna perfekcja. Drinki, które zachwycają wizualnie i wybuchają smakiem.",
    cta: { label: "Poznaj nas", href: "/o-nas" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setTextVisible(true);
      }, 500);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handleSlideChange = (index: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setTextVisible(true);
    }, 500);
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current
                ? "opacity-100 z-0 hero-slide-active"
                : "opacity-0 z-[-1]"
            }`}
          >
            <Image
              src={slide.img}
              alt="Brothers Bartenders"
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* ZACIEMNIENIE Z GÓRY - dynamiczne h-[15vh] / h-[22vh] blokuje wchodzenie pod menu na każdym laptopie */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-black/50 to-transparent h-[15vh] md:h-[22vh]" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* TEKST - zoptymalizowane pozycjonowanie */}
        <div className="absolute left-0 right-0 z-10 bottom-[6%] md:bottom-[12%] px-5 sm:px-6 xl:px-10">
          <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
            <div className="max-w-2xl">
              <p
                className="font-poppins text-[#0E7490] text-[0.6rem] md:text-[0.7rem] font-semibold tracking-[0.25em] uppercase mb-3 md:mb-5 transition-all duration-700 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(15px)",
                }}
              >
                <span className="inline-block w-6 md:w-8 h-px bg-[#0E7490]/50 mr-2 md:mr-3 align-middle" />
                {slides[current].eyebrow}
              </p>

              <h1
                className="text-white font-serif font-bold leading-[0.9] tracking-[-0.02em] mb-3 md:mb-5 transition-all duration-700 delay-100 ease-out"
                style={{
                  // ZMNIEJSZONA CZCIONKA: 4.5vw zamiast 6vw, idealnie na małe laptopy
                  fontSize: "clamp(1.8rem, 4.5vw, 5.5rem)",
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {slides[current].title}
              </h1>

              <p
                className="font-poppins text-white/40 text-xs md:text-[0.95rem] leading-[1.8] max-w-md md:max-w-lg mb-4 md:mb-8 transition-all duration-700 delay-200 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {slides[current].description}
              </p>

              <div
                className="flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ease-out"
                style={{
                  opacity: textVisible ? 1 : 0,
                  transform: textVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Link
                  href={slides[current].cta.href}
                  className="group inline-flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-poppins text-[0.65rem] md:text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:bg-[#0E7490] hover:text-white transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(14,116,144,0.4)]"
                >
                  {slides[current].cta.label}
                  <MdArrowOutward
                    size={14}
                    className="transition-transform group-hover:rotate-45 duration-300"
                  />
                </Link>
                <Link
                  href="/kontakt"
                  className="font-poppins text-white/30 hover:text-white/70 text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.08em] uppercase transition-colors duration-300 flex items-center gap-2"
                >
                  Wycena
                  <MdArrowOutward size={12} />
                </Link>
              </div>
            </div>

            {/* DOLNY PASEK UI - zmniejszone marginesy i paddingi, żeby nie rozpychał sekcji */}
            <div className="mt-6 md:mt-10">
              <div className="inline-flex flex-row items-center gap-5 md:gap-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex -space-x-2">
                    {[11, 23, 37, 49].map((seed) => (
                      <div
                        key={seed}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-black/50 overflow-hidden bg-white/10"
                      >
                        <img
                          src={`https://picsum.photos/seed/face-${seed}/80/80.jpg`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <FaStar key={s} size={8} className="text-[#0E7490]" />
                      ))}
                      <span className="text-white/80 text-[0.65rem] font-bold ml-1 font-poppins">
                        5.0
                      </span>
                    </div>
                    <p className="text-white/30 text-[0.55rem] tracking-[0.15em] uppercase font-poppins hidden sm:block">
                      +200 Zadowolonych Clientów
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-6 bg-white/10" />

                <div className="flex items-center gap-3 md:gap-5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className="relative flex items-center justify-center w-6 h-6 md:w-auto md:h-auto"
                      aria-label={`Przejdź do slajdu ${index + 1}`}
                    >
                      <span
                        className={`absolute block w-1 h-1 rounded-full bg-[#0E7490] transition-all duration-500 md:hidden ${
                          index === current
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }`}
                      />
                      <span
                        className={`font-poppins text-[0.65rem] tracking-widest transition-all duration-500 hidden md:block ${
                          index === current
                            ? "text-white font-bold"
                            : "text-white/20 hover:text-white/50 font-medium"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }
        .hero-slide-active {
          animation: kenBurns 8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
