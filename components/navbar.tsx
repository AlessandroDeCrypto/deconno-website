import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-950 md:text-base"
        >
          De Conno Limousinen Service
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+41797293699"
            className="hidden rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 md:inline-flex"
          >
            Call Now
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Request a Ride
          </Link>
        </div>
      </div>
    </header>
  );
}