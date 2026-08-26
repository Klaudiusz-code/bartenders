"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaGlassMartiniAlt,
  FaStar,
  FaUserFriends,
  FaMagic,
  FaWineGlassAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import Topbar from "@/components/TopBar";

const includes = [
  {
    icon: FaGlassMartiniAlt,
    title: "Autorskie koktajle",
    desc: "Menu dopasowane do Waszych preferencji, palety kolorów i tematu wesela.",
  },
  {
    icon: FaStar,
    title: "Dekoracje drinków",
    desc: "Jadalne kwiaty, świeże owoce, dym, lód kruchy — każdy koktajl to małe dzieło sztuki.",
  },
  {
    icon: FaUserFriends,
    title: "Obsługa gości",
    desc: "Profesjonalna i uśmiechnięta ekipa, która dba o gości i rozkręca imprezę.",
  },
  {
    icon: FaMagic,
    title: "Pokazy barmańskie",
    desc: "Dodatkowa atrakcja — krótki flair show na otwarcie zabawy lub w trakcie wieczoru.",
  },
  {
    icon: FaWineGlassAlt,
    title: "Szkło i wyposażenie",
    desc: "Przywozimy wszystko ze sobą — eleganckie szkło, sprzęt, składniki i oświetlenie baru.",
  },
  {
    icon: FaClipboardCheck,
    title: "Konsultacja menu",
    desc: "Spotykamy się wcześniej, degustujemy wybrane smaki i planujemy każdy detal.",
  },
];

const weddingMenu = [
  {
    name: "Ich Pasja",
    ingredients: "Passion fruit, wódka vanilla, prosecco, laska wanilii",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    tag: "Dla Niej",
  },
  {
    name: "Jego Charakter",
    ingredients: "Bourbon, dym z drewna dębowego, angostura, skórka pomarańczy",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    tag: "Dla Niego",
  },
  {
    name: "Wspólna Iskra",
    ingredients: "Tequila, świeży jalapeño, limonka, syrop z agawy, sól",
    img: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=800&auto=format&fit=crop",
    tag: "Pikantny",
  },
  {
    name: "Czyste Zakęczenie",
    ingredients:
      "Wyciśnięty na miejscu sok, świeże owoce, syrop z kwiatu czarnego bzu, woda gazowana",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    tag: "Bezalkoholowy",
  },
];

const faqs = [
  {
    q: "Ile drinków potrzebujemy na wesele?",
    a: "Zazwyczaj liczy się około 4-6 drinków na osobę w ciągu nocy, w zależności od tego, czy są to drinki mocne, czy głównie orzeźwiające. Podczas konsultacji pomagamy dobrać idealną ilość, żeby niczego nie zabrakło.",
  },
  {
    q: "Czy mogę zaproponować własne smaki?",
    a: "Oczywiście! To nasze ulubione wyzwania. Jeśli macie ulubione smaki, wspomnienia z podróży związane z konkretnym drinkiem, chętnie włączymy je do autorskiego menu i nadamy im Wasze imiona.",
  },
  {
    q: "Czy wjeżdżacie w strojach galowych?",
    a: "Tak. Nasz standardowy dress code to eleganckie koszule, kamizelki i akcesoria dopasowane do stylu i kolorystyki Waszego wesela. Dopasowujemy się do dress code'u gości.",
  },
  {
    q: "Kto zapewnia alkohol na przyjęcie?",
    a: "Zazwyczaj alkohol (bazę) zapewnia Para Młoda lub lokal, a my wnosimy składniki premium (soki, syropy, owoce, lód) oraz sprzęt. Wszystko szczegółowo ustalamy przed wydarzeniem, żeby uniknąć niespodzianek.",
  },
  {
    q: "Czy robicie drinki bezalkoholowe?",
    a: "Zdecydowanie tak! Zawsze proponujemy przynajmniej 1-2 autorskie drinki zero-proof, które wyglądają i smakują równie wyjątkowo co te z alkoholem. Dbamy o to, by każdy gość poczuł się wyjątkowo.",
  },
  {
    q: "Na ile przed weselem musimy się spotkać?",
    a: "Najlepiej skontaktować się z nami z 2-3 miesięcznym wyprzedzeniem. Spotkanie na degustację i ostateczne uzgodnienie menu planujemy zazwyczaj na 3-4 tygodnie przed wielkim dniem.",
  },
];

