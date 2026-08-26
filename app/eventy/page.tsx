"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MdArrowOutward, MdCheck } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import { FaBolt, FaGlassWhiskey, FaUsers } from "react-icons/fa";
import Topbar from "@/components/TopBar";

const faqs = [
  {
    q: "Ile czasu trwa typowy pokaz barmański?",
    a: "Standardowy pokaz trwa od 15 do 45 minut, w zależności od wybranego pakietu i charakteru imprezy. Możemy go dostosować do harmonogramu eventu.",
  },
  {
    q: "Czy pokaz można połączyć z obsługą baru?",
    a: "Tak, to nasze najczęstsze zapytanie. Robimy spektakularny pokaz na otwarcie imprezy, a potem płynnie przechodzimy w ciągłą pracę za barem.",
  },
  {
    q: "Czy wymagacie specjalnego zabezpieczenia podłogi?",
    a: "Zazwyczaj nie, ale w przypadku bardzo skomplikowanych technik z użyciem ognia, prosimy o wyznaczenie odpowiedniej strefy i poinformowanie obsługi lokalu.",
  },
  {
    q: "Jak radzicie sobie z dużymi imprezami (np. 200+ osób)?",
    a: "Dobieramy odpowiednią liczbę barmanów do ilości gości, aby kolejka ruszała płynnie. Nasza ekipa potrafi obsłużyć nawet bardzo duże imprezy bez spadku jakości drinków.",
  },
  {
    q: "Czy muzyka do pokazu jest po Waszej stronie?",
    a: "Tak, zawsze przygotowujemy własny soundtrack idealnie zgrany w milisekundach z choreografią i rzutami butelek. Wystarczy, że zapewnicie nam głośniki.",
  },
];

const steps = [
  {
    num: "01",
    title: "Brief i wycena",
    desc: "Zostawiasz zapytanie, my omawiamy detal i wrzucamy precyzyjną wycenę.",
  },
  {
    num: "02",
    title: "Projekt menu",
    desc: "Tworzymy listę koktajli i dobieramy sprzęt pod charakter Waszej imprezy.",
  },
  {
    num: "03",
    title: "Akcja",
    desc: "Wjeżdżamy na miejsce, stawiamy bar i bierzemy się do pracy.",
  },
  {
    num: "04",
    title: "Zakończenie",
    desc: "Znikamy bez śladu, zostawiając po sobie tylko czystą przestrzeń.",
  },
];

