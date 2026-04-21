import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_40%)]" />
      
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:px-8 lg:grid-cols-2 lg:items-center lg:py-32">
        
        {/* LEFT SIDE */}
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-300">
            Zurich Airport • Zurich City • Switzerland
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
            Premium Zurich Airport pickups and private transfers across Switzerland
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            De Conno Limousinen Service provides reliable airport pickups, city transfers, and long-distance chauffeur service from Zurich Airport and Zurich City to destinations throughout Switzerland.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
            >
              Request a Ride
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="relative z-10">
          <img
            src="/hero.png"
            alt="Zurich Airport chauffeur service"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}