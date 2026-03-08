import { Link } from "react-router-dom";
import brioLogo from "@/assets/brio-logo-white.png";

const Footer = () => (
  <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-border">
    <div className="brio-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <Link to="/" className="inline-block">
            <img src={brioLogo} alt="BRIO - Concepts & Design" className="h-10 w-auto invert" />
          </Link>
          <p className="font-sans text-sm text-muted-foreground mt-4 font-light">
            The Art of Living,<br />Beautifully Composed.
          </p>
        </div>
        <div>
          <p className="brio-caption text-muted-foreground mb-4">Navigate</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Projects", path: "/projects" },
              { label: "Services", path: "/services" },
              { label: "Process", path: "/process" },
              { label: "About", path: "/about" },
              { label: "Team", path: "/team" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="brio-caption text-muted-foreground mb-4">Contact</p>
          <div className="font-sans text-sm text-muted-foreground font-light space-y-2">
            <p>10 Kragbron Road, Klopperpark</p>
            <p>Johannesburg, South Africa</p>
            <p>+27 87 265 5940</p>
            <p>info@brio.co.za</p>
          </div>
        </div>
        <div>
          <p className="brio-caption text-muted-foreground mb-4">Hours</p>
          <p className="font-sans text-sm text-muted-foreground font-light">
            Monday – Friday<br />08:00 – 17:00
          </p>
        </div>
      </div>
      <div className="brio-line" />
      <p className="font-sans text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Brio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
