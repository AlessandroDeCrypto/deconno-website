import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/cta-banner";

const services = [
  {
    title: "Zurich Airport Pickups",
    text: "Reliable meet-and-greet transfers from Zurich Airport with professional drivers and immediate readiness for short-notice requests.",
  },
  {
    title: "Zurich City Transfers",
    text: "Comfortable, discreet rides within Zurich for hotels, offices, meetings, shopping, and private appointments.",
  },
  {
    title: "Transfers Across Switzerland",
    text: "Private transport from Zurich Airport or Zurich City to Lucerne, Interlaken, Grindelwald, Lauterbrunnen, and more.",
  },
  {
    title: "Business Chauffeur Service",
    text: "Executive travel for meetings, roadshows, and corporate guests who value punctuality and discretion.",
  },
  {
    title: "Group & Family Travel",
    text: "Spacious vehicles for families, small groups, and travelers with additional luggage.",
  },
  {
    title: "Special Occasions",
    text: "Elegant transport for private events and selected occasions, including weddings on request.",
  },
];

const destinations = ["Zurich", "Lucerne", "Interlaken", "Grindelwald", "Lauterbrunnen"];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionTitle
          eyebrow="Core Services"
          title="Premium airport and city transfers with nationwide coverage"
          text="De Conno Limousinen Service focuses on Zurich Airport pickups, Zurich City transportation, and private transfers to the most requested destinations across Switzerland."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} text={service.text} />
          ))}
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Why Choose De Conno Limousinen Service
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Vehicles ready in Zurich City and Zurich Airport
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
              We are positioned for fast response times and dependable service. Whether you land at Zurich Airport,
              need a city transfer in Zurich, or require a longer ride across Switzerland, our vehicles are ready for
              immediate dispatch, including short-notice requests.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Immediate availability for short-notice bookings",
              "Strong focus on Zurich Airport pickups",
              "Premium vehicles for private and business travel",
              "Transfers to top Swiss destinations",
              "Professional, discreet chauffeurs",
              "Comfortable rides for individuals, families, and groups",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-base font-medium text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionTitle
          eyebrow="Popular Routes"
          title="Travel from Zurich Airport to Switzerland’s most requested destinations"
          text="Private transfers tailored for international visitors, business travelers, families, and guests who prefer comfort over waiting lines or public transport."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {destinations.map((city) => (
            <span
              key={city}
              className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-neutral-950 p-8 text-white">
            <h3 className="text-xl font-semibold">Zurich Airport to Lucerne</h3>
            <p className="mt-3 leading-7 text-neutral-300">
              Direct premium transport for visitors heading to central Switzerland, hotels, and lakefront destinations.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-100 p-8">
            <h3 className="text-xl font-semibold text-neutral-950">Zurich Airport to Interlaken</h3>
            <p className="mt-3 leading-7 text-neutral-700">
              Comfortable long-distance transfer service for sightseeing, holidays, and luxury private travel.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-100 p-8">
            <h3 className="text-xl font-semibold text-neutral-950">Zurich Airport to Grindelwald & Lauterbrunnen</h3>
            <p className="mt-3 leading-7 text-neutral-700">
              Scenic private transfers for mountain travel with room for luggage and flexible pickup coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <SectionTitle
            eyebrow="SEO Landing Copy"
            title="A trusted choice for Zurich Airport transfer and Zurich city chauffeur service"
            text="De Conno Limousinen Service is built around what travelers search for most: Zurich Airport pickup, airport transfer in Kloten, private chauffeur service in Zurich, and direct transport across Switzerland."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <p className="leading-8 text-neutral-700">
              Our service is ideal for travelers arriving at Zurich Airport who need a reliable ride into Zurich City
              or other destinations across Switzerland. We serve private clients, business travelers,
              families, and visitors who expect punctual pickups, a smooth ride, and a premium standard of service.
            </p>
            <p className="leading-8 text-neutral-700">
              Whether you are searching for a Zurich airport taxi alternative, a premium chauffeur from Kloten,
              or a private long-distance transfer to Lucerne, Interlaken, Grindelwald, or Lauterbrunnen,
              De Conno Limousinen Service offers flexible transportation with vehicles positioned for immediate availability.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Request Your Transfer
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
