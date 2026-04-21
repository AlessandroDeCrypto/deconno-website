export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/41797293699"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-green-600"
    >
      <span className="text-lg leading-none">💬</span>
      <span>WhatsApp</span>
    </a>
  );
}