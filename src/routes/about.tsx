import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import trainingImage from "@/assets/training-nursery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Game da Shirin Horo — Clove Nigeria" },
      {
        name: "description",
        content:
          "Manufar littafin horo kan noman clove, wadanda aka tsara shi domin su, da hanyoyin horarwa da muke amfani da su.",
      },
      { property: "og:title", content: "Game da Shirin Horo — Clove Nigeria" },
      {
        property: "og:description",
        content: "Manufa, mahalarta da hanyoyin horarwa na shirin noman clove.",
      },
    ],
  }),
  component: AboutPage,
});

const audience = [
  "Manoma",
  "Jami'an fadada aikin gona",
  "Daliban aikin gona",
  "Masu kasuwancin noma (agripreneurs)",
  "Kungiyoyin raya al'umma",
];

const methods = [
  "Laccoci masu mu'amala",
  "Nuna aiki a fili",
  "Tattaunawar rukuni",
  "Ziyartar gonaki",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Game da Mu</p>
      <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl">
        An shirya shi domin horas da manoma da masu ruwa da tsaki a fannin noma
      </h1>
      <p className="mt-6 max-w-3xl text-muted-foreground">
        An tsara wannan shirin domin bayar da cikakken bayani a mataki-mataki kan yadda ake noman
        citta mai kamshi (clove). Ya hada ilimin ka&apos;ida da kuma ayyukan da ake yi a fili domin
        mahalarta su fahimci darasin sosai kuma su samu kwarewar aiki.
      </p>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
        <img
          src={trainingImage}
          alt="Manoma suna karbar horo a nursery na clove"
          width={1200}
          height={912}
          loading="lazy"
          className="h-80 w-full rounded-xl object-cover shadow-[var(--shadow-lift)]"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="surface-card rounded-xl p-6">
            <h2 className="text-lg">Masu Amfani da Littafin</h2>
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
            <h2 className="text-lg">Hanyoyin Horarwa</h2>
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
        <h2 className="text-2xl">Kammalawa</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Wannan shirin ya bayyana matakai daban-daban na noman clove ta hanyar hada ilimin
          ka&apos;ida da ayyukan fili. Idan aka yi amfani da hanyoyin da ke cikinsa, za a iya kara
          yawan amfanin gona, inganci, da ribar noman clove.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/modules">Duba Darussa</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/register">Yi Rijista</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
