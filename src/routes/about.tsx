import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import trainingImage from "@/assets/training-nursery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Training Programme — Clove Nigeria" },
      {
        name: "description",
        content:
          "The purpose of the clove production training manual, who it is designed for, and the training approach we use.",
      },
      { property: "og:title", content: "About the Training Programme — Clove Nigeria" },
      {
        property: "og:description",
        content: "Purpose, target audience and training approach of the clove production programme.",
      },
    ],
  }),
  component: AboutPage,
});

const audience = [
  "Farmers",
  "Extension agents",
  "Agricultural students",
  "Agripreneurs",
  "Development practitioners",
];

const methods = [
  "Interactive lectures",
  "Demonstrations and field practicals",
  "Group discussions and problem-solving",
  "Field visits and hands-on practice",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
        Built to train farmers and agricultural stakeholders
      </h1>
      <p className="mt-6 max-w-3xl text-muted-foreground">
        This programme provides a professional, step-by-step guide to clove production, integrating
        theoretical knowledge with hands-on practical activities to ensure clear understanding and
        effective skill acquisition.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={trainingImage}
          alt="Farmers receiving training in a clove nursery"
          width={1200}
          height={912}
          loading="lazy"
          className="h-80 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="surface-card rounded-xl p-6">
            <h2 className="text-lg">Target Audience</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {audience.map((a) => (
                <li key={a} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-xl p-6">
            <h2 className="text-lg">Training Approach</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {methods.map((m) => (
                <li key={m} className="flex gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-xl border border-border bg-cream p-8">
        <h2 className="text-2xl">Conclusion</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          The manual provides a comprehensive guide to clove production by combining sound
          theoretical foundations with practical, field-based learning activities. When properly
          applied, the practices outlined will enhance the productivity, quality and profitability
          of clove farming.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/modules">View Modules</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
