"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaHeart,
  FaBuilding,
  FaHome,
  FaMagic,
  FaGraduationCap,
  FaClipboardList,
  FaGlassMartiniAlt,
  FaCheck,
} from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import Topbar from "@/components/TopBar";

const services = [
  {
    icon: FaHeart,
    title: "Wesela i przyjęcia",
    desc: "Kompleksowa obsługa barmańska najważniejszego dnia. Autorskie menu dopasowane do stylu wesela, otwarty bar i show, który zapadnie w pamięć.",
    tags: ["Autorskie menu", "Open bar", "Flair show", "Elegancki dress code"],
  },
  {
    icon: FaBuilding,
    title: "Eventy firmowe",
    desc: "Imprezy integracyjne, bankiety, launchy produktów. Tworzymy barmańskie strefy, które stają się punktem centralnym wydarzenia.",
    tags: ["Strefa koktajlowa", "Branding", "Obsługa VIP", "Pokazy"],
  },
  {
    icon: FaHome,
    title: "Imprezy prywatne",
    desc: "Urodziny, rocznice, domówki na najwyższym poziomie. Wnosimy profesjonalny bar do Twojego salonu, ogrodu lub na dach.",
    tags: ["Dojazd na miejsce", "Elastyczne menu", "Kameralny klimat"],
  },
  {
    icon: FaMagic,
    title: "Pokazy barmańskie (Flair)",
    desc: "Latające butelki, ogień i choreografia z muzyką. Pełnoprawny show, który zostawia wrażenie na każdym widzu.",
    tags: ["Choreografia", "Interakcja", "15-45 minut"],
  },
  {
    icon: FaGraduationCap,
    title: "Masterclassy barmanskie",
    desc: "Interaktywne warsztaty, podczas których uczestnicy uczą się mieszać, shakować i serwować koktajle jak profesjonaliści.",
    tags: ["Warsztaty praktyczne", "Materiały", "Certyfikat"],
  },
  {
    icon: FaClipboardList,
    title: "Konsultacje drink menu",
    desc: "Projektujemy karty koktajlowe dla barów, restauracji i hoteli. Od koncepcji smakowej po szkolenia zespołu.",
    tags: ["Projekt menu", "Szkolenia", "Cost control"],
  },
];

const sampleMenu = [
  {
    name: "Pornstar Martini",
    tag: "Klasyk",
    ingredients: "Passion fruit, wódka vanilla, prosecco, laska wanilii",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Smoked Old Fashioned",
    tag: "Dym & Ogień",
    ingredients: "Bourbon, angostura, syrop cukrowy, dym z drewna wiśniowego",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Spicy Margarita",
    tag: "Pikantny",
    ingredients: "Tequila, świeży jalapeño, limonka, agawa, sól na brzegu",
    img: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Espresso Martini",
    tag: "Energia",
    ingredients: "Wódka, świeżo zaparowane espresso, likier kawowy",
    img: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Blue Lagoon",
    tag: "Orzeźwiający",
    ingredients: "Wódka, Blue Curaçao, cytryna, sprite, lód kruchy",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aperol Spritz",
    tag: "Włoski klasyk",
    ingredients: "Aperol, prosecco, soda, duża pomarańcza, lód",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  },
];

