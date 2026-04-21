import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Request a Zurich Airport pickup, Zurich city transfer, or private chauffeur ride across Switzerland with De Conno Limousinen Service.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Request your transfer
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
            Contact us for Zurich Airport pickups, Zurich city transfers, and private transportation across Switzerland.
            Short-notice requests are welcome, subject to availability.
          </p>

          <div className="mt-8 space-y-3 text-neutral-700">
            <p><strong>Phone:</strong> {siteConfig.phone}</p>
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Service Area:</strong> Zurich City, Zurich Airport, nationwide</p>
          </div>
        </div>

        <form className="rounded-3xl border border-neutral-200 p-8 shadow-sm">
          <div className="grid gap-5">
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Full name" />
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Email address" />
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Phone number" />
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Pickup location" />
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Destination" />
            <input className="rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Date and time" />
            <textarea className="min-h-32 rounded-2xl border border-neutral-300 px-4 py-3" placeholder="Message" />
            <button type="button" className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