export default function Eventy() {
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
        <div className="relative h-[55vh] md:h-[65vh] min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
            alt="Impreza firmowa"
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
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
                Imprezy firmowe
                <br className="hidden sm:block" />{" "}
                <span className="text-[#0E7490]">& pokazy barmańskie</span>
              </h1>
              <p className="font-poppins text-white/60 text-sm sm:text-base mt-6 max-w-lg leading-relaxed">
                Budujesz relacje biznesowe? Zorganizuj event, który pracownicy i
                partnerzy będą wspominać przez lata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="anim-left">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 group">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2670&auto=format&fit=crop"
                alt="Obsługa firmowa"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div>
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Imprezy firmowe
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-black mb-8 tracking-tight">
              Eventy, które{" "}
              <span className="text-[#0E7490]">zapadają w pamięć</span>
            </h2>
            <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-6">
              Bankiety, konferencje, czy spotkania integracyjne wymagają
              odpowiedniej oprawy. Zdejmujemy z organizatorów ciężar dbania o
              strefę alkoholową.
            </p>
            <p className="anim d3 font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-10">
              Dostosowujemy się do potrzeb. Tworzymy menu koktajlowe dopasowane
              do charakteru wydarzenia i profilu gości.
            </p>
            <ul className="anim d4 space-y-4">
              {[
                "Bankiety i gale",
                "Konferencje",
                "Spotkania integracyjne",
                "Launch party",
                "Pikniki firmowe",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 font-poppins text-gray-600 text-[0.9rem]"
                >
                  <span className="w-8 h-8 rounded-full border border-[#0E7490]/30 flex items-center justify-center shrink-0 bg-[#0E7490]/5">
                    <MdCheck size={14} className="text-[#0E7490]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50/50"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-6">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Pokazy barmańskie
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-black mb-8 tracking-tight">
              Widowisko, które{" "}
              <span className="text-[#0E7490]">zostawia wrażenie</span>
            </h2>
            <p className="anim d2 font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-6">
              Latające w powietrzu butelki i tworzące się przy tym koktajle to
              wyjątkowe widowisko, które na pewno zaskoczy i zjednoczy gości.
            </p>
            <p className="anim d3 font-poppins text-gray-500 text-[0.95rem] leading-[1.85] mb-10">
              Nasze pokazy łączą technikę flair z choreografią i muzyką — to
              pełnoprawny show, a nie tylko serwowanie drinków.
            </p>
            <ul className="anim d4 space-y-4">
              {[
                "Flair show z choreografią",
                "Interakcja z publicznością",
                "Muzyka dobrane do show",
                "Pokazy od 15 do 45 minut",
                "Płynne przejście w obsługę",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 font-poppins text-gray-600 text-[0.9rem]"
                >
                  <span className="w-8 h-8 rounded-full border border-[#0E7490]/30 flex items-center justify-center shrink-0 bg-[#0E7490]/5">
                    <MdCheck size={14} className="text-[#0E7490]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="anim-right order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 group">
              <Image
                src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2670&auto=format&fit=crop"
                alt="Pokaz barmański"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-black relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(14,116,144,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490] mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Fachu
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold leading-[1.05] text-white tracking-tight">
              Dlaczego profesjonalni{" "}
              <span className="text-[#0E7490]">barmani</span>
            </h2>
            <p className="anim d2 font-poppins text-white/40 text-sm mt-4 max-w-xl mx-auto">
              Event firmowy to nie to samo co domówka. Wymaga innych
              umiejętności i odporności na stres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaBolt,
                title: "Szybkość i ciągłość",
                desc: "Potrafimy serwować setki drinków w ciągu godziny, nie tracąc przy tym na jakości smaku i prezencji koktajlu.",
              },
              {
                icon: FaGlassWhiskey,
                title: "Wiedza ekspercka",
                desc: "Nasi barmani to pasjonaci. Z przyjemnością opowiedzą gościom o originach trunków i technikach miksowania.",
              },
              {
                icon: FaUsers,
                title: "Zarządzanie barem",
                desc: "Samodzielnie kontrolujemy strefę, dbamy o kolejkę, czystość i rotację szkła, żebyście o nic się nie martwili.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`anim-scale d${Math.min(i + 1, 3)} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-[#0E7490]/30 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0E7490]/20 flex items-center justify-center mb-6 group-hover:bg-[#0E7490] transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-[#0E7490] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-gray-50"
      >
        <div className="max-w-[1080px] xl:max-w-[1400px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> Logistyka
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Jak wygląda <span className="text-[#0E7490]">współpraca</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[1px] bg-[#0E7490]/20" />

            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`anim d${Math.min(i + 1, 4)} text-center relative`}
              >
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#0E7490]/20 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-sm">
                  <span className="font-serif text-2xl font-bold text-[#0E7490]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="font-poppins text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
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
            Planujesz <span className="text-[#0E7490]">event firmowy</span>?
          </h2>
          <p className="anim d1 font-poppins text-white/50 text-[0.95rem] leading-[1.85] mb-10 max-w-lg mx-auto">
            Porozmawiajmy o szczegółach. Przygotujemy ofertę szytą na miarę
            Twojego wydarzenia i budżetu.
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

      <section
        data-observe
        className="py-20 lg:py-28 px-5 sm:px-6 xl:px-10 bg-white"
      >
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="anim inline-flex items-center gap-2 font-poppins text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#0E7490]/80 mb-4">
              <span className="w-5 h-px bg-[#0E7490]/40" /> FAQ
            </span>
            <h2 className="anim d1 font-serif text-3xl md:text-[2.8rem] font-bold text-black tracking-tight">
              Pytania o <span className="text-[#0E7490]">eventy</span>
            </h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className={`anim d${Math.min(i + 1, 4)}`}>
                <div
                  className={`bg-gray-50 rounded-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${openFaq === i ? "bg-white border-[#0E7490]/20 shadow-lg shadow-[#0E7490]/5" : ""}`}
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
