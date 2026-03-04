import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brioLogo from "@/assets/brio-logo.png";

const navItems = ["Work", "Services", "Process", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={brioLogo} alt="Brio" className="h-12 w-auto" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="brio-caption text-muted-foreground hover:text-foreground transition-colors duration-500"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-6 h-px bg-foreground" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-foreground" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-6 h-px bg-foreground" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => scrollTo(item)}
                className="font-serif text-3xl font-light text-foreground"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
