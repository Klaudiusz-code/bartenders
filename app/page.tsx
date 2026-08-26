import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import Stats from "@/components/Stats";
import ProcessSteps from "@/components/ProcessSteps";
import GalleryTeaser from "@/components/GalleryTeaser";
import CTASection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <Stats />
      <ProcessSteps />
      <GalleryTeaser />
      <CTASection />
      <Footer />
    </>
  );
}
