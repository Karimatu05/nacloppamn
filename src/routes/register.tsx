import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Rijistar Horon Noman Clove — Clove Nigeria" },
      {
        name: "description",
        content:
          "Cika fom din rijista domin halartar horon noman clove: bayanan sirri, jiha da girman gona.",
      },
      { property: "og:title", content: "Rijistar Horon Noman Clove" },
      {
        property: "og:description",
        content: "Yi rijista domin halartar horon noman citta mai kamshi (clove).",
      },
    ],
  }),
  component: RegisterPage,
});

const perks = [
  "Darussa 10 na ka'ida da aiki a fili",
  "Ziyartar gonaki da nuna aiki",
  "Littafin horo cikin Hausa",
  "Takardar shaida bayan kammalawa",
];

function RegisterPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Rijista</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Yi Rijistar Horo</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Cika fom din da ke kasa, sannan masu horarwa za su tuntube ka da bayanan lokaci da wurin
        horon da ya fi dacewa da kai.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="surface-card rounded-xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
            toast.success("An karbi rijistarka. Za mu tuntube ka nan ba da jimawa ba.");
          }}
        >
          {done ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-10 text-primary" />
              <h2 className="mt-4 text-2xl">An karbi rijistarka!</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Mun samu bayananka. Masu horarwa za su tuntube ka da bayanan lokacin horo.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
                Sake cika fom
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Cikakken Suna</Label>
                <Input id="name" required placeholder="Sunanka" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Lambar Waya</Label>
                <Input id="phone" type="tel" required placeholder="080..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Imel (na son rai)</Label>
                <Input id="email" type="email" placeholder="suna@imel.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">Jiha</Label>
                <Input id="state" required placeholder="Misali: Kaduna" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Matsayinka</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Zabi matsayi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manomi">Manomi</SelectItem>
                    <SelectItem value="jami">Jami&apos;in fadada aikin gona</SelectItem>
                    <SelectItem value="dalibi">Dalibin aikin gona</SelectItem>
                    <SelectItem value="agripreneur">Mai kasuwancin noma</SelectItem>
                    <SelectItem value="kungiya">Kungiyar raya al&apos;umma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="farm">Girman Gona (hekta)</Label>
                <Input id="farm" placeholder="Misali: 2" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="note">Karin Bayani</Label>
                <Textarea id="note" rows={4} placeholder="Gaya mana kan gonarka ko tambayoyinka" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Aika Rijista
                </Button>
              </div>
            </div>
          )}
        </form>

        <aside className="rounded-xl border border-border bg-cream p-6 sm:p-8">
          <h2 className="text-xl">Abin da za ka samu</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {perks.map((p) => (
              <li key={p} className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Horon ya hada laccoci masu mu&apos;amala, nuna aiki a fili, tattaunawar rukuni da
            ziyartar gonaki.
          </p>
        </aside>
      </div>
    </div>
  );
}
