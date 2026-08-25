import Image from "next/image";
import Link from "next/link";

export default function ONas() {
  return (
    <>
      {/* === PAGE HERO === */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="orb orb-copper w-[500px] h-[500px] -top-60 -right-40 opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="section-label anim-fade-up">O nas</span>
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold leading-[1.05] anim-fade-up delay-100">
              Dwie pasje,{" "}
              <span className="text-[#D97706]">jeden cel</span>
            </h1>
            <p className="section-desc mt-6 anim-fade-up delay-200">
              Brothers Bartenders to historia dwóch ludzi, których drogi
              skrzyżowały się za barem — i od tej pory idą razem,
              tworząc barmańską magię.
            </p>
          </div>
        </div>
      </section>

      {/* === HISTORIA === */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Zdjęcie */}
            <div className="anim-slide-left delay-200">
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/brothers-bartending/800/1000.jpg"
                    alt="Brothers Bartenders w akcji"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Dekoracyjny element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#D97706]/30 rounded-xl -z-10" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#D97706]/10 rounded-lg -z-10" />
              </div>
            </div>

            {/* Tekst */}
            <div className="anim-slide-right delay-300">
              <span className="section-label">Nasza historia</span>
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
                Od pierwszego shakera do <span className="text-[#D97706]">światowej sceny</span>
              </h2>
              <div className="space-y-4 text-[#A8A29E] leading-relaxed">
                <p>
                  Wszystko zaczęło się w małym barze w centrum Warszawy.
                  Jeden z nas właśnie kończył szkolenie, drugi miał już
                  za sobą pierwsze zawody. Krótkie &quot;hej, pomogę ci z tą
                  techniką&quot; przerodziło się w partnerstwo, które trwa do dziś.
                </p>
                <p>
                  Od tamtej pory przeszkoliliśmy się u najlepszych barmenów
                  w Londynie, Nowym Jorku i Tokio. Uczestniczyliśmy
                  w międzynarodowych konkursach, prowadziliśmy masterclassy
                  dla setek osób i obsłużyliśmy ponad 500 eventów.
                </p>
                <p>
                  Dziś Brothers Bartenders to zespół, który łączy
                  techniczną perfekcję z artystyczną wizją. Każde
                  zlecenie traktujemy jak nowy projekt — od konsultacji
                  po ostatni wylany drink.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/kontakt" className="btn-gold">
                  <span>Poznaj nas osobiście</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FILOZOFIA === */}
      <section className="relative py-20 px-6 bg-[#1C1917]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 page-enter">
            <span className="section-label">Filozofia</span>
            <h2 className="section-title">
              W co wierzymy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Precyzja",
                desc: "Każdy mililitr ma znaczenie. Każdy ruch jest przemyślany. Precyzja to fundament, na którym budujemy show.",
              },
              {
                num: "02",
                title: "Storytelling",
                desc: "Koktajl bez historii to tylko płyn. My opowiadamy historie przez smaki, aromaty i prezentację.",
              },
              {
                num: "03",
                title: "Doskonałość",
                desc: "Nie zadowalamy się &quot;dobrze&quot;. Celujemy w moment, w którym gość mówi &quot;wow&quot; — i to jest nasza definicja sukcesu.",
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className="relative pl-6 border-l-2 border-[#44403C] hover:border-[#D97706] transition-colors duration-500 page-enter"
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                <span className="font-[var(--font-playfair)] text-4xl font-bold text-[#44403C] absolute -top-2 -left-4">
                  {item.num}
                </span>
                <h3 className="font-[var(--font-playfair)] text-xl font-bold mb-3 mt-2">
                  {item.title}
                </h3>
                <p className="text-[#A8A29E] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STATYSTYKI === */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Eventów" },
              { value: "50K+", label: "Koktajli" },
              { value: "8", label: "Lat doświadczenia" },
              { value: "12", label: "Nagród" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center page-enter"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-[#D97706] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#A8A29E] text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}