import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-residence.jpg";

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Blueprint draws from 0→0.45, crossfade 0.45→0.6, photo fully visible 0.6→1
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.1, 0.45, 0.6], [0, 1, 1, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.4, 0.7], [1.08, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.6], [0, 0.03, 0.03, 0]);

  // Individual line draw progress mapped to scroll ranges
  const line = (start: number, end: number) =>
    useTransform(scrollYProgress, [start, end], [0, 1]);

  // Structure lines
  const ground = line(0.05, 0.15);
  const leftBlock = line(0.08, 0.2);
  const stoneJoints = [0, 1, 2, 3, 4, 5].map((i) => line(0.15 + i * 0.01, 0.25 + i * 0.01));
  const roofLine = line(0.1, 0.22);
  const roofLine2 = line(0.11, 0.23);
  const glassWall = line(0.12, 0.25);
  const glassHeader = line(0.13, 0.24);
  const mullion1 = line(0.18, 0.28);
  const mullion2 = line(0.19, 0.29);
  const rightWing = line(0.14, 0.26);
  const rightRoof = line(0.15, 0.27);
  const rightWindow = line(0.22, 0.32);
  const col1 = line(0.24, 0.33);
  const col2 = line(0.25, 0.34);
  const terrace = line(0.26, 0.35);
  const steps = [0, 1, 2].map((i) => line(0.28 + i * 0.01, 0.36 + i * 0.01));

  // Interior
  const sofa1 = line(0.3, 0.38);
  const sofa2 = line(0.31, 0.39);
  const island = line(0.32, 0.4);
  const pendantLine = line(0.33, 0.4);
  const pendantHead = line(0.34, 0.41);

  // Landscape
  const treeTrunk = line(0.34, 0.42);
  const treeCrown1 = line(0.35, 0.43);
  const treeCrown2 = line(0.36, 0.44);
  const smallTree = line(0.36, 0.43);
  const smallTreeCrown = line(0.37, 0.44);
  const shrubs = [0, 1, 2, 3, 4].map((i) => line(0.37 + i * 0.008, 0.44 + i * 0.008));
  const grassLine = line(0.38, 0.45);

  // Dimensions
  const dimH1 = line(0.39, 0.46);
  const dimH2 = line(0.4, 0.47);
  const dimH3 = line(0.41, 0.48);
  const dimV = line(0.42, 0.49);

  // Labels
  const labelOpacity = useTransform(scrollYProgress, [0.42, 0.5], [0, 1]);

  // Fill
  const fillOpacity1 = useTransform(scrollYProgress, [0.4, 0.5], [0, 0.025]);
  const fillOpacity2 = useTransform(scrollYProgress, [0.42, 0.52], [0, 0.02]);

  return (
    <section ref={ref} className="relative" style={{ height: "250vh" }}>
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
          style={{ opacity: useTransform(scrollYProgress, [0.05, 0.15], [0, 1]) }}
        >
          From Blueprint to Reality
        </motion.p>

        <div className="w-full max-w-5xl px-6 md:px-12 relative aspect-[16/9]">
          {/* Blueprint SVG */}
          <motion.div className="absolute inset-0 z-10" style={{ opacity: blueprintOpacity }}>
            <svg viewBox="0 0 1600 900" className="w-full h-full">
              {/* Ground */}
              <motion.line x1="0" y1="680" x2="1600" y2="680" stroke="hsl(var(--foreground))" strokeWidth="1" style={{ pathLength: ground }} />

              {/* Left limestone block */}
              <motion.rect x="120" y="260" width="380" height="420" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" style={{ pathLength: leftBlock }} />
              {stoneJoints.map((pl, i) => (
                <motion.line key={`sj-${i}`} x1="120" y1={330 + i * 60} x2="500" y2={330 + i * 60} stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: pl }} />
              ))}

              {/* Roof lines */}
              <motion.line x1="100" y1="260" x2="960" y2="260" stroke="hsl(var(--foreground))" strokeWidth="0.8" style={{ pathLength: roofLine }} />
              <motion.line x1="100" y1="250" x2="960" y2="250" stroke="hsl(var(--foreground))" strokeWidth="0.4" style={{ pathLength: roofLine2 }} />

              {/* Central glass */}
              <motion.rect x="500" y="300" width="440" height="380" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" style={{ pathLength: glassWall }} />
              <motion.rect x="500" y="280" width="440" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none" style={{ pathLength: glassHeader }} />
              <motion.line x1="647" y1="300" x2="647" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: mullion1 }} />
              <motion.line x1="793" y1="300" x2="793" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: mullion2 }} />

              {/* Right wing */}
              <motion.rect x="940" y="300" width="420" height="380" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" style={{ pathLength: rightWing }} />
              <motion.line x1="940" y1="290" x2="1380" y2="290" stroke="hsl(var(--foreground))" strokeWidth="0.6" style={{ pathLength: rightRoof }} />
              <motion.rect x="1000" y="340" width="100" height="280" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" style={{ pathLength: rightWindow }} />
              <motion.line x1="1160" y1="300" x2="1160" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.5" style={{ pathLength: col1 }} />
              <motion.line x1="1280" y1="300" x2="1280" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.5" style={{ pathLength: col2 }} />

              {/* Terrace + steps */}
              <motion.rect x="460" y="680" width="560" height="30" stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none" style={{ pathLength: terrace }} />
              {steps.map((pl, i) => (
                <motion.line key={`step-${i}`} x1="940" y1={680 + i * 13} x2={1020 + i * 10} y2={680 + i * 13} stroke="hsl(var(--foreground))" strokeWidth="0.4" style={{ pathLength: pl }} />
              ))}

              {/* Interior */}
              <motion.rect x="720" y="530" width="100" height="40" stroke="hsl(var(--foreground))" strokeWidth="0.35" fill="none" style={{ pathLength: sofa1 }} />
              <motion.rect x="720" y="510" width="100" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.25" fill="none" style={{ pathLength: sofa2 }} />
              <motion.rect x="540" y="460" width="70" height="35" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: island }} />
              <motion.line x1="575" y1="300" x2="575" y2="380" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: pendantLine }} />
              <motion.rect x="565" y="380" width="20" height="10" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: pendantHead }} />

              {/* Landscape */}
              <motion.line x1="200" y1="680" x2="200" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.4" style={{ pathLength: treeTrunk }} />
              <motion.circle cx="200" cy="600" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" style={{ pathLength: treeCrown1 }} />
              <motion.circle cx="185" cy="615" r="18" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: treeCrown2 }} />
              <motion.line x1="470" y1="680" x2="470" y2="640" stroke="hsl(var(--foreground))" strokeWidth="0.3" style={{ pathLength: smallTree }} />
              <motion.circle cx="470" cy="628" r="18" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: smallTreeCrown }} />
              {shrubs.map((pl, i) => (
                <motion.ellipse key={`shrub-${i}`} cx={560 + i * 80} cy="720" rx="15" ry="8" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" style={{ pathLength: pl }} />
              ))}
              <motion.line x1="0" y1="740" x2="1600" y2="740" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" strokeDasharray="8 8" style={{ pathLength: grassLine }} />

              {/* Dimensions */}
              <motion.line x1="120" y1="770" x2="500" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH1 }} />
              <motion.line x1="500" y1="770" x2="940" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH2 }} />
              <motion.line x1="940" y1="770" x2="1360" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH3 }} />
              {[120, 500, 940, 1360].map((x, i) => (
                <motion.line key={`dt-${i}`} x1={x} y1="765" x2={x} y2="775" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" style={{ pathLength: dimH1 }} />
              ))}
              <motion.line x1="60" y1="250" x2="60" y2="680" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimV }} />

              {/* Labels */}
              <motion.text x="310" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                LIMESTONE FACADE
              </motion.text>
              <motion.text x="720" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                LIVING PAVILION
              </motion.text>
              <motion.text x="1150" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelOpacity }}>
                COVERED TERRACE
              </motion.text>
              <motion.text x="40" y="470" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.1em" transform="rotate(-90, 40, 470)" style={{ opacity: labelOpacity }}>
                ELEVATION
              </motion.text>

              {/* Subtle fills */}
              <motion.rect x="120" y="260" width="380" height="420" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillOpacity1 }} />
              <motion.rect x="940" y="300" width="420" height="380" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillOpacity2 }} />
            </svg>
          </motion.div>

          {/* Photo reveal */}
          <motion.div className="absolute inset-0 z-0" style={{ opacity: photoOpacity, scale: photoScale }}>
            <img src={heroImage} alt="Completed Brio luxury residence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </motion.div>
        </div>

        <motion.p
          className="brio-body text-muted-foreground text-center max-w-xl mx-auto mt-8 px-6"
          style={{ opacity: useTransform(scrollYProgress, [0.55, 0.65], [0, 1]) }}
        >
          Every Brio home begins as a single line — drawn with intention, refined with precision, and built to stand the test of time.
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintAnimation;
