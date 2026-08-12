import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Leaf, Ruler, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import manual from "@/assets/clove-manual.pdf.asset.json";
import budsImage from "@/assets/clove-buds.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Kayan Koyo da Littafin Horo — Clove Nigeria" },
      {
        name: "description",
        content:
          "Sauke littafin horo kan noman clove cikin Hausa, tare da ka'idojin yanayi, tazara da taki a takaice.",
      },
      { property: "og:title", content: "Kayan Koyo da Littafin Horo" },
      {
        property: "og:description",
        content: "Littafin horo (PDF) cikin Hausa da jagororin gona a takaice.",
      },
    ],
  }),
  component: ResourcesPage,
});

const quickFacts = [
  {
    icon: Thermometer,
    title: "Yanayi",
    items: ["Ruwan sama 1500–2500 mm/shekara", "Zafin jiki 20–30°C", "pH na kasa 5.5–7.0"],
  },
  {
    icon: Ruler,
    title: "Tazara da Rami",
    items: ["Tazara 6m × 6m ko 7m × 7m", "Rami 60 × 60 × 60 cm", "Dasawa a farkon damina"],
  },
  {
    icon: Leaf,
    title: "Taki da Kulawa",
    items: [
      "Taki na gargajiya 5–10 kg/bishiya/shekara",
      "NPK 15:15:15 a matakai",
      "Mulching domin rike danshi",
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Kayan Koyo</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Littafin Horo da Jagorori</h1>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="surface-card rounded-xl p-8">
          <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
            <FileText className="size-5" />
          </span>
          <h2 className="mt-5 text-2xl">Littafin Horo Kan Noman Clove (Hausa)</h2>
          <p className="mt-3 text-muted-foreground">
            Cikakken littafi na darussa 10 tare da manufofin koyo, ka&apos;ida da ayyukan aiki —
            shirye don amfanin masu horarwa da manoma.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            PDF · {(manual.size / 1024 / 1024).toFixed(1)} MB
          </p>
          <Button asChild variant="hero" size="lg" className="mt-7">
            <a href={manual.url} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" /> Sauke Littafin (PDF)
            </a>
          </Button>
        </div>
        <img
          src={budsImage}
          alt="Furannin clove sabo da busasshen clove"
          width={1200}
          height={912}
          loading="lazy"
          className="h-72 w-full rounded-xl object-cover"
        />
      </div>

      <h2 className="mt-16 text-2xl">Jagorori a Takaice</h2>
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
