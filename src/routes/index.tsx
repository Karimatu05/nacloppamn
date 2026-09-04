import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, GraduationCap, LineChart, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";
import heroImage from "@/assets/hero-clove-farm.jpg";
import budsImage from "@/assets/clove-buds.jpg";
import trainingImage from "@/assets/training-nursery.jpg";
import manual from "@/assets/clove-manual.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NACLOPPAMN — Professional Clove Production Training" },
      {
        name: "description",
        content:
          "Step-by-step clove production training in Nigeria: 10 modules covering nursery, planting, field management, harvesting and marketing, plus a free manual.",
      },
      { property: "og:title", content: "NACLOPPAMN — Professional Clove Production Training" },
      {
        property: "og:description",
        content:
          "10 training modules on clove production: nursery, transplanting, field management, harvesting and marketing.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  {
    icon: Sprout,
    title: "Theory Plus Field Practice",
    body: "Every module pairs sound theory with hands-on field activities so participants gain real, usable skills.",
  },
  {
    icon: GraduationCap,
    title: "10 Complete Modules",
    body: "From an introduction to cloves through health and safety — structured step by step for farmers and trainers.",
  },
  {
    icon: LineChart,
    title: "Markets and Profitability",
    body: "Learn value addition through grinding, oil extraction and packaging, plus record keeping that unlocks credit.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Climate-Smart Farming",
    body: "Use of PPE, safe agrochemical handling, and sustainable practices such as mulching and agroforestry.",
  },
];

const steps = [
  { n: "1", title: "Register", body: "Complete the training form with your farm details." },
  { n: "2", title: "Attend Modules", body: "Interactive lectures and group discussions." },
  { n: "3", title: "Field Practicals", body: "Live demonstrations and visits to working farms." },
  { n: "4", title: "Get Certified", body: "Finish all 10 modules and receive a certificate." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="Tropical clove plantation with a farmer walking between the trees"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Training on Clove (Syzygium aromaticum) Production
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              A professional, step-by-step programme for farmers, extension agents, agricultural
              students, agripreneurs and development practitioners — from site selection to harvest
              and market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/register">
                  Register for Training <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/modules">View the 10 Modules</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { k: "10 Modules", v: "Complete training curriculum" },
            { k: "18–24 months", v: "Seedlings ready to transplant" },
            { k: "5–7 years", v: "First flowering" },
            { k: "10–12%", v: "Target moisture after drying" },
          ].map((s) => (
            <div key={s.k}>
              <p className="font-display text-2xl text-primary sm:text-3xl">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">What you will learn</p>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          Practical knowledge that raises yield, quality and profit
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="surface-card rounded-xl p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <b.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About split */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={budsImage}
              alt="Fresh clove buds beside dried cloves in a basket"
              width={1200}
              height={912}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
            <img
              src={trainingImage}
              alt="Extension agent training farmers in a clove nursery"
              width={1200}
              height={912}
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">About the programme</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">From nursery to market</h2>
            <p className="mt-5 text-muted-foreground">
              Clove (<em>Syzygium aromaticum</em>) is a perennial evergreen tree of the Myrtaceae
              family. Its dried unopened flower buds are used as a spice and in traditional
              medicine, pharmaceuticals, cosmetics and food processing.
            </p>
            <p className="mt-4 text-muted-foreground">
              Where agro-ecological conditions are suitable, clove production offers long-term
              income opportunities. Major producers include Indonesia, Madagascar, Tanzania, Sri
              Lanka and India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">Read more</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={manual.url} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" /> Download the Manual
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">How the training runs</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Four steps to join the programme</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modules preview */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Curriculum</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Ten training modules</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/modules">
              View all <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((m) => (
            <Link
              key={m.slug}
              to="/modules/$slug"
              params={{ slug: m.slug }}
              className="group surface-card rounded-xl p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">
                Module {m.number}
              </span>
              <h3 className="mt-2 text-lg group-hover:text-primary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">
            Ready to start growing cloves?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Join a community of farmers applying proven agronomic practices to improve productivity,
            quality and profitability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
