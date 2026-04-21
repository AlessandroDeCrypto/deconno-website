import Link from "next/link";

export const metadata = {
  title: "Zurich Airport to Grindelwald Transfer",
  description:
    "Private transfer from Zurich Airport to Grindelwald with De Conno Limousinen Service. Comfortable chauffeur service to the Swiss Alps.",
};

export default function ZurichAirportToGrindelwaldPage() {
  return (
    <main className="bg-white text-neutral-950">

      {/* HERO */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich Airport to Grindelwald
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Private transfer from Zurich Airport to Grindelwald
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            Travel from Zurich Airport to Grindelwald with a private chauffeur
            service. Enjoy a comfortable and direct ride into the Swiss Alps,
            avoiding train changes, delays, and crowded transport connections.
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

      {/* INFO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Comfortable transfer from Zurich Airport to Grindelwald
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Grindelwald is one of Switzerland’s most famous alpine
              destinations. A private transfer from Zurich Airport allows you to
              travel directly to your hotel, chalet, or resort without the need
              for train connections or multiple stops.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Our chauffeur service ensures a smooth and relaxing journey into
              the mountains, making your arrival in Grindelwald comfortable and
              stress-free.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Approx. 2.5 hours travel time",
              "Direct door-to-door service",
              "Perfect for ski and holiday travel",
              "Comfortable premium vehicles",
              "Space for luggage and equipment",
              "Available for short-notice bookings",
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

      {/* WHY */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why choose a private transfer to Grindelwald?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            Traveling to Grindelwald by train often requires multiple changes
            and careful planning. A private transfer allows you to relax and
            enjoy the journey while being driven directly to your destination in
            the Alps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Direct mountain access",
                text: "No train changes or complicated routes required.",
              },
              {
                title: "Comfort and privacy",
                text: "Travel in a quiet and premium environment.",
              },
              {
                title: "Ideal for ski equipment",
                text: "Plenty of space for luggage, skis, and bags.",
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

      {/* LINKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Other transfers from Zurich Airport
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            href="/zurich-airport-to-lucerne"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Lucerne
          </Link>

          <Link
            href="/zurich-airport-to-interlaken"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport to Interlaken
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
            Book your transfer from Zurich Airport to Grindelwald
          </h2>

          <p className="mt-4 text-neutral-300">
            Premium chauffeur service for your journey into the Swiss Alps.
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