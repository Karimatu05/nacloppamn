import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register for Clove Production Training — NACLOPPAMN" },
      {
        name: "description",
        content:
          "Complete the registration form to join the clove production training: your details, state, role and farm size.",
      },
      { property: "og:title", content: "Register for Clove Production Training" },
      {
        property: "og:description",
        content: "Sign up to attend the clove (Syzygium aromaticum) production training programme.",
      },
    ],
  }),
  component: RegisterPage,
});

const perks = [
  "10 modules of theory and field practice",
  "Farm visits and live demonstrations",
  "A copy of the training manual",
  "Certificate on completion",
];

// Registration is handled by our official Google Form so responses land
// directly in NACLOPPAMN's Google Sheet.
const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeb1jMJKAWzs9Yv7qjQZvLOGC8D_hi6oXOxEarHgY18g8juNg/viewform?embedded=true";

function RegisterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Registration</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Register for Training</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Fill in the form below and our trainers will contact you with the schedule and venue that
        suits you best.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="surface-card overflow-hidden rounded-xl p-2 sm:p-4">
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="NACLOPPAMN Training Registration Form"
            width="100%"
            height="1100"
            className="rounded-lg"
            style={{ border: "none" }}
          >
            Loading…
          </iframe>
        </div>

        <aside className="rounded-xl border border-border bg-cream p-6 sm:p-8">
          <h2 className="text-xl">What you get</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {perks.map((p) => (
              <li key={p} className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Training combines interactive lectures, field demonstrations, group discussions and farm
            visits.
          </p>
        </aside>
      </div>
    </div>
  );
}
