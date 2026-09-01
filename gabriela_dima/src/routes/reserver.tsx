import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/SeoHead";
import { BookingNavbar } from "@/components/booking/BookingNavbar";
import { BookingForm } from "@/components/booking/BookingForm";

export const Route = createFileRoute("/reserver")({
  component: BookingPage,
});

function BookingPage() {
  return (
    <div className="min-h-screen bg-bg font-body text-navy antialiased">
      <SeoHead
        title="Réserver une consultation — Gabriela Dima CFO"
        description="Consultation stratégique gratuite de 30 minutes avec Gabriela Dima, CPA, MBA."
        noindex
      />
      <BookingNavbar />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <BookingForm />
      </main>
    </div>
  );
}
