import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: "Wesela i przyjęcia okolicznościowe",
    desc: "Kompleksowa obsługa barmańska najważniejszego dnia w Waszym życiu. Autorskie menu dopasowane do stylu wesela, otwarty bar przez całą noc i show, który zapadnie gościom w pamięć.",
    tags: ["Autorskie menu", "Open bar", "Flair show"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Eventy firmowe",
    desc: "Imprezy integracyjne, bankiety, launchy produktów. Tworzymy barmańskie strefy, które stają się punktem centralnym każdego wydarzenia korporacyjnego.",
    tags: ["Strefa koktajlowa", "Branding", "Obsługa VIP"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Imprezy prywatne",
    desc: "Urodziny, rocznice, domówki na najwyższym poziomie. Wnosimy profesjonalny bar do Twojego salonu, ogrodu lub wynajętej przestrzeni.",
    tags: ["Dojazd na miejsce", "Elastyczne menu", "Kameralny klimat"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Masterclassy barmanskie",
    desc: "Interaktywne warsztaty, podczas których uczestnicy uczą się mieszać, shakować i serwować koktajle jak profesjonaliści. Idealne na team building.",
    tags: ["Warsztaty", "Materiały", "Certyfikat"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Konsultacje drink menu",
    desc: "Projektujemy karty koktajlowe dla barów, restauracji i hoteli. Od koncepcji smakowej po prezentację wizualną i szkolenie zespołu.",
    tags: ["Projekt menu", "Szkolenia", "Wizerunek"],
  },
];

export default function Oferta() {
  return (
    <>
      {/* === PAGE HERO === */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="orb orb-gold w-[400px] h-[400px] -top-40 -left-40 opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="section-label anim-fade-up">Oferta</span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold leading-[1.05] anim-fade-up delay-100">
              Menu naszych{" "}
              <span className="text-[#D97706]">usług</span>
            </h1>
            <p className="section-desc mt-6 anim-fade-up delay-200">
              Każda usługa jest dopasowana do Twoich potrzeb. Nie mamy
              sztywnych pakietów — mamy elastyczne rozwiązania, które
              działają.
            </p>
          </div>
        </div>
      </section>

      {/* === LISTA USŁUG === */}
      <section className="relative pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="glass-card rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start page-enter"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Ikona */}
                <div className="w-16 h-16 rounded-xl bg-[#D97706]/10 flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>

                {/* Treść */}
                <div className="flex-1">
                  <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A8A29E] text-sm leading-relaxed mb-5 max-w-2xl">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-[#D97706] bg-[#D97706]/10 rounded-full border border-[#D97706]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Link
                    href="/kontakt"
                    className="btn-outline text-sm whitespace-nowrap"
                  >
                    Zapytaj o wycenę
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === JAK PRACUJEMY === */}
      <section className="relative py-20 px-6 bg-[#1C1917]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 page-enter">
            <span className="section-label">Proces</span>
            <h2 className="section-title">Jak pracujemy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konsultacja", desc: "Poznajemy Twoją wizję, gości i oczekiwania." },
              { step: "02", title: "Projekt", desc: "Tworzymy menu i koncepcję barmańską." },
              { step: "03", title: "Przygotowanie", desc: "Zaopatrujemy się w składniki i sprzęt." },
              { step: "04", title: "Realizacja", desc: "Wjeżdżamy, stawiamy bar i robimy show." },
            ].map((item, i) => (
              <div key={item.step} className="text-center page-enter" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
                <div className="font-[var(--font-playfair)] text-5xl font-bold text-[#44403C] mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#FAFAF9] mb-2">{item.title}</h3>
                <p className="text-[#A8A29E] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="relative py-24 px-6 text-center">
        <div className="orb orb-copper w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

        <div className="relative z-10 page-enter">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold mb-6">
            Gotowy na <span className="text-[#D97706]">niezapomniany</span> wieczór?
          </h2>
          <p className="section-desc mx-auto mb-10">
            Porozmawiajmy o Twoim wydarzeniu. Pierwsza konsultacja
            jest zawsze bezpłatna.
          </p>
          <Link href="/kontakt" className="btn-gold">
            <span>Umów się na rozmowę</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}