const faqs = [
  {
    q: "Ile kosztuje obsługa barmańska na wesele/event?",
    a: "Nie tworzymy sztywnych cenników. Każda wycena jest indywidualna i zależy od liczby gości, czasu trwania imprezy, wybranego menu oraz lokalizacji. Skontaktuj się z nami, a przygotujemy darmową wycenę.",
  },
  {
    q: "Ile drinków powinniśmy zaplanować na osobę?",
    a: "Zazwyczaj liczy się około 4-6 drinków na osobę w ciągu nocy, w zależności od tego, czy są to drinki mocne, czy głównie orzeźwiające. Pomagamy dobrać idealne proporcje podczas konsultacji.",
  },
  {
    q: "Czy wjeżdżacie na imprezę w strojach galowych?",
    a: "Tak. Nasz standardowy dress code to eleganckie, czarne koszule, kamizelki i akcesoria dopasowane do stylu i kolorystyki Waszego wesela lub eventy.",
  },
  {
    q: "Czy obsługujecie imprezy poza Warszawą?",
    a: "Tak, jeździmy w całej Polsce. Koszty dojazdu i noclegu (jeśli jest wymagany) są ustalane indywidualnie w zależności od lokalizacji.",
  },
  {
    q: "Czy mogę zaproponować własne smaki do menu?",
    a: "Oczywiście! Uwielbiamy wyzwania. Jeśli macie ulubione smaki, wspomnienia z podróży związane z konkretnym drinkiem – chętnie włączymy je do autorskiego menu.",
  },
  {
    q: "Ile czasu trwa typowy pokaz barmański (flair)?",
    a: "Standardowy pokaz trwa od 15 do 45 minut, w zależności od wybranego pakietu i charakteru imprezy. Najczęściej robimy show na otwarcie imprezy, a potem płynnie przechodzimy w obsługę gości.",
  },
  {
    q: "Czy wymagacie specjalnego zabezpieczenia podłogi?",
    a: "W przypadku standardowej obsługi nie. Jednak przy bardzo skomplikowanych technik z użyciem ognia, prosimy o wyznaczenie odpowiedniej strefy i poinformowanie obsługi lokalu.",
  },
];

