"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { BiChevronDown } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

const GOLD_COLOR = "#C5A059";

const categories = ["Wszystkie", "Wesela", "Eventy firmowe", "Pakiety Extra"];
const photos = [
  {
    src: "/gallery1.jpg",
    cat: "Wesela",
  },
  {
    src: "/gallery1.jpg", // To jest powtórzenie, które powoduje błąd, jeśli key=src
    cat: "Eventy firmowe",
  },
  {
    src: "/gallery6.jpg",
    cat: "Pakiety Extra",
  },
  {
    src: "/gallery2.jpg",
    cat: "Wesela",
  },
  {
    src: "/gallery4.jpg",
    cat: "Wesela",
  },
  {
    src: "/gallery3.jpg",
    cat: "Eventy firmowe",
  },
  {
    src: "/gallery12.jpg",
    cat: "Pakiety Extra",
  },
  {
    src: "/gallery10.jpg",
    cat: "Wesela",
  },
];

const faqs = [
  {
    q: "Czy zdjęcia oddają pełen klimat Waszej pracy?",
    a: "Zdjęcia to tylko ułamek tego, co robimy. Nie widać na nich ruchu, dźwięku kruszonego lodu, muzyki ani interakcji z gośćmi. Staramy się jednak, aby każde portfolio oddawało jakość serwowanych koktajli i nasz profesjonalizm.",
  },
  {
    q: "Co wchodzi w skład realizacji, czego nie widać na zdjęciach?",
    a: "Praca barmana to w 60% przygotowania. W cenie realizacji jest zawsze wcześniejsze zaplanowanie logistyki, sourcing trudno dostępnych składników, przygotowanie świeżych dodatków oraz pełne sprzątanie strefy po zakończeniu imprezy.",
  },
  {
    q: "Czy realizujecie wydarzenia tylko w zamkniętych lokalach?",
    a: "Nie. Duża część naszych realizacji to imprezy w plenerze (namioty weselne, ogrody, tarasy). Posiadamy własne rozwiązania do pracy w trudnych warunkach terenowych.",
  },
];

export default function Realizacje() {
  const [active, setActive] = useState("Wszystkie");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filtered =
    active === "Wszystkie" ? photos : photos.filter((p) => p.cat === active);

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
      { threshold: 0.05 },
    );
    document.querySelectorAll("[data-observe]").forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, [active]);

  return (
    <>
      <style jsx global>{`
        .anim,
        .anim-scale {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease-out;
        }
        .anim-scale {
          transform: scale(0.95);
        }
        .visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .d1 {
          transition-delay: 0.1s;
        }
        .d2 {
          transition-delay: 0.2s;
        }
        .d3 {
          transition-delay: 0.3s;
        }
        .d4 {
          transition-delay: 0.4s;
        }
      `}</style>

      <TopBar />
      <Navbar />

      {/* HERO - Ciemny, płynne przejście */}
      <section className="relative pt-[72px] md:pt-[112px] bg-[#050505]">
        <div className="relative h-[60vh] md:h-[70vh] min-h-[450px]">
          <Image
            src="/hero1.jpg"
            alt="Galeria realizacji"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 md:px-12 xl:px-24">
            <div className="max-w-7xl mx-auto">
              <span className="inline-flex items-center gap-2 font-poppins text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 reveal">
                <span className="w-8 h-px bg-[#C5A059]" /> Portfolio
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] mb-6 reveal">
                Nasze <br />
                <span className="text-[#C5A059] italic font-light">
                  realizacje
                </span>
              </h1>
              <p className="font-poppins text-gray-400 text-base md:text-lg max-w-xl leading-relaxed reveal">
                Zobacz, jak tworzymy klimat. Każde zdjęcie to inna historia,
                jeden wspólny mianownik – jakość, na której nam zależy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA - Ciemne tło */}
      <section className="py-12 md:py-20 px-6 md:px-12 xl:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          {/* Filtry - Ciemny styl */}
          <div className="flex flex-wrap items-center gap-3 mb-12 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-poppins px-6 py-2.5 rounded-full text-[0.7rem] font-bold tracking-[0.15em] uppercase border transition-all duration-300 ${
                  active === cat
                    ? "bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-[#C5A059]/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Siatka zdjęć */}
          <div
            key={active}
            data-observe
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {filtered.map((p, i) => (
              <div
                key={`${p.src}-${i}`} // <--- ZMIANA: key={i} lub unikalny string, żeby nie było duplikatów
                className={`anim-scale d${(i % 4) + 1} aspect-square rounded-xl overflow-hidden group cursor-pointer relative bg-[#0a0a0a] border border-white/5 hover:border-[#C5A059]/30 transition-all duration-500`}
              >
                <img
                  src={p.src}
                  alt={p.cat}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Overlay na hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-5 translate-y-2 group-hover:translate-y-0">
                  <span className="font-poppins text-white text-[0.6rem] md:text-xs font-bold tracking-[0.2em] uppercase bg-[#C5A059]/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[#C5A059]/30">
                    {p.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SEKCJA */}
      <section
        data-observe
        className="py-24 lg:py-32 px-6 md:px-12 xl:px-24 bg-[#050505] relative overflow-hidden border-t border-white/5"
      >
        {/* Dekoracja tła */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.08) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="anim font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Wasze wydarzenie może{" "}
            <span className="text-[#C5A059] italic font-light">
              wyglądać tak
            </span>
          </h2>
          <p className="anim d1 font-poppins text-gray-400 text-base md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">
            Nie musisz martwić się o strefę koktajlową. Przejmiemy to na siebie
            od A do Z – od zakupów po sprzątanie, dbając o każdy detal.
          </p>
          <Link
            href="/kontakt"
            className="anim d2 group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-poppins text-xs font-bold tracking-[0.15em] uppercase rounded-full hover:bg-[#C5A059] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/20"
          >
            <span>Zarezerwuj termin</span>
            <MdArrowOutward
              size={18}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-32 px-6 md:px-12 xl:px-24 bg-[#050505] border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4">
              <span className="w-8 h-px bg-[#C5A059]" /> FAQ
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">
              Pytania o{" "}
              <span className="text-[#C5A059] italic font-light">
                realizacje
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className={`anim d${Math.min(i + 1, 4)}`}>
                <div
                  className={`bg-white/5 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#C5A059]/20 ${
                    openFaq === i ? "bg-[#0a0a0a] border-[#C5A059]/30" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                  >
                    <span className="font-poppins text-gray-200 text-[11px] md:text-base font-medium pr-4 group-hover:text-[#C5A059] transition-colors">
                      {f.q}
                    </span>
                    <BiChevronDown
                      size={24}
                      className={`text-[#C5A059] transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-poppins text-gray-400 tex text-[10px] md:text-base leading-relaxed pb-8 px-6 md:px-8 border-t border-white/5 pt-4">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
