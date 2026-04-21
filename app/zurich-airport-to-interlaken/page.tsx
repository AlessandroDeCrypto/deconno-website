import Link from "next/link";

export const metadata = {
  title: "Zurich Airport to Interlaken Transfer",
  description:
    "Private transfer from Zurich Airport to Interlaken with De Conno Limousinen Service. Direct, comfortable, and reliable chauffeur service to the Bernese Oberland.",
};

export default function ZurichAirportToInterlakenPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich Airport to Interlaken
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Private transfer from Zurich Airport to Interlaken
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Travel from Zurich Airport to Interlaken with a premium private
            transfer service. De Conno Limousinen Service offers direct,
            comfortable, and reliable transportation for travelers heading to
            one of Switzerland’s most popular mountain destinations.
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Direct transfer from Zurich Airport to Interlaken
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Interlaken is one of the most requested destinations for visitors
              arriving at Zurich Airport. A private transfer is the most
              convenient way to travel directly from the airport to your hotel,
              chalet, apartment, or holiday destination in the Interlaken area.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Instead of carrying luggage through train stations or waiting for
              a standard taxi, you can enjoy a comfortable chauffeur-driven ride
              with direct pickup and smooth door-to-door service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Approx. 2 to 2.5 hours travel time",
              "Direct door-to-door transfer",
              "Ideal for tourists and families",
              "Comfortable premium vehicles",
              "Room for luggage",
              "Short-notice bookings available",
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
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why book a private transfer to Interlaken?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            Interlaken is a premium travel destination, and many guests prefer a
            private transfer over public transport for comfort, simplicity, and
            time savings. A private chauffeur service gives you direct travel
            from Zurich Airport without train changes, delays, or crowded
            connections.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Stress-free arrival",
                text: "Direct airport pickup and smooth onward travel to Interlaken.",
              },
              {
                title: "Comfortable long-distance ride",
                text: "Enjoy a quiet, clean, and premium vehicle for the full journey.",
              },
              {
                title: "Ideal for luggage and family travel",
                text: "A better choice for guests with suitcases, children, or extra bags.",
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Related transfers from Zurich Airport
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            href="/zurich-airport-to-lucerne"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Lucerne
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

      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Book your transfer from Zurich Airport to Interlaken
          </h2>

          <p className="mt-4 text-neutral-300">
            Premium airport pickup, direct travel, and reliable service for your
            journey to Interlaken.
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