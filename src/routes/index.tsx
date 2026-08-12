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
      { title: "Clove Nigeria — Horo kan Noman Citta Mai Kamshi" },
      {
        name: "description",
        content:
          "Cikakken horo kan noman clove a Najeriya: darussa 10 daga nursery zuwa girbi da kasuwanci, tare da littafin horo cikin Hausa.",
      },
      { property: "og:title", content: "Clove Nigeria — Horo kan Noman Citta Mai Kamshi" },
      {
        property: "og:description",
        content: "Darussa 10 na noman clove: nursery, dasawa, kula da gona, girbi da kasuwanci.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  {
    icon: Sprout,
    title: "Ilimin Fili da Ka'ida",
    body: "Kowane darasi ya hada bayanin ka'ida da ayyukan da ake yi a gona domin samun kwarewa ta gaske.",
  },
  {
    icon: GraduationCap,
    title: "Darussa 10 Cikakke",
    body: "Daga gabatarwa kan clove zuwa lafiya da tsaro — an tsara su mataki-mataki cikin harshen Hausa.",
  },
  {
    icon: LineChart,
    title: "Kasuwa da Riba",
    body: "Koyi kara daraja: nika foda, cire man clove, marufi, da rubuta bayanan gona domin samun rance.",
  },
  {
    icon: ShieldCheck,
    title: "Noma Mai Tsaro",
    body: "Amfani da kayan kariya (PPE), sarrafa magungunan gona da dabarun kare muhalli kamar agroforestry.",
  },
];

const steps = [
  { n: "1", title: "Yi Rijista", body: "Cika fom din horo da bayanan gonarka." },
  { n: "2", title: "Halarci Darussa", body: "Laccoci masu mu'amala da tattaunawar rukuni." },
  { n: "3", title: "Aiki a Fili", body: "Nuna aiki a gona da ziyartar gonaki na gaske." },
  { n: "4", title: "Samu Shaida", body: "Kammala darussa 10 sannan a ba ka takardar shaida." },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="Gonar clove a yankin tropics da manomi yana tafiya tsakanin bishiyoyi"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Littafin Horo · Hausa
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Horo kan Noman Citta Mai Kamshi (Clove)
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              An tsara wannan shirin domin horas da manoma, jami&apos;an fadada aikin gona, daliban
              aikin gona da masu kasuwancin noma — daga zaben wuri zuwa girbi da kasuwa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/register">
                  Yi Rijistar Horo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/modules">Duba Darussa 10</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            { k: "Darussa 10", v: "Tsarin horo cikakke" },
            { k: "Watanni 18–24", v: "Tsiro ya shirya dasawa" },
            { k: "Shekaru 5–7", v: "Fara bada fure" },
            { k: "10–12%", v: "Danshi bayan busarwa" },
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
        <p className="eyebrow">Me za ka koya?</p>
        <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
          Ilimi mai amfani wanda ke kara amfanin gona da riba
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
              alt="Furannin clove sabo tare da busasshen clove a kwando"
              width={1200}
              height={912}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
            />
            <img
              src={trainingImage}
              alt="Jami'in fadada aikin gona yana horas da manoma a nursery"
              width={1200}
              height={912}
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-xl object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Game da Shirin</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Daga nursery zuwa kasuwa</h2>
            <p className="mt-5 text-muted-foreground">
              Clove (<em>Syzygium aromaticum</em>) itace ce mai kore wadda ba ta faduwa ganye. Ana
              amfani da furenta wanda bai bude ba a matsayin kayan yaji, a magungunan gargajiya,
              masana&apos;antar magani, kayan kwalliya da sarrafa abinci.
            </p>
            <p className="mt-4 text-muted-foreground">
              A wuraren da yanayi da kasa suka dace, noman clove na iya zama hanyar samun kudin
              shiga na dogon lokaci ga manoma. Manyan kasashen da ke samar da shi sun hada da
              Indonesia, Madagascar, Tanzania, Sri Lanka da India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">Kara karantawa</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={manual.url} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" /> Sauke Littafin
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="eyebrow">Yadda horon ke gudana</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Matakai 4 na shiga shirin</h2>
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
            <p className="eyebrow">Darussa</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Tsarin darussa goma</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/modules">
              Duba duka <ArrowRight className="size-4" />
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
            Shirya don fara noman clove?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Ka shiga rukunin manoma da ke amfani da ingantattun hanyoyin noma domin kara yawan
            amfanin gona, inganci da riba.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/register">Yi Rijista Yanzu</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">Tuntube Mu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
