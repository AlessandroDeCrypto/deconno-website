export function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-neutral-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 leading-8 text-neutral-700">{text}</p>
    </div>
  );
}
