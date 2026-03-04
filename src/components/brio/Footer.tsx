const Footer = () => (
  <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
    <div className="brio-container flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-serif text-lg font-light tracking-wider text-foreground">BRIO</span>
      <p className="font-sans text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brio. The Art of Living, Beautifully Composed.
      </p>
    </div>
  </footer>
);

export default Footer;
