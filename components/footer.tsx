import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:px-8 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">De Conno Limousinen Service</h3>
          <p className="mt-3 max-w-sm leading-7 text-neutral-700">
            Premium Zurich Airport transfers, Zurich city rides, and private transport across Switzerland.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Service Areas</h4>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li>Zurich Airport</li>
            <li>Kloten</li>
            <li>Zurich City</li>
            <li>Switzerland</li>
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
