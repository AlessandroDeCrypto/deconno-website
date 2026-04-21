import Link from "next/link";

export const metadata = {
  title: "Zurich City Transfer",
  description:
    "Premium Zurich city transfer service by De Conno Limousinen Service. Private chauffeur rides within Zurich for business, hotels, and airport connections.",
};

export default function ZurichCityTransferPage() {
  return (
    <main className="bg-white text-neutral-950">

      {/* HERO */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich City Transfer
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Private chauffeur service for Zurich city transfers
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
            De Conno Limousinen Service offers premium Zurich city transfer
            solutions for business clients, hotel guests, and private travelers.
            Whether you need a short ride within Zurich or a connection to
            Zurich Airport, we provide reliable and comfortable transportation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
              Request Ride
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
              Premium transportation within Zurich City
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Our Zurich city transfer service is designed for clients who want
              a reliable, discreet, and comfortable alternative to taxis or
              public transport. We provide direct transfers between hotels,
              business locations, private addresses, and Zurich Airport.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Whether you are attending meetings, traveling between hotels, or
              heading to Zurich Airport, our chauffeur service ensures a smooth
              and professional experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Hotel to airport transfers",
              "Business meeting transportation",
              "Private rides within Zurich",
              "Comfortable premium vehicles",
              "Discreet and professional service",
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

      {/* WHY */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why choose a private chauffeur in Zurich?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            Zurich is a busy city, and having a reliable chauffeur service makes
            a significant difference in convenience and comfort. Instead of
            waiting for taxis or navigating public transport, you can enjoy
            direct, efficient travel across the city.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Reliable and punctual",
                text: "Always on time for meetings, flights, and appointments.",
              },
              {
                title: "Comfort and privacy",
                text: "Travel in a quiet, clean, and premium environment.",
              },
              {
                title: "Flexible service",
                text: "Adapted to your schedule and personal requirements.",
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
          Related services
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link
            href="/zurich-airport-transfer"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Zurich Airport Transfer
          </Link>

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
            href="/contact"
            className="rounded-3xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1"
          >
            Contact & Booking
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Book your Zurich city transfer now
          </h2>

          <p className="mt-4 text-neutral-300">
            Fast response, premium vehicles, and professional chauffeur service in Zurich.
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