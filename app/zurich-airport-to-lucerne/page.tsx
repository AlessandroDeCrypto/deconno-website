import Link from "next/link";

export const metadata = {
  title: "Zurich Airport to Lucerne Transfer",
  description:
    "Private transfer from Zurich Airport to Lucerne with De Conno Limousinen Service. Comfortable, reliable, and direct transportation to Lake Lucerne.",
};

export default function ZurichAirportToLucernePage() {
  return (
    <main className="bg-white text-neutral-950">
      
      {/* HERO */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich Airport to Lucerne
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Private transfer from Zurich Airport to Lucerne
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Travel comfortably from Zurich Airport to Lucerne with a private
            chauffeur service. Avoid waiting times, public transport, and taxi
            queues with a direct and reliable transfer to one of Switzerland’s
            most beautiful destinations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
              Request Transfer
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

      {/* INFO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Zurich Airport to Lucerne transfer made simple
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              The route from Zurich Airport to Lucerne is one of the most popular
              transfers in Switzerland. Whether you are arriving for tourism,
              business, or a hotel stay, a private transfer offers the most
              convenient and comfortable way to reach your destination.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Our service ensures a smooth journey from Zurich Airport directly
              to your hotel, residence, or meeting location in Lucerne without
              delays or unnecessary stops.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Approx. 45–60 minutes travel time",
              "Direct door-to-door transfer",
              "No waiting or delays",
              "Comfortable premium vehicles",
              "Professional chauffeur service",
              "Available for short notice bookings",
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

      {/* WHY PRIVATE TRANSFER */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why choose a private transfer instead of train or taxi?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            While trains from Zurich Airport to Lucerne are available, many
            travelers prefer a private chauffeur service for comfort,
            convenience, and flexibility. A private transfer eliminates the need
            to carry luggage, change trains, or wait for connections.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "No transfers or connections",
                text: "Direct ride from airport to your destination in Lucerne.",
              },
              {
                title: "Comfort and privacy",
                text: "Travel in a clean, quiet, and comfortable vehicle.",
              },
              {
                title: "Time-saving",
                text: "Arrive faster without delays or waiting times.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-8 text-neutral-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS LINKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Other popular routes from Zurich Airport
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            href="/zurich-airport-to-interlaken"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Interlaken
          </Link>

          <Link
            href="/zurich-airport-to-grindelwald"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Grindelwald
          </Link>

          <Link
            href="/zurich-airport-to-lauterbrunnen"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Lauterbrunnen
          </Link>

          <Link
            href="/zurich-airport-transfer"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport Transfer
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Book your transfer from Zurich Airport to Lucerne
          </h2>

          <p className="mt-4 text-neutral-300">
            Contact us for fast booking, premium service, and reliable airport transfers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Request Now
            </Link>

            <a
              href="https://wa.me/41797293699"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}