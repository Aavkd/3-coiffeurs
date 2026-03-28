import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Services & Tarifs — 3 Coiffeurs Nanterre",
  description:
    "Coupe homme 12 €, coupe enfant 10 €, barbe 5 €. Tarifs affichés et sans surprise chez votre barbershop à Nanterre.",
  alternates: {
    canonical: "/services",
  },
};

const pricingTable = [
  { service: "Coupe homme", price: "12 €" },
  { service: "Coupe enfant (jusqu'à 12 ans)", price: "10 €" },
  { service: "Barbe (tondeuse)", price: "5 €" },
  { service: "Coupe + Barbe", price: "16 €" },
];

const serviceDetails = [
  {
    title: "Coupe Homme",
    price: "12 €",
    description:
      "Nos coiffeurs réalisent toutes les coupes tendance : dégradés, fades (low fade, mid fade, high fade), taper cut, coupe classique, pompadour et bien d'autres. Amenez une photo de référence si vous avez une coupe précise en tête.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Coupe Enfant",
    price: "10 €",
    description:
      "Réservée aux enfants jusqu'à 12 ans. Coupe propre et adaptée, réalisée avec patience. On s'assure que votre enfant repart content.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Barbe",
    price: "5 €",
    description:
      "Taille et mise en forme de barbe à la tondeuse. Contours précis, rendu net. À combiner avec une coupe pour un look complet à 16 €.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        <path d="M12 7V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Coupe + Barbe",
    price: "16 €",
    description:
      "Le combo idéal pour un résultat total. Coupe + taille de barbe en une seule session.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

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

export default function ServicesPage() {
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
                Services
              </li>
            </ol>
          </nav>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-white mb-3">
            Nos services &amp; tarifs
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Chez 3 Coiffeurs, pas de mauvaises surprises. Voici nos prestations
            et leurs tarifs — affichés et respectés.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Pricing table */}
        <section
          className="py-16 bg-creme"
          aria-labelledby="pricing-table-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="pricing-table-heading"
              className="font-serif font-bold text-2xl sm:text-3xl text-anthracite mb-8 text-center"
            >
              Tableau tarifaire
            </h2>

            <div className="overflow-hidden border border-or/20 rounded-sm shadow-sm">
              <table className="w-full text-left" aria-label="Tarifs des prestations">
                <thead>
                  <tr className="bg-anthracite text-white text-sm uppercase tracking-wider">
                    <th scope="col" className="px-6 py-4 font-semibold">
                      Prestation
                    </th>
                    <th scope="col" className="px-6 py-4 font-semibold text-right">
                      Tarif
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-or/10 bg-white">
                  {pricingTable.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-creme/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-anthracite font-medium">
                        {row.service}
                      </td>
                      <td className="px-6 py-4 text-right font-serif font-bold text-bordeaux text-lg">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-gray-400 text-center italic">
              Tarifs révisés — Mars 2026. Nous consulter pour toute prestation spécifique.
            </p>
          </div>
        </section>

        {/* Service detail cards */}
        <section
          className="py-16 bg-white"
          aria-labelledby="service-details-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="service-details-heading"
              className="font-serif font-bold text-2xl sm:text-3xl text-anthracite mb-10 text-center"
            >
              Nos prestations en détail
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceDetails.map((svc) => (
                <article
                  key={svc.title}
                  className="border border-or/30 rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-bordeaux shrink-0 mt-0.5">
                      {svc.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-anthracite">
                        {svc.title}
                      </h3>
                      <p className="font-serif font-bold text-bordeaux text-2xl mt-1">
                        {svc.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {svc.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-bordeaux" aria-label="Réservation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
              Prêt à réserver ?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Prenez rendez-vous en ligne — réponse rapide par email ou téléphone.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-white text-bordeaux font-semibold px-8 py-4 rounded-sm hover:bg-creme transition-colors duration-200 group"
            >
              Réserver maintenant
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
