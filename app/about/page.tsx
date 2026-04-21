import { SectionTitle } from "@/components/section-title";

export const metadata = {
  title: "About",
  description:
    "De Conno Limousinen Service is a premium chauffeur and transport company serving Zurich Airport, Zurich City, and destinations across Switzerland.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="About De Conno Limousinen Service"
        title="Premium transportation with local presence and fast availability"
        text="De Conno Limousinen Service is a Swiss transport and chauffeur service focused on reliability, discretion, and a high standard of customer care."
      />

      <div className="mt-10 space-y-6 text-lg leading-8 text-neutral-700">
        <p>
          Our operational focus is Zurich Airport and Zurich City, with vehicles ready at key locations for quick dispatch and short-notice travel requests.
        </p>
        <p>
          We specialize in airport pickups, city transfers, and direct journeys across Switzerland to some of the country’s most popular destinations, including Lucerne, Interlaken, Grindelwald, and Lauterbrunnen.
        </p>
        <p>
          Whether serving private visitors, families, or business travelers, our goal is simple: provide a smooth, punctual, and professional travel experience from the first contact to the final drop-off.
        </p>
      </div>
    </section>
  );
}
