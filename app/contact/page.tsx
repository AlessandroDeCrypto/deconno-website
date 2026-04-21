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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Request your transfer
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
            Contact us for Zurich Airport pickups, Zurich city transfers, and
            private transportation across Switzerland. Short-notice requests are
            welcome, subject to availability.
          </p>

          <div className="mt-8 space-y-3 text-neutral-700">
            <p>
              <strong>Phone:</strong> {siteConfig.phone}
            </p>
            <p>
              <strong>Email:</strong> {siteConfig.email}
            </p>
            <p>
              <strong>Service Area:</strong> Zurich City, Zurich Airport,
              nationwide
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/41797293699"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+41797293699"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Call Now
            </a>
          </div>

          <div className="mt-10 rounded-3xl bg-neutral-50 p-6">
            <h2 className="text-xl font-semibold">Fast booking requests</h2>
            <p className="mt-3 leading-8 text-neutral-700">
              For faster handling, please include your pickup location,
              destination, number of passengers, and preferred date and time.
            </p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/maqapyqr"
          method="POST"
          className="rounded-3xl border border-neutral-200 p-8 shadow-sm"
        >
          <div className="grid gap-5">
            <input
              name="name"
              type="text"
              placeholder="Full name"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone number"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
            />
            <input
              name="pickup"
              type="text"
              placeholder="Pickup location"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />
            <input
              name="destination"
              type="text"
              placeholder="Destination"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />
            <input
              name="datetime"
              type="text"
              placeholder="Date and time"
              className="rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="min-h-32 rounded-2xl border border-neutral-300 px-4 py-3"
            />
            <button
              type="submit"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Send Request
            </button>
            <p className="text-sm leading-6 text-neutral-500">
              For urgent bookings, please contact us directly by phone or
              WhatsApp.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}