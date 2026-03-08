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

  // Phase 1: SVG blueprint draws 0→0.38
  // Phase 2: Blueprint fades, outline photo in 0.36→0.52
  // Phase 3: Outline fades, final photo in 0.50→0.66

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.06, 0.38, 0.48], [0, 1, 1, 0]);
  const outlineOpacity = useTransform(scrollYProgress, [0.36, 0.48, 0.54, 0.64], [0, 1, 1, 0]);
  const outlineScale = useTransform(scrollYProgress, [0.36, 0.54], [1.03, 1]);
  const finalOpacity = useTransform(scrollYProgress, [0.54, 0.68], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.54, 0.74], [1.05, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.06, 0.40, 0.50], [0, 0.03, 0.03, 0]);

  const captionOpacity = useTransform(scrollYProgress, [0.04, 0.12], [0, 1]);
  const closingOpacity = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);

  // Line draw helper
  const l = (s: number, e: number) => useTransform(scrollYProgress, [s, e], [0, 1]);

  // Stroke color
  const s = "hsl(var(--foreground) / 0.7)";
  const sf = "hsl(var(--foreground) / 0.4)"; // faint
  const sm = "hsl(var(--muted-foreground) / 0.5)"; // muted

  // === STRUCTURE (foundation up) ===

  // Ground line (full width)
  const ground = l(0.04, 0.12);

  // Left stone block outer
  const leftBlock = l(0.06, 0.16);
  // Stone horizontal joints (6 lines)
  const sj = [0, 1, 2, 3, 4, 5].map((i) => l(0.10 + i * 0.008, 0.18 + i * 0.008));

  // Roof lines
  const roofTop = l(0.07, 0.15); // top thin line
  const roofMain = l(0.08, 0.16); // main fascia
  const roofStep = l(0.08, 0.16); // stepped portion left
  const roofRight = l(0.09, 0.17); // right fascia

  // Center-left recess panel
  const recessPanel = l(0.10, 0.18);
  const intercom1 = l(0.16, 0.22); // small box upper
  const intercom2 = l(0.17, 0.23); // small box lower
  const stepFeature = l(0.18, 0.24); // larger box at center

  // Central glass wall
  const glassOuter = l(0.11, 0.20);
  const glassTop = l(0.12, 0.20);
  const mullion1 = l(0.14, 0.22);
  const mullion2 = l(0.15, 0.23);
  const mullion3 = l(0.16, 0.24);

  // Right wing
  const rightOuter = l(0.12, 0.21);
  const rightMullions = [0, 1, 2, 3].map((i) => l(0.15 + i * 0.01, 0.23 + i * 0.01));
  const rightDoor = l(0.18, 0.26);
  const rightDoorInner = l(0.19, 0.27);

  // Base platform / steps
  const basePlatform = l(0.13, 0.22);
  const stepLine1 = l(0.14, 0.23);
  const stepLine2 = l(0.15, 0.24);

  // Uplights (wavy/circle)
  const uplights = [0, 1, 2, 3].map((i) => l(0.24 + i * 0.006, 0.30 + i * 0.006));

  // Bottom walkway
  const walkwayLeft = l(0.18, 0.26);
  const walkwayRight = l(0.18, 0.26);
  const walkwayBottom = l(0.20, 0.28);

  // Landscape
  const treeTrunk1 = l(0.26, 0.32);
  const treeCrown1 = l(0.27, 0.33);
  const shrub1 = l(0.28, 0.34);
  const shrubTrunk1 = l(0.27, 0.33);

  // Dimension lines
  const dimBottom = l(0.30, 0.36);

  // Labels
  const labelOpacity = useTransform(scrollYProgress, [0.34, 0.40], [0, 1]);

  return (
    <section ref={ref} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Grid bg */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: gridOpacity,
            backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.15) 1px, transparent 1px)`,
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
          {/* Phase 1: SVG Blueprint */}
          <motion.div className="absolute inset-0 z-20" style={{ opacity: blueprintOpacity }}>
            <svg viewBox="0 0 1600 900" className="w-full h-full" fill="none">
              {/* ── GROUND LINE ── */}
              <motion.line x1="0" y1="638" x2="1600" y2="638" stroke={s} strokeWidth="0.8" style={{ pathLength: ground }} />

              {/* ── ROOF ── */}
              {/* Top thin roof overhang line */}
              <motion.line x1="175" y1="195" x2="1385" y2="195" stroke={sf} strokeWidth="0.5" style={{ pathLength: roofTop }} />
              {/* Main roof fascia - left portion */}
              <motion.line x1="168" y1="210" x2="920" y2="210" stroke={s} strokeWidth="0.8" style={{ pathLength: roofMain }} />
              {/* Roof step-down connecting line */}
              <motion.line x1="920" y1="210" x2="920" y2="220" stroke={s} strokeWidth="0.6" style={{ pathLength: roofStep }} />
              {/* Right roof fascia */}
              <motion.line x1="920" y1="220" x2="1385" y2="220" stroke={s} strokeWidth="0.7" style={{ pathLength: roofRight }} />
              {/* Tiny roof cap top-left */}
              <motion.line x1="168" y1="200" x2="180" y2="200" stroke={sf} strokeWidth="0.4" style={{ pathLength: roofTop }} />

              {/* ── LEFT STONE BLOCK ── */}
              <motion.rect x="180" y="228" width="360" height="410" stroke={s} strokeWidth="0.9" fill="none" style={{ pathLength: leftBlock }} />
              {/* Horizontal stone joints */}
              {sj.map((pl, i) => (
                <motion.line key={`sj-${i}`} x1="180" y1={298 + i * 58} x2="540" y2={298 + i * 58} stroke={sf} strokeWidth="0.35" style={{ pathLength: pl }} />
              ))}
              {/* Top-left notch/step in stone block */}
              <motion.line x1="180" y1="228" x2="180" y2="210" stroke={s} strokeWidth="0.6" style={{ pathLength: leftBlock }} />
              <motion.line x1="168" y1="210" x2="180" y2="210" stroke={s} strokeWidth="0.6" style={{ pathLength: leftBlock }} />

              {/* ── CENTER-LEFT RECESS / ENTRY ── */}
              <motion.rect x="540" y="228" width="130" height="410" stroke={s} strokeWidth="0.6" fill="none" style={{ pathLength: recessPanel }} />
              {/* Intercom box 1 (upper small) */}
              <motion.rect x="585" y="322" width="28" height="22" stroke={s} strokeWidth="0.5" fill="none" style={{ pathLength: intercom1 }} />
              {/* Intercom box 2 (lower) */}
              <motion.rect x="578" y="392" width="38" height="32" stroke={s} strokeWidth="0.5" fill="none" style={{ pathLength: intercom2 }} />
              {/* Larger feature element (mail/panel) at center */}
              <motion.rect x="638" y="472" width="48" height="42" stroke={s} strokeWidth="0.5" fill="none" style={{ pathLength: stepFeature }} />

              {/* ── CENTRAL GLASS WALL ── */}
              <motion.rect x="670" y="228" width="400" height="410" stroke={s} strokeWidth="0.8" fill="none" style={{ pathLength: glassOuter }} />
              {/* Glass header beam */}
              <motion.line x1="670" y1="240" x2="1070" y2="240" stroke={sf} strokeWidth="0.4" style={{ pathLength: glassTop }} />
              {/* 3 vertical mullions (4 panels) */}
              <motion.line x1="770" y1="228" x2="770" y2="638" stroke={s} strokeWidth="0.6" style={{ pathLength: mullion1 }} />
              <motion.line x1="870" y1="228" x2="870" y2="638" stroke={s} strokeWidth="0.6" style={{ pathLength: mullion2 }} />
              <motion.line x1="970" y1="228" x2="970" y2="638" stroke={s} strokeWidth="0.6" style={{ pathLength: mullion3 }} />

              {/* ── RIGHT WING ── */}
              <motion.rect x="1070" y="228" width="315" height="410" stroke={s} strokeWidth="0.8" fill="none" style={{ pathLength: rightOuter }} />
              {/* Vertical mullions/columns in right wing */}
              {rightMullions.map((pl, i) => (
                <motion.line key={`rm-${i}`} x1={[1130, 1200, 1300, 1350][i]} y1="228" x2={[1130, 1200, 1300, 1350][i]} y2="638" stroke={sf} strokeWidth="0.45" style={{ pathLength: pl }} />
              ))}
              {/* Recessed door/window */}
              <motion.rect x="1140" y="290" width="110" height="280" stroke={s} strokeWidth="0.7" fill="none" style={{ pathLength: rightDoor }} />
              <motion.rect x="1155" y="310" width="80" height="240" stroke={sf} strokeWidth="0.4" fill="none" style={{ pathLength: rightDoorInner }} />

              {/* ── BASE PLATFORM / STEPS ── */}
              <motion.rect x="580" y="638" width="490" height="24" stroke={s} strokeWidth="0.5" fill="none" style={{ pathLength: basePlatform }} />
              <motion.line x1="600" y1="662" x2="1050" y2="662" stroke={sf} strokeWidth="0.4" style={{ pathLength: stepLine1 }} />
              <motion.line x1="610" y1="672" x2="1040" y2="672" stroke={sf} strokeWidth="0.3" style={{ pathLength: stepLine2 }} />

              {/* Uplights along step edge */}
              {uplights.map((pl, i) => (
                <motion.path key={`ul-${i}`} d={`M${720 + i * 60},652 q4,-6 8,0 q4,6 8,0`} stroke={sf} strokeWidth="0.4" fill="none" style={{ pathLength: pl }} />
              ))}

              {/* ── BOTTOM WALKWAY ── */}
              <motion.line x1="640" y1="672" x2="640" y2="820" stroke={sf} strokeWidth="0.4" style={{ pathLength: walkwayLeft }} />
              <motion.line x1="960" y1="672" x2="960" y2="820" stroke={sf} strokeWidth="0.4" style={{ pathLength: walkwayRight }} />
              <motion.line x1="580" y1="820" x2="1050" y2="820" stroke={sf} strokeWidth="0.35" style={{ pathLength: walkwayBottom }} />
              {/* Center line of walkway */}
              <motion.line x1="800" y1="672" x2="800" y2="820" stroke={sm} strokeWidth="0.2" strokeDasharray="4 6" style={{ pathLength: walkwayBottom }} />

              {/* ── LANDSCAPE ── */}
              {/* Left tree (small circle + trunk) */}
              <motion.line x1="250" y1="638" x2="250" y2="605" stroke={sf} strokeWidth="0.4" style={{ pathLength: treeTrunk1 }} />
              <motion.circle cx="250" cy="592" r="16" stroke={sf} strokeWidth="0.4" fill="none" style={{ pathLength: treeCrown1 }} />
              {/* Second small shrub/tree */}
              <motion.line x1="370" y1="638" x2="370" y2="612" stroke={sf} strokeWidth="0.35" style={{ pathLength: shrubTrunk1 }} />
              <motion.circle cx="370" cy="602" r="12" stroke={sf} strokeWidth="0.35" fill="none" style={{ pathLength: shrub1 }} />

              {/* ── DIMENSION / ANNOTATION LINES ── */}
              <motion.line x1="180" y1="860" x2="1385" y2="860" stroke={sm} strokeWidth="0.3" strokeDasharray="4 4" style={{ pathLength: dimBottom }} />
              {[180, 540, 670, 1070, 1385].map((x, i) => (
                <motion.line key={`tick-${i}`} x1={x} y1="855" x2={x} y2="865" stroke={sm} strokeWidth="0.3" style={{ pathLength: dimBottom }} />
              ))}

              {/* Labels */}
              <motion.text x="360" y="880" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.18em" style={{ opacity: labelOpacity }}>
                STONE FACADE
              </motion.text>
              <motion.text x="870" y="880" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.18em" style={{ opacity: labelOpacity }}>
                GLASS PAVILION
              </motion.text>
              <motion.text x="1228" y="880" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.18em" style={{ opacity: labelOpacity }}>
                PRIVATE WING
              </motion.text>
            </svg>
          </motion.div>

          {/* Phase 2: Outline photo */}
          <motion.div className="absolute inset-0 z-10 overflow-hidden" style={{ opacity: outlineOpacity, scale: outlineScale }}>
            <img src={outlineImage} alt="Architectural outline with ambient lighting" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/20" />
          </motion.div>

          {/* Phase 3: Final photo */}
          <motion.div className="absolute inset-0 z-0 overflow-hidden" style={{ opacity: finalOpacity, scale: finalScale }}>
            <img src={finalImage} alt="Completed Brio luxury residence" className="w-full h-full object-cover" />
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
