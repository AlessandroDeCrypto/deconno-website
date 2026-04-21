import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:px-8 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">De Conno Limousinen Service</h3>
          <p className="mt-3 max-w-sm leading-7 text-neutral-700">
            Premium Zurich Airport transfers, Zurich city rides, and private transport across Switzerland.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Main Services</h4>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>
              <Link href="/zurich-airport-transfer" className="hover:text-neutral-950">
                Zurich Airport Transfer
              </Link>
            </li>
            <li>
              <Link href="/zurich-city-transfer" className="hover:text-neutral-950">
                Zurich City Transfer
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-neutral-950">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/fleet" className="hover:text-neutral-950">
                Fleet
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Popular Routes</h4>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>
              <Link href="/zurich-airport-to-lucerne" className="hover:text-neutral-950">
                Zurich Airport to Lucerne
              </Link>
            </li>
            <li>
              <Link href="/zurich-airport-to-interlaken" className="hover:text-neutral-950">
                Zurich Airport to Interlaken
              </Link>
            </li>
            <li>
              <Link href="/zurich-airport-to-grindelwald" className="hover:text-neutral-950">
                Zurich Airport to Grindelwald
              </Link>
            </li>
            <li>
              <Link href="/zurich-airport-to-lauterbrunnen" className="hover:text-neutral-950">
                Zurich Airport to Lauterbrunnen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              <Link href="/contact" className="font-medium text-neutral-950">
                Request your transfer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}