export default function Oferta() {
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

      <section className="relative pt-[72px] md:pt-[112px] bg-black">
        <div className="relative h-[55vh] md:h-[65vh] min-h-[450px]">
          <Image
            src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2670&auto=format&fit=crop"
            alt="Barman przygotowujący koktajl"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-20">
            <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto px-5 sm:px-6 xl:px-10">
              <span className="font-poppins inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> Nasze usługi
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95]">
                Menu naszych <span className="text-[#0E7490]">usług</span>
              </h1>
              <p className="font-poppins text-white/50 text-sm sm:text-[0.95rem] leading-[1.85] mt-6 max-w-xl">
                Każda usługa jest dopasowana do Twoich potrzeb. Nie mamy
                sztywnych pakietów — mamy elastyczne rozwiązania, które
                działają.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 md:py-28 lg:py-32 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto space-y-5 md:space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`anim d${Math.min(i + 1, 4)} bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start hover:border-[#0E7490]/20 hover:shadow-xl hover:shadow-[#0E7490]/10 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#0E7490]/10 flex items-center justify-center shrink-0">
                <s.icon size={26} className="text-[#0E7490]" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-black mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-poppins text-gray-400 text-sm leading-[1.85] mb-5 max-w-2xl">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-poppins px-3 py-1 text-[0.7rem] font-semibold text-[#0E7490] bg-[#0E7490]/10 rounded-full border border-[#0E7490]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 mt-auto lg:mt-0 w-full lg:w-auto">
                <Link
                  href="/kontakt"
                  className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:bg-[#0E7490] transition-colors duration-300"
                >
                  Zapytaj{" "}
                  <MdArrowOutward
                    size={14}
                    className="transition-transform group-hover:rotate-45"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-observe
        className="py-20 md:py-28 lg:py-32 px-5 sm:px-6 xl:px-10 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(14,116,144,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
            <div>
              <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
                <span className="w-5 h-px bg-[#0E7490]/40" /> Inspiracje
              </span>
              <h2 className="anim d1 font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.05] text-white tracking-tight">
                Przykładowe <span className="text-[#0E7490]">menu</span>
              </h2>
            </div>
            <p className="anim d2 font-poppins text-white/40 text-sm max-w-md leading-relaxed">
              To tylko wierzchołek góry lodowej. Każde menu tworzymy od zera,
              dopasowując składniki do Waszych preferencji.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {sampleMenu.map((d, i) => (
              <div
                key={d.name}
                className={`anim-scale d${Math.min(i + 1, 4)} group cursor-pointer rounded-2xl overflow-hidden relative bg-gray-900 border border-white/5 hover:border-[#0E7490]/30 transition-all duration-500`}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="font-poppins text-[0.6rem] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-sm text-[#0E7490] px-3 py-1 rounded-full border border-[#0E7490]/20">
                      {d.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="font-serif text-xl font-bold text-white mb-2 transition-colors group-hover:text-[#0E7490]">
                    {d.name}
                  </h3>
                  <p className="font-poppins text-white/40 text-xs leading-relaxed">
                    {d.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 md:py-28 lg:py-32 px-5 sm:px-6 xl:px-10 bg-gray-50/50"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Standard
            </span>
            <h2 className="anim d1 font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.05] text-black tracking-tight">
              Co zawsze <span className="text-[#0E7490]">zawiera usługa</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: FaGlassMartiniAlt,
                title: "Autorskie koktajle",
                desc: "Menu dopasowane do Waszych preferencji i tematu imprezy.",
              },
              {
                icon: FaMagic,
                title: "Dekoracje drinków",
                desc: "Kwiaty, owoce, dym, lód — każdy koktajl to małe dzieło sztuki.",
              },
              {
                icon: FaHeart,
                title: "Profesjonalna obsługa",
                desc: "Uśmiechnięta ekipa, która dba o gości i rozkręca imprezę.",
              },
              {
                icon: FaGlassMartiniAlt,
                title: "Szkło i wyposażenie",
                desc: "Przywozimy wszystko ze sobą — szkło, sprzęt, składniki.",
              },
              {
                icon: FaClipboardList,
                title: "Konsultacja menu",
                desc: "Spotykamy się wcześniej, degustujemy, planujemy i ustawiamy detale.",
              },
              {
                icon: FaBuilding,
                title: "Elastyczność logistyczna",
                desc: "Działamy w domach, ogrodach, na salach i pod namiotami.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`anim-scale d${Math.min(i + 1, 4)} bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 group hover:border-[#0E7490]/20 hover:shadow-xl hover:shadow-[#0E7490]/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-[#0E7490] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                <div className="w-12 h-12 rounded-xl bg-[#0E7490]/10 flex items-center justify-center mb-5 group-hover:bg-[#0E7490] transition-colors duration-300">
                  <item.icon
                    size={20}
                    className="text-[#0E7490] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-black mb-2 leading-tight relative z-10">
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

      <section
        data-observe
        className="py-20 md:py-28 lg:py-32 px-5 sm:px-6 xl:px-10 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(14,116,144,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="anim font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-white mb-6 tracking-tight">
            Gotowy na <span className="text-[#0E7490]">niezapomniany</span>{" "}
            wieczór?
          </h2>
          <p className="anim d1 font-poppins text-white/50 text-sm sm:text-[0.95rem] leading-[1.85] mb-10 max-w-lg mx-auto">
            Porozmawiajmy o Twoim wydarzeniu. Pierwsza konsultacja i wstępna
            koncepcja menu są zawsze bezpłatne.
          </p>
          <Link
            href="/kontakt"
            className="anim d2 group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#0E7490] to-[#0B9AAA] text-white font-poppins text-[0.7rem] font-semibold tracking-[0.1em] uppercase rounded-full hover:shadow-2xl hover:shadow-[#0E7490]/30 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Umów się na rozmowę</span>
            <MdArrowOutward
              size={16}
              className="transition-transform group-hover:rotate-45"
            />
          </Link>
        </div>
      </section>

      <section
        data-observe
        className="py-20 md:py-28 lg:py-32 px-5 sm:px-6 xl:px-10 bg-gray-50"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> FAQ
            </span>
            <h2 className="anim d1 font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Często zadawane <span className="text-[#0E7490]">pytania</span>
            </h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`anim d${Math.min(i + 1, 4)} bg-white rounded-xl border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-md`}
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
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
