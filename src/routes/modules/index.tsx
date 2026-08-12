import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { modules } from "@/data/modules";

export const Route = createFileRoute("/modules/")({
  head: () => ({
    meta: [
      { title: "10 Clove Production Training Modules — Clove Nigeria" },
      {
        name: "description",
        content:
          "Browse all 10 modules of the clove production training manual: introduction, botany, site selection, nursery, transplanting, field management, pests, harvesting, marketing and safety.",
      },
      { property: "og:title", content: "10 Clove Production Training Modules" },
      {
        property: "og:description",
        content: "A step-by-step curriculum for clove (Syzygium aromaticum) production.",
      },
    ],
  }),
  component: ModulesPage,
});

function ModulesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Curriculum</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Ten Modules</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Each module includes learning objectives, theory, and field-based practical sessions so
        participants build genuine hands-on competence.
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
              Open module <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
