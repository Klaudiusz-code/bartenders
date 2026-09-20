"use client";
import { useEffect, useRef } from "react";
import { MdFormatQuote, MdStar } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Script from "next/script";

export default function Testimonials({ data }: { data: any }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".reveal-test")
              .forEach((el: any) => el.classList.add("active"));
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [data]);

  if (!data || !data.opinie) return null;

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <MdStar
        key={i}
        size={16}
        className={i < rating ? "text-[#C5A059] fill-current" : "text-gray-600"}
      />
    ));
  };

  return (
    <>
      <style jsx global>{`
        .reveal-test {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        .reveal-test.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 {
          transition-delay: 0.1s;
        }
        .delay-2 {
          transition-delay: 0.2s;
        }
        .delay-3 {
          transition-delay: 0.3s;
        }
      `}</style>

      <section
        ref={ref}
        className="relative py-20 md:py-32 px-6 bg-[#050505] text-white overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C5A059]/5 via-[#050505] to-[#050505] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-test">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              {data.titleTestimonial}
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.opinie.map((item: any, index: number) => {
            
              const rating = item.rating || 5;
              const isFeatured = index === 0; 

              return (
                <div
                  key={index}
                  className={`reveal-test delay-${(index % 3) + 1} group relative flex flex-col p-8 rounded-2xl transition-all duration-500 border hover:border-[#C5A059]/50 ${
                    isFeatured
                      ? "bg-white/10 border-[#C5A059]/20 hover:bg-white/15 shadow-lg shadow-[#C5A059]/5"
                      : "bg-white/5 border-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-[#C5A059]">
                      {renderStars(rating)}
                    </div>
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      <FaGoogle size={20} className="fill-current" />
                    </div>
                  </div>

                  <div className="relative flex-grow">
                    <div className="absolute -top-3 -left-2 text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors">
                      <MdFormatQuote size={64} />
                    </div>
                    <p className="text-gray-300 italic font-light leading-relaxed mb-6 text-sm md:text-base relative z-10">
                      "{item.titleItemTestiomonial}"
                    </p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-sm md:text-base uppercase tracking-wider">
                        {item.nameItemTestimonial}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">
                          Opinia zweryfikowana
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {data.linkForGoogle && (
            <div className="mt-16 text-center reveal-test">
              <Link
                href={data.linkForGoogle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 rounded-sm font-sans text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase group"
              >
                <span>Zobacz wszystkie opinie na Google</span>
                <MdStar
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
              </Link>
            </div>
          )}
          <div className="mt-24 reveal-test">
            <div className="text-center mb-8">
              <span className="text-xs text-gray-500 uppercase tracking-[0.2em]">
                Więcej opinii na portalach
              </span>
            </div>
            <div
              style={{
                width: "1000px",
                maxWidth: "100%",
                margin: "0 auto",
                borderRadius: "8px",
                boxShadow: "0 1px 6px #B8C5D366",
                overflow: "hidden",
              }}
              className="wzk-widget iframe-height"
              data-wzk-widget-type="type1"
              data-wzk-notice="14589"
            >
              <div
                className="wzk-widget-footer"
                style={{
                  backgroundColor: "#F5F6FA",
                  textAlign: "center",
                  padding: "16px",
                  fontSize: "12px",
                  lineHeight: "12px",
                }}
              >
                <a
                  className="wzk-accent-color"
                  title="Brothers-Bartenders"
                  href="https://www.weselezklasa.pl/ogloszenia-weselne/profesjonalna-obsluga-barmanska,14589/#opinie"
                  rel="nofollow"
                  target="_blank"
                  style={{
                    color: "currentColor",
                    textDecoration: "none",
                  }}
                >
                  Brothers-Bartenders
                </a>

                <img
                  style={{
                    margin: "8px auto 0",
                    display: "block",
                  }}
                  src="https://widgets.4wzk.pl/dist/img/footer-logo.svg"
                  alt="Wesele z klasą"
                />
              </div>
            </div>

            <Script
              src="https://widgets.4wzk.pl/dist/js/widget.js"
              strategy="afterInteractive"
            />
          </div>

        </div>
      </section>
    </>
  );
}
