import brioLogo from "@/assets/brio-logo.png";

const Footer = () => (
  <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
    <div className="brio-container flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={brioLogo} alt="Brio" className="h-10 w-auto" />
      <p className="font-sans text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brio. The Art of Living, Beautifully Composed.
      </p>
    </div>
  </footer>
);

export default Footer;