export default function Wesela() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".anim, .anim-left, .anim-right, .anim-scale")
              .forEach((el) => el.classList.add("visible"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-observe]").forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-[72px] md:pt-[112px] bg-black">
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop"
            alt="Barmani na wesele"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
            <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-10">
              <span className="font-poppins inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> Oferta
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
                Barmani na <span className="text-[#0E7490]">wesela</span>
              </h1>
              <p className="font-poppins text-white/60 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
                Zaskoczcie gości koktajlami, które zostaną w ich pamięci na
                długo po pierwszym tańcu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WPROWADZENIE Z OBRAZKIEM */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="anim-left order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10 group">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2670&auto=format&fit=crop"
                alt="Koktajle weselne"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="anim font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-6">
              Jeżeli zastanawiacie się czym zaskoczyć gości podczas Swojego
              przyjęcia weselnego, lub jak sprawić by nie zapomnieli go przez
              długi czas —{" "}
              <span className="text-black font-medium">zaproście nas.</span>
            </p>
            <p className="anim d1 font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-6">
              Mamy dla Was mnóstwo przepysznych, ciekawych, kolorowych,
              orzeźwiających koktajli. Każde menu tworzymy indywidualnie —
              dopasowujemy smaki, kolory i nazwy drinków do Waszego stylu.
            </p>
            <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] leading-[1.85]">
              Od klasyków po autorskie kompozycje — gwarantujemy, że bar będzie
              jednym z najciekawszych punktów Waszego przyjęcia.
            </p>
          </div>
        </div>
      </section>

      {/* CO ZAWIERA USŁUGA */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50/50"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Co zawiera usługa
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-bold leading-[1.05] text-black tracking-tight">
              Kompleksowa <span className="text-[#0E7490]">obsługa</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {includes.map((item, i) => (
              <div
                key={item.title}
                className={`anim-scale d${Math.min(i + 1, 6)} bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 group hover:border-[#0E7490]/20 hover:shadow-xl hover:shadow-[#0E7490]/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                <div className="w-12 h-12 rounded-xl bg-[#0E7490]/10 flex items-center justify-center mb-5 group-hover:bg-[#0E7490] transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-[#0E7490] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-black mb-3 leading-tight relative z-10">
                  {item.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm leading-[1.8] relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRZYKŁADOWE MENU WESELNE */}
      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(14,116,144,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Inspiracje
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-white tracking-tight">
              Przykładowe <span className="text-[#0E7490]">menu weselne</span>
            </h2>
            <p className="anim d2 font-poppins text-white/40 text-sm mt-4 max-w-md mx-auto">
              Nazwy drinków, kolory i smaki zawsze dopasowujemy do Waszej
              historii i palety kolorów wesela.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {weddingMenu.map((drink, i) => (
              <div
                key={drink.name}
                className={`anim-scale d${Math.min(i + 1, 4)} group cursor-pointer rounded-2xl overflow-hidden relative bg-gray-900 border border-white/5 hover:border-[#0E7490]/30 transition-all duration-500 flex flex-col`}
              >
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <Image
                    src={drink.img}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-poppins text-[0.6rem] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-sm text-[#0E7490] px-3 py-1 rounded-full border border-[#0E7490]/20">
                      {drink.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 relative mt-auto">
                  <h3 className="font-serif text-lg font-bold text-white mb-1.5 transition-colors group-hover:text-[#0E7490]">
                    {drink.name}
                  </h3>
                  <p className="font-poppins text-white/40 text-xs leading-relaxed">
                    {drink.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Zarezerwuj barmanów na{" "}
            <span className="text-[#0E7490]">swoje wesele</span>
          </h2>
          <p className="anim d1 font-poppins text-white/50 text-[0.95rem] leading-[1.85] mb-10 max-w-lg mx-auto">
            Napisz do nas — odezwiemy się w ciągu 24 godzin z wstępną propozycją
            menu i wyceną.
          </p>
          <Link
            href="/kontakt"
            className="anim d2 group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#0E7490] to-[#0B9AAA] text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:shadow-2xl hover:shadow-[#0E7490]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Napisz do nas</span>
            <MdArrowOutward
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>

      {/* FAQ - NAPRAWIONE */}
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
              Często zadawane <span className="text-[#0E7490]">pytania</span>
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
