"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BiChevronDown } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import Topbar from "@/components/TopBar";

const categories = ["Wszystkie", "Wesela", "Eventy firmowe", "Pokazy"];
const photos = [
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    cat: "Wesela",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    cat: "Eventy firmowe",
  },
  {
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop",
    cat: "Pokazy",
  },
  {
    src: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop",
    cat: "Wesela",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    cat: "Wesela",
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800&auto=format&fit=crop",
    cat: "Eventy firmowe",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    cat: "Pokazy",
  },
  {
    src: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
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
    a: "Praca barmana to w 60% przygotowania. W cenie realizacji jest zawsze wcześniejsze zaplanowanie logistyki, sourcing trudno dostępnych składników, przygotowanie świeżych dodatków (syropy, purée) oraz pełne sprzątanie strefy po zakończeniu imprezy.",
  },
  {
    q: "Czy realizujecie wydarzenia tylko w zamkniętych lokalach?",
    a: "Nie. Duża część naszych realizacji to imprezy w plenerze (namioty weselne, ogrody, tarasy). Posiadamy własne rozwiązania do pracy w trudnych warunkach terenowych, o których informujemy na etapie wyceny.",
  },
  {
    q: "Ile czasu przed eventem musicie mieć dostęp do miejsca?",
    a: "Standardowo potrzebujemy 1,5 do 2 godzin na rozłożenie sprzętu, przygotowanie składników i zaplecza. Jeśli harmonogram jest napięty, zawsze staramy się znaleźć rozwiązanie i wejść wcześniej.",
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
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[72px] md:pt-[112px] bg-black">
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px]">
          <Image
            src="/hero1.jpg"
            alt="Galeria realizacji"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
            <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-10">
              <span className="font-poppins inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> Portfolio
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
                Nasze <span className="text-[#0E7490]">realizacje</span>
              </h1>
              <p className="font-poppins text-white/60 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
                Efekty naszej pracy. Zobacz, jak wygląda strefa koktajlowa, gdy
                zostawisz ją profesjonalistom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white">
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-poppins px-6 py-2.5 rounded-full text-[0.7rem] font-semibold tracking-[0.04em] uppercase border transition-all duration-300 ${
                  active === cat
                    ? "bg-[#0E7490] text-white border-[#0E7490] shadow-lg shadow-[#0E7490]/20"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-[#0E7490]/50 hover:text-[#0E7490]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            key={active}
            data-observe
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {filtered.map((p, i) => (
              <div
                key={p.src}
                className={`anim-scale d${(i % 4) + 1} aspect-square rounded-2xl overflow-hidden group cursor-pointer relative bg-gray-100`}
              >
                <img
                  src={p.src}
                  alt={p.cat}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-5 translate-y-2 group-hover:translate-y-0">
                  <span className="font-poppins text-white text-[0.6rem] md:text-[0.65rem] font-semibold tracking-[0.1em] uppercase bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/20">
                    {p.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-[#0a0a0a] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(14,116,144,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="anim font-serif text-3xl md:text-[2.8rem] font-bold text-white mb-6 tracking-tight">
            Wasze wydarzenie może{" "}
            <span className="text-[#0E7490]">wyglądać tak</span>
          </h2>
          <p className="anim d1 font-poppins text-white/50 text-[0.95rem] leading-[1.85] mb-10 max-w-lg mx-auto">
            Nie musisz martwić się o strefę koktajlową. Przejmiemy to na siebie
            od A do Z od zakupów po sprzątanie.
          </p>
          <Link
            href="/kontakt"
            className="anim d2 group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#0E7490] to-[#0B9AAA] text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:shadow-2xl hover:shadow-[#0E7490]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Zarezerwuj termin</span>
            <MdArrowOutward
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> FAQ
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Pytania o <span className="text-[#0E7490]">realizacje</span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className={`anim d${Math.min(i + 1, 4)}`}>
                <div
                  className={`bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${openFaq === i ? "border-[#0E7490]/20 shadow-lg shadow-[#0E7490]/5" : ""}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-5 sm:p-6 text-left group"
                  >
                    <span className="font-poppins text-black text-sm font-medium pr-4 group-hover:text-[#0E7490] transition-colors">
                      {f.q}
                    </span>
                    <BiChevronDown
                      size={22}
                      className={`text-[#0E7490] transition-transform duration-300 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-poppins text-gray-500 text-sm leading-relaxed pb-6 px-5 sm:px-6">
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
