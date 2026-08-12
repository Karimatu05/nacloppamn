import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { modules } from "@/data/modules";

export const Route = createFileRoute("/modules/")({
  head: () => ({
    meta: [
      { title: "Darussa 10 na Noman Clove — Clove Nigeria" },
      {
        name: "description",
        content:
          "Duba dukkan darussa 10 na littafin horo kan noman clove: gabatarwa, nursery, dasawa, kula da gona, kwari, girbi, kasuwanci da tsaro.",
      },
      { property: "og:title", content: "Darussa 10 na Noman Clove" },
      {
        property: "og:description",
        content: "Tsarin horo mataki-mataki kan noman citta mai kamshi (clove).",
      },
    ],
  }),
  component: ModulesPage,
});

function ModulesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Tsarin Horo</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Darussa Goma</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Kowane darasi ya kunshi manufofin koyo, ka&apos;ida, da ayyukan aiki da ake yi a fili domin
        mahalarta su samu kwarewar aiki ta gaske.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {modules.map((m) => (
          <Link
            key={m.slug}
            to="/modules/$slug"
            params={{ slug: m.slug }}
            className="group surface-card flex flex-col rounded-xl p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary font-display text-sm text-primary">
                {m.number}
              </span>
              <h2 className="text-lg group-hover:text-primary">{m.title}</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Bude darasi <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
