import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="font-display text-base font-semibold">Clove Nigeria</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Cibiyar horas da manoma kan noman citta mai kamshi (clove) — daga nursery zuwa kasuwa.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Shafuka</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/modules" className="hover:text-primary">
                Darussa 10
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                Game da Mu
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-primary">
                Kayan Koyo
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Rijistar Horo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Ga Wa Aka Tsara Shi</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Manoma</li>
            <li>Jami&apos;an fadada aikin gona</li>
            <li>Daliban aikin gona</li>
            <li>Agripreneurs da kungiyoyi</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Tuntube Mu</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 text-primary" /> +234 800 000 0000
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-primary" /> horo@clovenigeria.org
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" /> Abuja, Najeriya
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Clove Nigeria Training Institute. Duk hakkoki na kariya.
      </div>
    </footer>
  );
}
