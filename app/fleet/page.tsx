import { SectionTitle } from "@/components/section-title";

const fleet = [
  {
    title: "Business Sedan",
    text: "A refined choice for airport transfers, city rides, and executive travel. Ideal for individuals or couples seeking comfort and efficiency.",
  },
  {
    title: "First Class Sedan",
    text: "Premium-level comfort for clients who expect a higher standard of privacy, elegance, and smooth travel.",
  },
  {
    title: "Business Van / Sprinter",
    text: "Spacious and practical for families, small groups, and passengers traveling with additional luggage to or from Zurich Airport and destinations across Switzerland.",
  },
];

export const metadata = {
  title: "Fleet",
  description:
    "Premium sedans and spacious vans for Zurich Airport transfers, Zurich city rides, and private transportation across Switzerland.",
};

export default function FleetPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="Fleet"
        title="Comfortable vehicles for every type of transfer"
        text="Our fleet is selected to support airport pickups, city transportation, and longer journeys across Switzerland with premium comfort."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {fleet.map((item) => (
          <div key={item.title} className="rounded-3xl border border-neutral-200 p-8 shadow-sm">
            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 flex items-center justify-center text-sm text-neutral-500">
              Image placeholder
            </div>
            <h2 className="mt-6 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 leading-8 text-neutral-700">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
