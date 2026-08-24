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
      { title: "Contact Us — Clove Nigeria" },
      {
        name: "description",
        content:
          "Contact the Clove Nigeria training team with questions about clove production, training schedules or partnerships.",
      },
      { property: "og:title", content: "Contact Us — Clove Nigeria" },
      {
        property: "og:description",
        content: "Questions about clove production training? Send us a message.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Phone", value: "08079165802" },
  { icon: Mail, label: "Email", value: "nacloppamn@gmail.com" },
  {
    icon: MapPin,
    label: "Office",
    value:
      "Ministry of Trade and Investment, Block D, Facan Office, Old Secretariat, Garki Area 1, Abuja",
  },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday, 9:00 – 17:00" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">We are here to help</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Send us your questions about clove production, training schedules, or partnerships with
        cooperatives and agricultural institutions.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="surface-card rounded-xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Your message has been sent. Thank you!");
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" required placeholder="Your full name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cphone">Phone or Email</Label>
              <Input id="cphone" required placeholder="080... or you@email.com" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="csubject">Subject</Label>
              <Input id="csubject" placeholder="e.g. Training in Kaduna State" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="cmsg">Message</Label>
              <Textarea id="cmsg" required rows={5} placeholder="Write your message here" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </div>
        </form>

        <aside className="rounded-xl border border-border bg-cream p-6 sm:p-8">
          <h2 className="text-xl">Contact Details</h2>
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
