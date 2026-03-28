import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import GalleryTeaser from "@/components/sections/GalleryTeaser";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "3 Coiffeurs — Barbershop à Nanterre | Barbe & Cheveux",
  description:
    "Salon de coiffure et barbershop à Nanterre (92). Coupes homme à 12 €, barbe à 5 €. Ouvert 7j/7 de 9h à 20h30.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <GalleryTeaser />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
