import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Leaf, Ruler, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import manual from "@/assets/clove-manual.pdf.asset.json";
import budsImage from "@/assets/clove-buds.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources and Training Manual — Clove Nigeria" },
      {
        name: "description",
        content:
          "Download the clove production training manual (PDF) and review quick reference guides on climate, spacing, fertilizer and drying.",
      },
      { property: "og:title", content: "Resources and Training Manual" },
      {
        property: "og:description",
        content: "The full clove production manual (PDF) plus quick agronomic reference guides.",
      },
    ],
  }),
  component: ResourcesPage,
});

const quickFacts = [
  {
    icon: Thermometer,
    title: "Climate and Soil",
    items: ["Rainfall 1,500–2,500 mm/year", "Temperature 20–30°C", "Soil pH 5.5–7.0"],
  },
  {
    icon: Ruler,
    title: "Spacing and Holes",
    items: [
      "Spacing 6 m × 6 m or 7 m × 7 m",
      "Planting holes 60 × 60 × 60 cm",
      "Transplant at onset of rains",
    ],
  },
  {
    icon: Leaf,
    title: "Fertilizer and Care",
    items: [
      "Organic manure 5–10 kg/tree/year",
      "NPK 15:15:15 — 100 g, 200 g, 300 g (years 1–3)",
      "Mulch 8–10 cm thick to conserve moisture",
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Resources</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Training Manual and Guides</h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="surface-card rounded-xl p-8">
          <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
            <FileText className="size-5" />
          </span>
          <h2 className="mt-5 text-2xl">Training Manual on Clove Production</h2>
          <p className="mt-3 text-muted-foreground">
            The complete 10-module manual with learning objectives, theory and practical sessions —
            ready for trainers, extension agents and farmers.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            PDF · {(manual.size / 1024 / 1024).toFixed(1)} MB
          </p>
          <Button asChild variant="hero" size="lg" className="mt-7">
            <a href={manual.url} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" /> Download the Manual (PDF)
            </a>
          </Button>
        </div>
        <img
          src={budsImage}
          alt="Fresh and dried clove buds"
          width={1200}
          height={912}
          loading="lazy"
          className="h-72 w-full rounded-xl object-cover"
        />
      </div>

      <h2 className="mt-16 text-2xl">Quick Reference</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {quickFacts.map((f) => (
          <div key={f.title} className="rounded-xl border border-border bg-cream p-6">
            <f.icon className="size-5 text-primary" />
            <h3 className="mt-4 text-lg">{f.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {f.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
