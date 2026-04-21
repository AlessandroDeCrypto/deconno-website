import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { CtaBanner } from "@/components/cta-banner";

const services = [
  {
    title: "Zurich Airport Pickups",
    text: "Reliable meet-and-greet transfers from Zurich Airport with professional drivers and immediate readiness.",
  },
  {
    title: "Zurich City Transfers",
    text: "Comfortable, discreet rides within Zurich for hotels, meetings, and private appointments.",
  },
  {
    title: "Transfers Across Switzerland",
    text: "Private transport from Zurich Airport to Lucerne, Interlaken, Grindelwald, and more.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Premium airport and city transfers"
          text="We focus on Zurich Airport pickups, Zurich City rides, and private transfers across Switzerland."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <SectionTitle
            eyebrow="Destinations"
            title="Popular destinations across Switzerland"
            text="Travel comfortably from Zurich Airport to Switzerland’s most beautiful locations."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            
            {/* LUCERNE */}
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <img
                src="/destination-lucerne.png"
                alt="Lucerne transfer"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold">Lucerne</h3>
                <p className="mt-2 text-neutral-600">
                  A beautiful lakeside city surrounded by mountains.
                </p>
              </div>
            </div>

            {/* INTERLAKEN */}
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <img
                src="/destination-interlaken.png"
                alt="Interlaken transfer"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold">Interlaken</h3>
                <p className="mt-2 text-neutral-600">
                  The gateway to the Swiss Alps and adventure region.
                </p>
              </div>
            </div>

            {/* LAUTERBRUNNEN */}
            <div className="rounded-3xl overflow-hidden shadow-sm">
              <img
                src="/destination-lauterbrunnen.png"
                alt="Lauterbrunnen transfer"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-6">
                <h3 className="text-xl font-semibold">Lauterbrunnen</h3>
                <p className="mt-2 text-neutral-600">
                  Famous valley with waterfalls and alpine scenery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}