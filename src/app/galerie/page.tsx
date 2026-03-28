import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Galerie — Réalisations 3 Coiffeurs Nanterre",
  description:
    "Fades, dégradés, tapers et coupes classiques. Découvrez les réalisations de votre barbershop à Nanterre.",
  alternates: {
    canonical: "/galerie",
  },
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function GaleriePage() {
  return (
    <>
      <Header />

      {/* Mini hero */}
      <section className="bg-anthracite pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-white/80 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li className="text-white/80" aria-current="page">
                Galerie
              </li>
            </ol>
          </nav>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-white mb-3">
            Nos réalisations
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Fades, dégradés, tapers, coupes classiques… Voici quelques exemples
            de notre travail. Chaque coupe est unique, comme vous.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-creme" aria-label="Réservation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-serif font-bold text-2xl sm:text-3xl text-anthracite mb-4">
              Vous aimez ce que vous voyez ?
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Prenez rendez-vous et bénéficiez du même savoir-faire.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-bordeaux text-white font-semibold px-8 py-4 rounded-sm hover:bg-bordeaux/90 transition-colors duration-200 group"
            >
              Prendre rendez-vous
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
