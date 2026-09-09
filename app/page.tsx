import Topbar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import GalleryTeaser from "@/components/GalleryTeaser";
import CTASection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <CTASection />
      <GalleryTeaser />
      <ContactSection />
      <Footer />
    </>
  );
}
