import { motion } from "framer-motion";
import heroImage from "@/assets/hero-residence.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />
      </motion.div>

      {/* Architectural line SVG overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full max-w-4xl opacity-[0.08]" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Floorplan lines */}
          <motion.rect x="100" y="50" width="300" height="200" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }} className="animate-draw-line text-foreground" />
          <motion.rect x="400" y="50" width="200" height="200" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }}
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }} className="animate-draw-line text-foreground" />
          <motion.line x1="250" y1="50" x2="250" y2="250" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }} className="animate-draw-line text-foreground" />
          <motion.line x1="100" y1="150" x2="600" y2="150" 
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
            style={{ strokeDasharray: 1, strokeDashoffset: 1 }} className="animate-draw-line text-foreground" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="brio-caption text-primary-foreground/70 mb-6"
        >
          Architecture · Interior Design · Smart Technology
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="brio-heading-xl text-primary-foreground max-w-4xl"
        >
          The Art of Living,
          <br />
          Beautifully Composed
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-10"
        >
          <button
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            className="brio-caption text-primary-foreground/80 border border-primary-foreground/30 px-8 py-3 hover:bg-primary-foreground/10 transition-all duration-500"
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
