import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <div className="rounded-[2rem] bg-neutral-950 px-8 py-12 text-white md:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">Book Now</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
          Need a pickup from Zurich Airport or a direct transfer across Switzerland?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
          Contact De Conno Limousinen Service for premium airport transportation, Zurich city transfers, and comfortable nationwide travel.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
          >
            Request Your Transfer
          </Link>
        </div>
      </div>
    </section>
  );
}
