import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import outlineImage from "@/assets/blueprint-outline.png";
import finalImage from "@/assets/blueprint-final.png";

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Phase 1: Blueprint draws 0→0.35
  // Phase 2: Blueprint fades, outline image fades in 0.30→0.45
  // Phase 3: Outline image fades, final image fades in 0.45→0.60
  // Phase 4: Final image visible 0.60→1

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.35, 0.45], [0, 1, 1, 0]);
  const outlineOpacity = useTransform(scrollYProgress, [0.30, 0.42, 0.50, 0.60], [0, 1, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.50, 0.65], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.50, 0.70], [1.05, 1]);
  const outlineScale = useTransform(scrollYProgress, [0.30, 0.50], [1.03, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.08, 0.40, 0.50], [0, 0.03, 0.03, 0]);

  // Line draw helper
  const line = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 1]);

  // === SVG matched to the uploaded building images ===
  // Building: flat-roof modern, left stone wall block, center 4-panel glass, right stone wing
  // Concrete walkway, water feature, steps, landscaping

  // Ground & walkway
  const groundLine = line(0.04, 0.12);
  const walkway = line(0.05, 0.14);
  const waterLeft = line(0.06, 0.15);
  const waterRight = line(0.06, 0.15);

  // Steps
  const step1 = line(0.08, 0.16);
  const step2 = line(0.09, 0.17);

  // Left stone block
  const leftWall = line(0.06, 0.16);
  const stoneJoints = [0, 1, 2, 3, 4].map((i) => line(0.12 + i * 0.008, 0.20 + i * 0.008));

  // Roof / fascia
  const roofMain = line(0.08, 0.18);
  const roofFascia = line(0.09, 0.19);
  const roofOverhang = line(0.10, 0.20);

  // Central glass wall (4 panels)
  const glassFrame = line(0.10, 0.20);
  const mullion1 = line(0.14, 0.22);
  const mullion2 = line(0.15, 0.23);
  const mullion3 = line(0.16, 0.24);
  const glassHeader = line(0.11, 0.21);

  // Dark door panel (left of glass)
  const doorPanel = line(0.12, 0.22);
  const doorHandle = line(0.18, 0.25);

  // Right wing wall
  const rightWall = line(0.12, 0.22);
  const rightJoints = [0, 1, 2, 3].map((i) => line(0.16 + i * 0.008, 0.24 + i * 0.008));

  // Interior (visible through glass)
  const sofa = line(0.22, 0.30);
  const sofaBack = line(0.23, 0.31);
  const interiorTree = line(0.24, 0.32);
  const treePot = line(0.25, 0.33);

  // Landscape - left trees
  const treeTrunkL1 = line(0.26, 0.33);
  const treeCrownL1 = line(0.27, 0.34);
  const treeTrunkL2 = line(0.27, 0.34);
  const treeCrownL2 = line(0.28, 0.35);

  // Landscape - right tree
  const treeTrunkR = line(0.28, 0.35);
  const treeCrownR = line(0.29, 0.36);

  // Shrubs / grasses
  const shrubs = [0, 1, 2, 3, 4, 5].map((i) => line(0.28 + i * 0.006, 0.35 + i * 0.006));

  // Ground lights
  const lights = [0, 1, 2, 3, 4].map((i) => line(0.30 + i * 0.005, 0.36 + i * 0.005));

  // Dimensions
  const dimH = line(0.32, 0.38);
  const dimV = line(0.33, 0.39);

  // Labels
  const labelOpacity = useTransform(scrollYProgress, [0.34, 0.40], [0, 1]);

  // Subtle fills
  const fillLeft = useTransform(scrollYProgress, [0.30, 0.38], [0, 0.025]);
  const fillRight = useTransform(scrollYProgress, [0.32, 0.40], [0, 0.02]);

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
          style={{ opacity: useTransform(scrollYProgress, [0.04, 0.12], [0, 1]) }}
        >
          From Blueprint to Reality
        </motion.p>

        <div className="w-full max-w-5xl px-6 md:px-12 relative aspect-[16/9]">
          {/* Blueprint SVG - matched to building */}
          <motion.div className="absolute inset-0 z-20" style={{ opacity: blueprintOpacity }}>
            <svg viewBox="0 0 1600 900" className="w-full h-full" fill="none">
              {/* Ground line */}
              <motion.line x1="0" y1="620" x2="1600" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.8" style={{ pathLength: groundLine }} />

              {/* Concrete walkway */}
              <motion.rect x="560" y="620" width="480" height="280" stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none" style={{ pathLength: walkway }} />
              <motion.line x1="600" y1="900" x2="600" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: walkway }} />
              <motion.line x1="1000" y1="900" x2="1000" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: walkway }} />

              {/* Water features (sides of walkway) */}
              <motion.rect x="420" y="640" width="140" height="200" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" style={{ pathLength: waterLeft }} />
              <motion.rect x="1040" y="640" width="140" height="200" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" style={{ pathLength: waterRight }} />

              {/* Steps */}
              <motion.rect x="560" y="570" width="480" height="25" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" style={{ pathLength: step1 }} />
              <motion.rect x="570" y="595" width="460" height="25" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" style={{ pathLength: step2 }} />

              {/* Left stone wall block */}
              <motion.rect x="140" y="200" width="400" height="420" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" style={{ pathLength: leftWall }} />
              {stoneJoints.map((pl, i) => (
                <motion.line key={`sj-${i}`} x1="140" y1={280 + i * 75} x2="540" y2={280 + i * 75} stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: pl }} />
              ))}

              {/* Roof fascia */}
              <motion.line x1="100" y1="200" x2="1500" y2="200" stroke="hsl(var(--foreground))" strokeWidth="1" style={{ pathLength: roofMain }} />
              <motion.line x1="100" y1="188" x2="1500" y2="188" stroke="hsl(var(--foreground))" strokeWidth="0.5" style={{ pathLength: roofFascia }} />
              <motion.line x1="520" y1="175" x2="1120" y2="175" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: roofOverhang }} />

              {/* Dark door panel */}
              <motion.rect x="540" y="240" width="120" height="380" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" style={{ pathLength: doorPanel }} />
              <motion.rect x="575" y="400" width="50" height="30" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" style={{ pathLength: doorHandle }} />

              {/* Central glass wall - 4 panels */}
              <motion.rect x="660" y="220" width="440" height="400" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" style={{ pathLength: glassFrame }} />
              <motion.rect x="660" y="200" width="440" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" style={{ pathLength: glassHeader }} />
              <motion.line x1="770" y1="220" x2="770" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: mullion1 }} />
              <motion.line x1="880" y1="220" x2="880" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: mullion2 }} />
              <motion.line x1="990" y1="220" x2="990" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: mullion3 }} />

              {/* Right wing wall */}
              <motion.rect x="1100" y="200" width="380" height="420" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" style={{ pathLength: rightWall }} />
              {rightJoints.map((pl, i) => (
                <motion.line key={`rj-${i}`} x1="1100" y1={280 + i * 90} x2="1480" y2={280 + i * 90} stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: pl }} />
              ))}

              {/* Interior visible through glass */}
              <motion.rect x="720" y="440" width="120" height="50" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: sofa }} />
              <motion.rect x="720" y="420" width="120" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.25" fill="none" style={{ pathLength: sofaBack }} />
              <motion.line x1="920" y1="620" x2="920" y2="400" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: interiorTree }} />
              <motion.circle cx="920" cy="380" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: interiorTree }} />
              <motion.rect x="900" y="580" width="40" height="40" stroke="hsl(var(--foreground))" strokeWidth="0.25" fill="none" style={{ pathLength: treePot }} />

              {/* Left landscape trees */}
              <motion.line x1="260" y1="620" x2="260" y2="520" stroke="hsl(var(--foreground))" strokeWidth="0.4" style={{ pathLength: treeTrunkL1 }} />
              <motion.circle cx="250" cy="490" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.35" fill="none" style={{ pathLength: treeCrownL1 }} />
              <motion.circle cx="270" cy="500" r="22" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: treeCrownL1 }} />

              <motion.line x1="380" y1="620" x2="380" y2="540" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: treeTrunkL2 }} />
              <motion.circle cx="380" cy="520" r="20" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: treeCrownL2 }} />

              {/* Right landscape tree */}
              <motion.line x1="1380" y1="620" x2="1380" y2="520" stroke="hsl(var(--foreground))" strokeWidth="0.4" style={{ pathLength: treeTrunkR }} />
              <motion.circle cx="1380" cy="490" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.35" fill="none" style={{ pathLength: treeCrownR }} />
              <motion.circle cx="1395" cy="505" r="20" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: treeCrownR }} />

              {/* Shrubs / ornamental grasses */}
              {shrubs.map((pl, i) => (
                <motion.ellipse key={`shrub-${i}`} cx={[320, 430, 480, 1180, 1280, 1340][i]} cy="610" rx="22" ry="12" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: pl }} />
              ))}

              {/* Ground uplights */}
              {lights.map((pl, i) => (
                <motion.circle key={`light-${i}`} cx={640 + i * 80} cy="580" r="3" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" style={{ pathLength: pl }} />
              ))}

              {/* Dimensions */}
              <motion.line x1="140" y1="680" x2="540" y2="680" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH }} />
              <motion.line x1="660" y1="680" x2="1100" y2="680" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH }} />
              <motion.line x1="1100" y1="680" x2="1480" y2="680" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH }} />
              {[140, 540, 660, 1100, 1480].map((x, i) => (
                <motion.line key={`dt-${i}`} x1={x} y1="675" x2={x} y2="685" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" style={{ pathLength: dimH }} />
              ))}
              <motion.line x1="80" y1="188" x2="80" y2="620" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimV }} />

              {/* Labels */}
              <motion.text x="340" y="700" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                STONE FACADE
              </motion.text>
              <motion.text x="880" y="700" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                GLASS PAVILION
              </motion.text>
              <motion.text x="1290" y="700" textAnchor="middle" className="fill-muted-foreground" fontSize="11" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                PRIVATE WING
              </motion.text>
              <motion.text x="60" y="410" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.1em" transform="rotate(-90, 60, 410)" style={{ opacity: labelOpacity }}>
                ELEVATION
              </motion.text>

              {/* Subtle fills */}
              <motion.rect x="140" y="200" width="400" height="420" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillLeft }} />
              <motion.rect x="1100" y="200" width="380" height="420" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillRight }} />
            </svg>
          </motion.div>

          {/* Phase 2: Outline image (with architectural lines visible) */}
          <motion.div className="absolute inset-0 z-10" style={{ opacity: outlineOpacity, scale: outlineScale }}>
            <img src={outlineImage} alt="Architectural outline of modern residence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
          </motion.div>

          {/* Phase 3: Final completed image */}
          <motion.div className="absolute inset-0 z-0" style={{ opacity: finalOpacity, scale: finalScale }}>
            <img src={finalImage} alt="Completed Brio luxury residence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </motion.div>
        </div>

        <motion.p
          className="brio-body text-muted-foreground text-center max-w-xl mx-auto mt-8 px-6"
          style={{ opacity: useTransform(scrollYProgress, [0.60, 0.70], [0, 1]) }}
        >
          Every Brio home begins as a single line — drawn with intention, refined with precision, and built to stand the test of time.
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintAnimation;
