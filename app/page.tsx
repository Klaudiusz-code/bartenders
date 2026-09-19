
import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import CTASection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";

const GET_HOMEPAGE_QUERY = `
query GetHomePage {
  page(id: "/", idType: URI) {
    id
    seo {
      title
      description
    }
    ustawieniaGlobalne{
      logo{node{sourceUrl}}
      email
      phoneNumber
      instagram
      tiktok
      facebook
      location
    }
    sekcjaHero {
      heroSliders {
        heroSliderTitle
        heroSliderDescription
        heroSliderImage {
          node { sourceUrl }
        }
      }
    }
    sekcjaONas {
      titleAbout
      aboutAkapit1
      aboutAkapit2
      aboutExperienceNumber
      imageAbout { node { sourceUrl } }
      aboutFeatures { nameFeatures }
    }
    sekcjaOferta {
      titleServices
      services {
        image { node { sourceUrl } }
        nameServices
        descriptionServices
        benefits { nameBenefit }
      }
    }
    sekcjaCta {
      imageCta { node { sourceUrl } }
      titleCta
      descriptionCta
    }
     sekcjaRealizacje {
      titleRealisation
      realisationGalllery {
			  galleryImage{
          nodes{sourceUrl}
        }
      }
    }
    sekcjaOpinie {
      titleTestimonial
      linkForGoogle
      opinie {
        titleItemTestiomonial
        nameItemTestimonial
      }
    }
    sekcjaKontakt {
      contactTitle
      contactDescription
      descriptionExperience
      eventTypes { nameParty }
    }
  }
}
`;

async function getData() {
  const res = await fetch("https://brothers-bartenders.pl/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 }, 
    body: JSON.stringify({
      query: GET_HOMEPAGE_QUERY,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  return json.data;
}

export async function generateMetadata() {
  const data = await getData();
  const page = data.page;
  const globalSettings = page.ustawieniaGlobalne;

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: [
        {
          url: globalSettings?.logo?.node.sourceUrl || "/logo.png",
        },
      ],
    },
  };
}

export default async function Home() {
  const data = await getData();
  const { page } = data;

  const globalSettings = page.ustawieniaGlobalne;

  const galleryItems: any[] = page.sekcjaRealizacje.realisationGalllery.flatMap(
    (item: any) =>
      item.galleryImage.nodes.map((imgNode: any) => ({
        src: imgNode.sourceUrl,
        title: "Realizacja",
        desc: "",
      }))
  );

  return (
    <>
      <main className="bg-[#FAFAFA]">
        <Topbar settings={globalSettings} />
        <Navbar
          logoUrl={globalSettings?.logo?.node.sourceUrl}
          settings={globalSettings}
        />

        <Hero data={page.sekcjaHero.heroSliders} />

        <AboutTeaser data={page.sekcjaONas} />

        <ServicesSection data={page.sekcjaOferta} />

        <CTASection data={page.sekcjaCta} settings={globalSettings} />

       <GalleryTeaser
          items={galleryItems}
          limit={6} 
          showHeader={true}
          columns="3"
        />

        <Testimonials data={page.sekcjaOpinie} />

        <ContactSection data={page.sekcjaKontakt} settings={globalSettings} />

        <Footer settings={globalSettings} />
      </main>
    </>
  );
}
