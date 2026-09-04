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
            <span className="font-display text-base font-semibold">NACLOPPAMN</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            National Association of Cloves Producers, Processors and Marketers of Nigeria —
            professional training in clove (Syzygium aromaticum) production, from nursery to
            market.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Pages</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/modules" className="hover:text-primary">
                10 Modules
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-primary">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-primary">
                Register for Training
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Who It Is For</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Farmers</li>
            <li>Extension agents</li>
            <li>Agricultural students</li>
            <li>Agripreneurs &amp; development practitioners</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" /> 08079165802
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" /> nacloppamn@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Ministry of Trade and Investment, Block D, Facan Office, Old Secretariat, Garki Area
              1, Abuja
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} National Association of Cloves Producers, Processors and
        Marketers of Nigeria (NACLOPPAMN). All rights reserved.
      </div>
    </footer>
  );
}
