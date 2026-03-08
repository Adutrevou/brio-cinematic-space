import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import blueprintFinal from "@/assets/blueprint-final.png";

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const gridOpacity = useTransform(scrollYProgress, [0, 0.06, 0.62, 0.70], [0, 0.04, 0.04, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.03, 0.10, 0.64, 0.72], [0, 1, 1, 0]);
  const closingOpacity = useTransform(scrollYProgress, [0.70, 0.80], [0, 1]);

  // Glow behind the drawing
  const glowOpacity = useTransform(scrollYProgress, [0.30, 0.50, 0.62, 0.70], [0, 0.06, 0.06, 0]);

  // PHASE 8: Blueprint zooms in, then crossfades to photo — all done by 0.75
  const blueprintScale = useTransform(scrollYProgress, [0.50, 0.62], [1, 1.35]);
  const blueprintOpacity = useTransform(scrollYProgress, [0.58, 0.66], [1, 0]);
  const photoOpacity = useTransform(scrollYProgress, [0.60, 0.68], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.60, 0.80], [1.35, 1.45]);

  const l = (s: number, e: number) => useTransform(scrollYProgress, [s, e], [0, 1]);

  // Stroke styles
  const bright = "hsl(var(--foreground) / 0.85)";
  const mid = "hsl(var(--foreground) / 0.55)";
  const faint = "hsl(var(--foreground) / 0.3)";
  const accent = "hsl(var(--foreground) / 0.12)";

  // ═══════════════════════════════════════
  // PHASE 1: Foundation & Ground (0.04–0.14)
  // ═══════════════════════════════════════
  const groundMain = l(0.04, 0.12);
  const groundSub = l(0.05, 0.13);
  const foundation = l(0.06, 0.14);

  // ═══════════════════════════════════════
  // PHASE 2: Walls rise (0.08–0.24)
  // ═══════════════════════════════════════
  const leftWallOuter = l(0.08, 0.18);
  const leftWallInner = l(0.09, 0.19);
  const stoneJoints = [0, 1, 2, 3, 4, 5].map(i => l(0.14 + i * 0.007, 0.22 + i * 0.007));
  const centerRecess = l(0.10, 0.20);
  const glassFrame = l(0.11, 0.21);
  const mullion1 = l(0.15, 0.23);
  const mullion2 = l(0.16, 0.24);
  const mullion3 = l(0.17, 0.25);
  const rightWall = l(0.12, 0.22);
  const rightInnerWalls = [0, 1, 2, 3].map(i => l(0.16 + i * 0.008, 0.24 + i * 0.008));
  const rightDoor = l(0.20, 0.28);
  const rightDoorInner = l(0.21, 0.29);

  // ═══════════════════════════════════════
  // PHASE 3: Roof caps it (0.18–0.30)
  // ═══════════════════════════════════════
  const roofLine1 = l(0.18, 0.26);
  const roofLine2 = l(0.19, 0.27);
  const roofStep = l(0.20, 0.28);
  const roofCap = l(0.21, 0.29);
  const soffit = l(0.22, 0.30);

  // ═══════════════════════════════════════
  // PHASE 4: Details (0.24–0.40)
  // ═══════════════════════════════════════
  const intercom1 = l(0.24, 0.30);
  const intercom2 = l(0.25, 0.31);
  const featurePanel = l(0.26, 0.32);
  const basePlatform = l(0.27, 0.33);
  const steps = [0, 1].map(i => l(0.28 + i * 0.01, 0.34 + i * 0.01));
  const uplights = [0, 1, 2, 3, 4].map(i => l(0.30 + i * 0.005, 0.36 + i * 0.005));

  // ═══════════════════════════════════════
  // PHASE 5: Interior glimpses (0.32–0.44)
  // ═══════════════════════════════════════
  const sofaL = l(0.32, 0.38);
  const sofaBack = l(0.33, 0.39);
  const coffeeTable = l(0.34, 0.40);
  const indoorTree = l(0.35, 0.41);
  const treePot = l(0.36, 0.42);
  const pendantLine = l(0.37, 0.43);
  const pendantShade = l(0.38, 0.44);

  // ═══════════════════════════════════════
  // PHASE 6: Landscape (0.40–0.52)
  // ═══════════════════════════════════════
  const treeTrunk1 = l(0.40, 0.46);
  const treeCrown1a = l(0.41, 0.47);
  const treeCrown1b = l(0.42, 0.48);
  const treeTrunk2 = l(0.43, 0.49);
  const treeCrown2 = l(0.44, 0.50);
  const shrubs = [0, 1, 2, 3, 4].map(i => l(0.44 + i * 0.006, 0.50 + i * 0.006));
  const walkwayLines = l(0.46, 0.52);
  const waterFeature = l(0.47, 0.53);

  // ═══════════════════════════════════════
  // PHASE 7: Annotations (0.52–0.64)
  // ═══════════════════════════════════════
  const dimH = l(0.52, 0.58);
  const dimV = l(0.53, 0.59);
  const dimTicks = l(0.54, 0.60);
  const labelFade = useTransform(scrollYProgress, [0.58, 0.64], [0, 1]);

  // Subtle fill overlays
  const fillLeft = useTransform(scrollYProgress, [0.50, 0.60], [0, 0.03]);
  const fillGlass = useTransform(scrollYProgress, [0.52, 0.62], [0, 0.015]);
  const fillRight = useTransform(scrollYProgress, [0.54, 0.64], [0, 0.025]);

  return (
    <section ref={ref} className="relative" style={{ height: "230vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Architectural grid */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: gridOpacity,
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.2) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Center glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: `radial-gradient(ellipse 60% 50% at 50% 45%, hsl(var(--foreground) / 0.15), transparent)`,
          }}
        />

        <motion.p
          className="brio-caption text-muted-foreground mb-6 md:mb-8 tracking-[0.3em] uppercase text-xs"
          style={{ opacity: captionOpacity }}
        >
          From Blueprint to Reality
        </motion.p>

        <div className="w-full max-w-5xl px-6 md:px-12 relative aspect-[16/9]">
          {/* Photo reveal layer — aligned to building footprint */}
          <motion.div
            className="absolute pointer-events-none overflow-hidden"
            style={{
              opacity: photoOpacity,
              scale: photoScale,
              /* Position to match SVG building footprint:
                 SVG: x 180-1420 of 1600 = 11.25% to 88.75%
                 SVG: y 196-662 of 900 = 21.8% to 73.6% */
              top: "0%",
              left: "0%",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={blueprintFinal}
              alt="Completed Brio residence"
              className="absolute"
              style={{
                /* The photo building is roughly centered horizontally (10%-90% of image)
                   and vertically ~25%-80%. Match to SVG coords. */
                top: "10%",
                left: "3%",
                width: "94%",
                height: "80%",
                objectFit: "cover",
                objectPosition: "50% 48%",
              }}
            />
          </motion.div>

          {/* Blueprint SVG layer */}
          <motion.svg viewBox="0 0 1600 900" className="w-full h-full relative z-10" fill="none" style={{ opacity: blueprintOpacity, scale: blueprintScale }}>

            {/* ── GROUND & FOUNDATION ── */}
            <motion.line x1="0" y1="640" x2="1600" y2="640" stroke={bright} strokeWidth="0.8" style={{ pathLength: groundMain }} />
            <motion.line x1="100" y1="648" x2="1500" y2="648" stroke={faint} strokeWidth="0.3" style={{ pathLength: groundSub }} />
            <motion.rect x="160" y="640" width="1260" height="12" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: foundation }} />

            {/* ── LEFT STONE BLOCK ── */}
            <motion.rect x="180" y="230" width="360" height="410" stroke={bright} strokeWidth="1" fill="none" style={{ pathLength: leftWallOuter }} />
            <motion.rect x="186" y="236" width="348" height="398" stroke={faint} strokeWidth="0.25" fill="none" style={{ pathLength: leftWallInner }} />
            {stoneJoints.map((pl, i) => (
              <motion.line key={`sj-${i}`} x1="180" y1={300 + i * 58} x2="540" y2={300 + i * 58} stroke={mid} strokeWidth="0.35" style={{ pathLength: pl }} />
            ))}
            {/* Corner detail */}
            <motion.line x1="180" y1="230" x2="180" y2="212" stroke={mid} strokeWidth="0.6" style={{ pathLength: leftWallOuter }} />
            <motion.line x1="168" y1="212" x2="182" y2="212" stroke={mid} strokeWidth="0.5" style={{ pathLength: leftWallOuter }} />

            {/* ── CENTER RECESS PANEL ── */}
            <motion.rect x="540" y="230" width="130" height="410" stroke={mid} strokeWidth="0.6" fill="none" style={{ pathLength: centerRecess }} />

            {/* ── CENTRAL GLASS WALL ── */}
            <motion.rect x="670" y="230" width="400" height="410" stroke={bright} strokeWidth="0.9" fill="none" style={{ pathLength: glassFrame }} />
            <motion.line x1="670" y1="242" x2="1070" y2="242" stroke={faint} strokeWidth="0.35" style={{ pathLength: glassFrame }} />
            <motion.line x1="770" y1="230" x2="770" y2="640" stroke={mid} strokeWidth="0.6" style={{ pathLength: mullion1 }} />
            <motion.line x1="870" y1="230" x2="870" y2="640" stroke={mid} strokeWidth="0.6" style={{ pathLength: mullion2 }} />
            <motion.line x1="970" y1="230" x2="970" y2="640" stroke={mid} strokeWidth="0.6" style={{ pathLength: mullion3 }} />

            {/* ── RIGHT WING ── */}
            <motion.rect x="1070" y="230" width="350" height="410" stroke={bright} strokeWidth="0.9" fill="none" style={{ pathLength: rightWall }} />
            {rightInnerWalls.map((pl, i) => (
              <motion.line key={`rw-${i}`} x1={[1130, 1210, 1320, 1380][i]} y1="230" x2={[1130, 1210, 1320, 1380][i]} y2="640" stroke={faint} strokeWidth="0.4" style={{ pathLength: pl }} />
            ))}
            <motion.rect x="1148" y="296" width="120" height="280" stroke={mid} strokeWidth="0.6" fill="none" style={{ pathLength: rightDoor }} />
            <motion.rect x="1160" y="312" width="96" height="248" stroke={faint} strokeWidth="0.35" fill="none" style={{ pathLength: rightDoorInner }} />

            {/* ── ROOF ── */}
            <motion.line x1="160" y1="212" x2="930" y2="212" stroke={bright} strokeWidth="1" style={{ pathLength: roofLine1 }} />
            <motion.line x1="160" y1="200" x2="930" y2="200" stroke={mid} strokeWidth="0.5" style={{ pathLength: roofLine2 }} />
            <motion.line x1="930" y1="212" x2="930" y2="222" stroke={mid} strokeWidth="0.6" style={{ pathLength: roofStep }} />
            <motion.line x1="930" y1="222" x2="1440" y2="222" stroke={bright} strokeWidth="0.8" style={{ pathLength: roofCap }} />
            <motion.line x1="930" y1="196" x2="1440" y2="196" stroke={faint} strokeWidth="0.35" style={{ pathLength: soffit }} />

            {/* ── DETAILS ── */}
            <motion.rect x="588" y="324" width="26" height="20" stroke={mid} strokeWidth="0.5" fill="none" style={{ pathLength: intercom1 }} />
            <motion.rect x="580" y="394" width="36" height="30" stroke={mid} strokeWidth="0.5" fill="none" style={{ pathLength: intercom2 }} />
            <motion.rect x="640" y="478" width="46" height="38" stroke={mid} strokeWidth="0.5" fill="none" style={{ pathLength: featurePanel }} />

            {/* ── BASE & STEPS ── */}
            <motion.rect x="580" y="640" width="490" height="22" stroke={mid} strokeWidth="0.5" fill="none" style={{ pathLength: basePlatform }} />
            {steps.map((pl, i) => (
              <motion.line key={`st-${i}`} x1={600 + i * 10} y1={662 + i * 12} x2={1050 - i * 10} y2={662 + i * 12} stroke={faint} strokeWidth="0.4" style={{ pathLength: pl }} />
            ))}
            {uplights.map((pl, i) => (
              <motion.circle key={`ul-${i}`} cx={700 + i * 52} cy="654" r="3" stroke={mid} strokeWidth="0.4" fill="none" style={{ pathLength: pl }} />
            ))}

            {/* ── INTERIOR ── */}
            <motion.rect x="730" y="520" width="100" height="40" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: sofaL }} />
            <motion.rect x="730" y="500" width="100" height="20" stroke={faint} strokeWidth="0.25" fill="none" style={{ pathLength: sofaBack }} />
            <motion.rect x="750" y="570" width="60" height="30" stroke={faint} strokeWidth="0.2" fill="none" style={{ pathLength: coffeeTable }} />
            <motion.line x1="920" y1="640" x2="920" y2="490" stroke={faint} strokeWidth="0.3" style={{ pathLength: indoorTree }} />
            <motion.circle cx="920" cy="472" r="28" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: indoorTree }} />
            <motion.rect x="906" y="610" width="28" height="30" stroke={faint} strokeWidth="0.2" fill="none" style={{ pathLength: treePot }} />
            <motion.line x1="800" y1="230" x2="800" y2="340" stroke={faint} strokeWidth="0.25" style={{ pathLength: pendantLine }} />
            <motion.ellipse cx="800" cy="348" rx="14" ry="6" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: pendantShade }} />

            {/* ── LANDSCAPE ── */}
            <motion.line x1="240" y1="640" x2="240" y2="560" stroke={mid} strokeWidth="0.45" style={{ pathLength: treeTrunk1 }} />
            <motion.circle cx="240" cy="538" r="26" stroke={mid} strokeWidth="0.4" fill="none" style={{ pathLength: treeCrown1a }} />
            <motion.circle cx="256" cy="550" r="16" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: treeCrown1b }} />
            <motion.line x1="1400" y1="640" x2="1400" y2="565" stroke={mid} strokeWidth="0.4" style={{ pathLength: treeTrunk2 }} />
            <motion.circle cx="1400" cy="542" r="24" stroke={mid} strokeWidth="0.4" fill="none" style={{ pathLength: treeCrown2 }} />
            {shrubs.map((pl, i) => (
              <motion.ellipse key={`sh-${i}`} cx={[320, 440, 1260, 1340, 1460][i]} cy="632" rx="18" ry="10" stroke={faint} strokeWidth="0.3" fill="none" style={{ pathLength: pl }} />
            ))}
            <motion.line x1="660" y1="674" x2="660" y2="830" stroke={faint} strokeWidth="0.4" style={{ pathLength: walkwayLines }} />
            <motion.line x1="940" y1="674" x2="940" y2="830" stroke={faint} strokeWidth="0.4" style={{ pathLength: walkwayLines }} />
            <motion.line x1="600" y1="830" x2="1000" y2="830" stroke={faint} strokeWidth="0.3" style={{ pathLength: walkwayLines }} />
            <motion.rect x="440" y="680" width="160" height="100" stroke={faint} strokeWidth="0.25" fill="none" style={{ pathLength: waterFeature }} />
            <motion.rect x="1000" y="680" width="160" height="100" stroke={faint} strokeWidth="0.25" fill="none" style={{ pathLength: waterFeature }} />

            {/* ── ANNOTATIONS ── */}
            <motion.line x1="180" y1="870" x2="1420" y2="870" stroke={accent} strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimH }} />
            {[180, 540, 670, 1070, 1420].map((x, i) => (
              <motion.line key={`t-${i}`} x1={x} y1="865" x2={x} y2="875" stroke={accent} strokeWidth="0.4" style={{ pathLength: dimTicks }} />
            ))}
            <motion.line x1="110" y1="200" x2="110" y2="640" stroke={accent} strokeWidth="0.4" strokeDasharray="4 4" style={{ pathLength: dimV }} />
            {[200, 430, 640].map((y, i) => (
              <motion.line key={`tv-${i}`} x1="105" y1={y} x2="115" y2={y} stroke={accent} strokeWidth="0.4" style={{ pathLength: dimTicks }} />
            ))}

            {/* Labels */}
            <motion.text x="360" y="892" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelFade }}>
              STONE FACADE
            </motion.text>
            <motion.text x="870" y="892" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelFade }}>
              GLASS PAVILION
            </motion.text>
            <motion.text x="1245" y="892" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.2em" style={{ opacity: labelFade }}>
              PRIVATE WING
            </motion.text>
            <motion.text x="90" y="425" textAnchor="middle" className="fill-muted-foreground" fontSize="9" fontFamily="var(--font-sans)" letterSpacing="0.15em" transform="rotate(-90, 90, 425)" style={{ opacity: labelFade }}>
              ELEVATION 4.2m
            </motion.text>

            {/* Subtle fills */}
            <motion.rect x="180" y="230" width="360" height="410" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillLeft }} />
            <motion.rect x="670" y="230" width="400" height="410" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillGlass }} />
            <motion.rect x="1070" y="230" width="350" height="410" fill="hsl(var(--foreground))" stroke="none" style={{ opacity: fillRight }} />
          </motion.svg>
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
