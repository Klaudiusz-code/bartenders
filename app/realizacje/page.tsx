import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RealizacjeContent from "@/components/RealizacjeContent";
import { Metadata } from "next";

const GET_REALIZACJE_QUERY = `
query GetRealizacjePageWithSettings {
  page(id: "/realizacje/", idType: URI) {
    id
    databaseId
    uri
    seo {
      title
      description
    }
    podstronaRealizacje {
      heroGallery {
        heroGalleryImage {
          node {
            id
            sourceUrl
          }
        }
        realizationsHeroTitle
        realizationsHeroDescription
      }
      ctaRealisation {
        titleRealisationCta
        descriptionRealisationCta
      }
      faqRealisation {
        titleFaq
        questionsFaq {
          pytanie
          odpowiedz
        }
      }
    }
  }

  homePage: page(id: "/", idType: URI) {
    ustawieniaGlobalne {
      logo { node { sourceUrl } }
      email
      phoneNumber
      instagram
      tiktok
      facebook
      location
    }
    sekcjaRealizacje {
      titleRealisation
      realisationGalllery {
              galleryImage{
          nodes{sourceUrl}
        }
      }
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
      query: GET_REALIZACJE_QUERY,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  return json.data;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  return {
    title: data.page.seo.title,
    description: data.page.seo.description,
    openGraph: {
      title: data.page.seo.title,
      description: data.page.seo.description,
    },
  };
}

export default async function Realizacje() {
  const data = await getData();

  const globalSettings = data.homePage.ustawieniaGlobalne;

  const pageData = {
    podstronaRealizacje: data.page.podstronaRealizacje,
    sekcjaRealizacje: data.homePage.sekcjaRealizacje,
    ustawieniaGlobalne: globalSettings, 
  };

  return (
    <>
      <Topbar settings={globalSettings} />
      <Navbar
        logoUrl={globalSettings?.logo?.node.sourceUrl}
        settings={globalSettings}
      />

      <RealizacjeContent data={pageData} />

      <Footer settings={globalSettings} />
    </>
  );
}