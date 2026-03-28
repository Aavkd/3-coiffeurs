import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — 3 Coiffeurs",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />

      <section className="bg-anthracite pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white/80" aria-current="page">
                Politique de confidentialité
              </li>
            </ol>
          </nav>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-white">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <main id="main-content" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-10">

            <section aria-labelledby="responsable-heading">
              <h2
                id="responsable-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Responsable du traitement
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                3 Coiffeurs —{" "}
                <span className="text-bordeaux">[NOM_GERANT]</span> — 3 Rue
                Henri Barbusse, 92000 Nanterre —{" "}
                <span className="text-bordeaux">[EMAIL_SALON]</span>
              </p>
            </section>

            <section aria-labelledby="donnees-heading">
              <h2
                id="donnees-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Données collectées
              </h2>
              <p className="text-gray-700 text-sm mb-3">
                Via le formulaire de réservation :
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Date et heure de rendez-vous souhaitées</li>
                <li>Prestation souhaitée</li>
                <li>Message libre (optionnel)</li>
              </ul>
            </section>

            <section aria-labelledby="finalite-heading">
              <h2
                id="finalite-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Finalité du traitement
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Les données collectées sont utilisées <strong>uniquement</strong>{" "}
                pour la prise en charge et la confirmation de votre demande de
                rendez-vous. Elles ne sont ni vendues, ni transmises à des tiers.
              </p>
            </section>

            <section aria-labelledby="duree-heading">
              <h2
                id="duree-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Durée de conservation
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Les données sont conservées pendant <strong>3 mois</strong> à
                compter de la date de rendez-vous, puis supprimées.
              </p>
            </section>

            <section aria-labelledby="droits-heading">
              <h2
                id="droits-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Vos droits (RGPD)
              </h2>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données
                (RGPD — UE 2016/679), vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-bordeaux font-bold shrink-0">·</span>
                  <span>
                    <strong className="text-anthracite">Droit d&apos;accès</strong>{" "}
                    à vos données personnelles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bordeaux font-bold shrink-0">·</span>
                  <span>
                    <strong className="text-anthracite">Droit de rectification</strong>{" "}
                    de données inexactes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bordeaux font-bold shrink-0">·</span>
                  <span>
                    <strong className="text-anthracite">Droit à l&apos;effacement</strong>{" "}
                    de vos données
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-bordeaux font-bold shrink-0">·</span>
                  <span>
                    <strong className="text-anthracite">Droit d&apos;opposition</strong>{" "}
                    au traitement
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 text-sm">
                Pour exercer ces droits, contactez-nous à :{" "}
                <span className="text-bordeaux">[EMAIL_SALON]</span>
              </p>
            </section>

            <section aria-labelledby="cookies-heading">
              <h2
                id="cookies-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Cookies
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ce site utilise des cookies strictement nécessaires au bon
                fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est
                déposé sans votre consentement explicite.
              </p>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
