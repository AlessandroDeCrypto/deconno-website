import { SectionTitle } from "@/components/section-title";

const serviceSections = [
  {
    title: "Zurich Airport Pickups",
    text: "Our main focus is premium pickup service at Zurich Airport. We provide professional meet-and-greet transportation for arrivals, business clients, families, and guests who want a smooth transition from the airport to their hotel, office, home, or resort destination.",
  },
  {
    title: "Zurich City Transfers",
    text: "Fast and comfortable transport within Zurich for meetings, restaurants, shopping districts, hotels, and private addresses. Ideal for clients who prefer a reliable premium service over standard city taxi options.",
  },
  {
    title: "Private Transfers Across Switzerland",
    text: "Direct travel from Zurich Airport or Zurich City to Lucerne, Interlaken, Grindelwald, Lauterbrunnen, and other popular Swiss destinations. Perfect for sightseeing, family travel, and hotel-to-hotel transport.",
  },
  {
    title: "Business Chauffeur Service",
    text: "Executive transportation for meetings, conferences, client visits, and roadshows. We focus on discretion, punctuality, and a professional standard from pickup to drop-off.",
  },
  {
    title: "Group Transport",
    text: "For small groups, families, and guests with extra luggage, our larger vehicles provide a premium alternative without sacrificing comfort or reliability.",
  },
  {
    title: "Special Occasion Transport",
    text: "Available for selected events and private occasions, including wedding transport on request, while keeping our main focus on airport, city, and destination transfers.",
  },
];

export const metadata = {
  title: "Services",
  description:
    "Zurich Airport pickups, Zurich city transfers, and private chauffeur services across Switzerland including Lucerne, Interlaken, Grindelwald, and Lauterbrunnen.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Professional transport for airport, city, and long-distance travel"
        text="Our service is designed around the needs of travelers arriving in Zurich and continuing comfortably to their destination anywhere in Switzerland."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {serviceSections.map((service) => (
          <div key={service.title} className="rounded-3xl border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
            <p className="mt-4 leading-8 text-neutral-700">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
