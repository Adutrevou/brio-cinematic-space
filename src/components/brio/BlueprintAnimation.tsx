import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import blueprintImage from "@/assets/blueprint-drawing.png";
import outlineImage from "@/assets/blueprint-outline.png";
import finalImage from "@/assets/blueprint-final.png";

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Phase 1: Blueprint image reveals via clip-path 0→0.30
  // Phase 2: Blueprint fades, outline image fades in 0.28→0.45
  // Phase 3: Outline fades, final image fades in 0.45→0.62
  // Phase 4: Final visible 0.62→1

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.06, 0.30, 0.42], [0, 1, 1, 0]);
  const blueprintScale = useTransform(scrollYProgress, [0, 0.30], [1.03, 1]);

  const outlineOpacity = useTransform(scrollYProgress, [0.28, 0.40, 0.50, 0.60], [0, 1, 1, 0]);
  const outlineScale = useTransform(scrollYProgress, [0.28, 0.50], [1.04, 1]);

  const finalOpacity = useTransform(scrollYProgress, [0.50, 0.65], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.50, 0.72], [1.05, 1]);

  const gridOpacity = useTransform(scrollYProgress, [0, 0.06, 0.35, 0.45], [0, 0.03, 0.03, 0]);

  // Scan-line effect: a bright horizontal line sweeping down the blueprint
  const scanY = useTransform(scrollYProgress, [0.04, 0.30], [0, 100]);
  const scanOpacity = useTransform(scrollYProgress, [0.04, 0.08, 0.28, 0.32], [0, 0.6, 0.6, 0]);

  // Caption
  const captionOpacity = useTransform(scrollYProgress, [0.04, 0.12], [0, 1]);
  const closingOpacity = useTransform(scrollYProgress, [0.60, 0.70], [0, 1]);

  return (
    <section ref={ref} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Grid bg */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: gridOpacity,
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.p
          className="brio-caption text-muted-foreground mb-6 md:mb-8"
          style={{ opacity: captionOpacity }}
        >
          From Blueprint to Reality
        </motion.p>

        <div className="w-full max-w-5xl px-6 md:px-12 relative aspect-[16/9]">
          {/* Phase 1: Blueprint drawing image */}
          <motion.div
            className="absolute inset-0 z-20 overflow-hidden"
            style={{ opacity: blueprintOpacity, scale: blueprintScale }}
          >
            <img
              src={blueprintImage}
              alt="Architectural blueprint drawing"
              className="w-full h-full object-cover"
            />
            {/* Scan line sweeping down */}
            <motion.div
              className="absolute left-0 right-0 h-px pointer-events-none"
              style={{
                top: useTransform(scanY, (v) => `${v}%`),
                opacity: scanOpacity,
                background: `linear-gradient(90deg, transparent 0%, hsl(var(--foreground) / 0.8) 20%, hsl(var(--foreground)) 50%, hsl(var(--foreground) / 0.8) 80%, transparent 100%)`,
                boxShadow: `0 0 20px 4px hsl(var(--foreground) / 0.15)`,
              }}
            />
          </motion.div>

          {/* Phase 2: Outline image (lines + lighting visible) */}
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ opacity: outlineOpacity, scale: outlineScale }}
          >
            <img
              src={outlineImage}
              alt="Architectural outline with ambient lighting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
          </motion.div>

          {/* Phase 3: Final completed image */}
          <motion.div
            className="absolute inset-0 z-0 overflow-hidden"
            style={{ opacity: finalOpacity, scale: finalScale }}
          >
            <img
              src={finalImage}
              alt="Completed Brio luxury residence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </motion.div>
        </div>

        <motion.p
          className="brio-body text-muted-foreground text-center max-w-xl mx-auto mt-8 px-6"
          style={{ opacity: closingOpacity }}
        >
          Every Brio home begins as a single line — drawn with intention, refined with precision, and built to stand the test of time.
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintAnimation;
