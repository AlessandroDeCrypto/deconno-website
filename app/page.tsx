import Link from "next/link";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    title: "Zurich Airport Pickups",
    text: "Reliable meet-and-greet transfers directly from Zurich Airport with professional chauffeurs ready at any time.",
  },
  {
    title: "Zurich City Transfers",
    text: "Comfortable and discreet rides within Zurich for business, hotels, and private appointments.",
  },
  {
    title: "Switzerland Transfers",
    text: "Private transfers from Zurich to Lucerne, Interlaken, Grindelwald, Lauterbrunnen and more.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Premium Zurich Airport & Switzerland Transfers"
          text="We specialize in airport pickups, city transfers, and long-distance chauffeur services across Switzerland."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Destinations
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Travel across Switzerland in comfort
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
              From Zurich Airport to the most iconic destinations in Switzerland.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="group flex h-full flex-col overflow-hidden rounded-3xl">
              <img
                src="/destination-lucerne.png"
                alt="Lucerne transfer"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex min-h-[160px] flex-1 flex-col bg-white p-6 text-black">
                <h3 className="text-xl font-semibold">Lucerne</h3>
                <p className="mt-2 text-neutral-600">
                  A charming lakeside city surrounded by mountains.
                </p>
              </div>
            </div>

            <div className="group flex h-full flex-col overflow-hidden rounded-3xl">
              <img
                src="/destination-interlaken.png"
                alt="Interlaken transfer"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex min-h-[160px] flex-1 flex-col bg-white p-6 text-black">
                <h3 className="text-xl font-semibold">Interlaken</h3>
                <p className="mt-2 text-neutral-600">
                  Gateway to the Swiss Alps and adventure region.
                </p>
              </div>
            </div>

            <div className="group flex h-full flex-col overflow-hidden rounded-3xl">
              <img
                src="/destination-lauterbrunnen.png"
                alt="Lauterbrunnen transfer"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="flex min-h-[160px] flex-1 flex-col bg-white p-6 text-black">
                <h3 className="text-xl font-semibold">Lauterbrunnen</h3>
                <p className="mt-2 text-neutral-600">
                  Iconic valley with waterfalls and alpine scenery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/zurich-airport-transfer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich Airport Transfer
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Premium airport pickups and private chauffeur service from Zurich Airport.
              </p>
            </Link>

            <Link
              href="/zurich-city-transfer"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich City Transfer
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Comfortable city rides within Zurich for hotels, business, and private travel.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-lucerne"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich Airport to Lucerne
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Direct private transfer to one of Switzerland’s top lakeside destinations.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-interlaken"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich Airport to Interlaken
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Private transfer into the Bernese Oberland with premium comfort.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-grindelwald"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich Airport to Grindelwald
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Comfortable travel into the Swiss Alps with direct chauffeur service.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-lauterbrunnen"
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold text-white">
                Zurich Airport to Lauterbrunnen
              </h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Scenic private transfer to the famous valley of waterfalls.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Book your Zurich Airport transfer now
          </h2>
          <p className="mt-4 text-neutral-300">
            Fast response, short notice bookings, and premium service guaranteed.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/41797293699"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              WhatsApp
            </a>

            <a
              href="tel:+41797293699"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}