import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Tuntube Mu — Clove Nigeria" },
      {
        name: "description",
        content:
          "Tuntube masu horarwa na Clove Nigeria domin tambayoyi kan noman clove, horo ko hadin gwiwa.",
      },
      { property: "og:title", content: "Tuntube Mu — Clove Nigeria" },
      {
        property: "og:description",
        content: "Tambayoyi kan horon noman clove? Aika mana sako.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Waya", value: "+234 800 000 0000" },
  { icon: Mail, label: "Imel", value: "horo@clovenigeria.org" },
  { icon: MapPin, label: "Ofis", value: "Abuja, Najeriya" },
  { icon: Clock, label: "Lokacin Aiki", value: "Litinin – Juma'a, 9:00 – 17:00" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Tuntube Mu</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Muna nan don taimaka maka</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Aika mana tambayoyinka kan noman clove, tsarin horo, ko hadin gwiwa da kungiyoyi da
        makarantun aikin gona.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="surface-card rounded-xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("An aika sakonka. Mun gode!");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="cname">Suna</Label>
              <Input id="cname" required placeholder="Sunanka" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cphone">Waya ko Imel</Label>
              <Input id="cphone" required placeholder="080... ko suna@imel.com" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="csubject">Batun Sako</Label>
              <Input id="csubject" placeholder="Misali: Horo a jihar Kaduna" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="cmsg">Sako</Label>
              <Textarea id="cmsg" required rows={5} placeholder="Rubuta sakonka a nan" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                Aika Sako
              </Button>
            </div>
          </div>
        </form>

        <aside className="rounded-xl border border-border bg-cream p-6 sm:p-8">
          <h2 className="text-xl">Bayanan Tuntuba</h2>
          <ul className="mt-6 space-y-5">
            {details.map((d) => (
              <li key={d.label} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <d.icon className="size-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-sm">{d.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
