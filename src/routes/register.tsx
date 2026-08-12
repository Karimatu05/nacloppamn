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
      { title: "Register for Clove Production Training — Clove Nigeria" },
      {
        name: "description",
        content:
          "Complete the registration form to join the clove production training: your details, state, role and farm size.",
      },
      { property: "og:title", content: "Register for Clove Production Training" },
      {
        property: "og:description",
        content: "Sign up to attend the clove (Syzygium aromaticum) production training programme.",
      },
    ],
  }),
  component: RegisterPage,
});

const perks = [
  "10 modules of theory and field practice",
  "Farm visits and live demonstrations",
  "A copy of the training manual",
  "Certificate on completion",
];

function RegisterPage() {
  const [done, setDone] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="eyebrow">Registration</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Register for Training</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Fill in the form below and our trainers will contact you with the schedule and venue that
        suits you best.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="surface-card rounded-xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
            toast.success("Registration received. We will contact you shortly.");
          }}
        >
          {done ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-10 text-primary" />
              <h2 className="mt-4 text-2xl">Registration received!</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We have your details. Our trainers will reach out with the training schedule.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
                Submit another form
              </Button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="080..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" required placeholder="e.g. Kaduna" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Your Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">Farmer</SelectItem>
                    <SelectItem value="extension">Extension agent</SelectItem>
                    <SelectItem value="student">Agricultural student</SelectItem>
                    <SelectItem value="agripreneur">Agripreneur</SelectItem>
                    <SelectItem value="practitioner">Development practitioner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="farm">Farm Size (hectares)</Label>
                <Input id="farm" placeholder="e.g. 2" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="note">Additional Information</Label>
                <Textarea id="note" rows={4} placeholder="Tell us about your farm or questions" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  Submit Registration
                </Button>
              </div>
            </div>
          )}
        </form>

        <aside className="rounded-xl border border-border bg-cream p-6 sm:p-8">
          <h2 className="text-xl">What you get</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {perks.map((p) => (
              <li key={p} className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Training combines interactive lectures, field demonstrations, group discussions and farm
            visits.
          </p>
        </aside>
      </div>
    </div>
  );
}
