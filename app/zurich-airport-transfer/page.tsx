import Link from "next/link";

export const metadata = {
  title: "Zurich Airport Transfer",
  description:
    "Premium Zurich Airport transfer service by De Conno Limousinen Service. Reliable airport pickups, private chauffeur rides, Zurich city transfers, and direct transportation across Switzerland.",
};

export default function ZurichAirportTransferPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich Airport Transfer
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Premium Zurich Airport transfer service with reliable private pickups
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            De Conno Limousinen Service offers premium Zurich Airport transfer
            solutions for private travelers, families, and business clients.
            Whether you need a direct pickup from Zurich Airport to Zurich City,
            a hotel transfer, or a long-distance ride across Switzerland, we
            provide punctual, comfortable, and professional service.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
              Request a Transfer
            </Link>

            <a
              href="tel:+41797293699"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              A trusted alternative to a standard Zurich airport taxi
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Our Zurich Airport transfer service is designed for clients who
              want a smoother and more premium experience than a standard taxi
              or public transport connection. We focus on punctuality,
              discretion, clean vehicles, and a professional chauffeur service
              from the airport to your destination.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              We serve Zurich Airport, Zurich City, hotels, private addresses,
              business meetings, and direct long-distance routes across
              Switzerland. Short-notice bookings are welcome subject to
              availability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Zurich Airport meet and greet",
              "Direct transfer to Zurich City",
              "Private chauffeur service",
              "Executive and family travel",
              "Comfortable vehicles with luggage space",
              "Fast response for urgent bookings",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <p className="text-base font-medium text-neutral-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Popular Routes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Popular transfers from Zurich Airport
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            Many of our clients book direct transportation from Zurich Airport
            to key destinations across Switzerland. We provide smooth,
            comfortable travel for arrivals heading to city hotels, mountain
            resorts, business meetings, and private appointments.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link
              href="/zurich-airport-to-lucerne"
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">Zurich Airport to Lucerne</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Comfortable private transfer to one of Switzerland’s most popular lakeside cities.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-interlaken"
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">Zurich Airport to Interlaken</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Direct premium transport to the heart of the Bernese Oberland.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-grindelwald"
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">Zurich Airport to Grindelwald</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Scenic private ride to one of the top alpine destinations in Switzerland.
              </p>
            </Link>

            <Link
              href="/zurich-airport-to-lauterbrunnen"
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">Zurich Airport to Lauterbrunnen</h3>
              <p className="mt-3 leading-7 text-neutral-700">
                Ideal for travelers heading to the valley’s waterfalls and mountain villages.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Service Standards
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Premium airport transportation for private and business clients
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Our Zurich Airport transfer service is suitable for international
              arrivals, business guests, families, and travelers who prefer a
              private and reliable alternative to standard airport transport.
              Every ride is focused on comfort, punctuality, and personal
              service.
            </p>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Whether you arrive for a short business stay in Zurich or continue
              to destinations such as Lucerne, Interlaken, Grindelwald, or
              Lauterbrunnen, De Conno Limousinen Service offers direct,
              stress-free transportation from the airport.
            </p>
          </div>

          <div className="rounded-[2rem] bg-neutral-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Quick Booking
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Need a pickup from Zurich Airport?
            </h3>
            <p className="mt-4 leading-8 text-neutral-300">
              Contact us for fast response, short-notice requests, and private
              transportation across Zurich and Switzerland.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
              >
                Request a Ride
              </Link>

              <a
                href="https://wa.me/41797293699"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}