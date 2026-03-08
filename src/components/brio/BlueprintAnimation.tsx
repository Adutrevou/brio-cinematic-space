import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-residence.jpg";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.8, delay, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3, delay } },
  }),
};

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background grid */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.03 }}
        animate={inView ? { opacity: 0 } : { opacity: 0.03 }}
        transition={{ duration: 1.5, delay: 3.5 }}
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="brio-container px-6 md:px-12 lg:px-24">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="brio-caption text-muted-foreground mb-12 text-center"
        >
          From Blueprint to Reality
        </motion.p>

        <div className="max-w-5xl mx-auto relative aspect-[16/9] overflow-hidden">
          {/* Blueprint SVG layer */}
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={inView ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 1.8, delay: 4.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.svg
              viewBox="0 0 1600 900"
              className="w-full h-full"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* ── Ground line ── */}
              <motion.line x1="0" y1="680" x2="1600" y2="680" stroke="hsl(var(--foreground))" strokeWidth="1" variants={draw} custom={0} />

              {/* ── Left solid limestone block ── */}
              <motion.rect x="120" y="260" width="380" height="420" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" variants={draw} custom={0.2} />
              
              {/* Limestone panel lines (horizontal joints) */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.line key={`stone-${i}`} x1="120" y1={330 + i * 60} x2="500" y2={330 + i * 60} stroke="hsl(var(--foreground))" strokeWidth="0.3" variants={draw} custom={0.8 + i * 0.06} />
              ))}

              {/* ── Central glass wall (3 panels) ── */}
              <motion.rect x="500" y="300" width="440" height="380" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" variants={draw} custom={0.4} />
              
              {/* Glass panel dividers (2 vertical mullions) */}
              <motion.line x1="647" y1="300" x2="647" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.6" variants={draw} custom={1.0} />
              <motion.line x1="793" y1="300" x2="793" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.6" variants={draw} custom={1.1} />

              {/* Header beam above glass */}
              <motion.rect x="500" y="280" width="440" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none" variants={draw} custom={0.6} />

              {/* ── Top fascia / roof overhang spanning left + center ── */}
              <motion.line x1="100" y1="260" x2="960" y2="260" stroke="hsl(var(--foreground))" strokeWidth="0.8" variants={draw} custom={0.5} />
              <motion.line x1="100" y1="250" x2="960" y2="250" stroke="hsl(var(--foreground))" strokeWidth="0.4" variants={draw} custom={0.55} />

              {/* ── Right wing (recessed, slightly lower) ── */}
              <motion.rect x="940" y="300" width="420" height="380" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" variants={draw} custom={0.6} />
              
              {/* Right wing roof line */}
              <motion.line x1="940" y1="290" x2="1380" y2="290" stroke="hsl(var(--foreground))" strokeWidth="0.6" variants={draw} custom={0.7} />

              {/* Right wing tall window */}
              <motion.rect x="1000" y="340" width="100" height="280" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" variants={draw} custom={1.3} />

              {/* Right wing covered entrance area (columns) */}
              <motion.line x1="1160" y1="300" x2="1160" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.5" variants={draw} custom={1.4} />
              <motion.line x1="1280" y1="300" x2="1280" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.5" variants={draw} custom={1.45} />

              {/* ── Terrace / platform ── */}
              <motion.rect x="460" y="680" width="560" height="30" stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none" variants={draw} custom={1.5} />
              
              {/* Steps on right side */}
              <motion.line x1="940" y1="680" x2="1020" y2="680" stroke="hsl(var(--foreground))" strokeWidth="0.5" variants={draw} custom={1.6} />
              <motion.line x1="940" y1="693" x2="1030" y2="693" stroke="hsl(var(--foreground))" strokeWidth="0.4" variants={draw} custom={1.65} />
              <motion.line x1="940" y1="706" x2="1040" y2="706" stroke="hsl(var(--foreground))" strokeWidth="0.4" variants={draw} custom={1.7} />

              {/* ── Interior elements visible through glass ── */}
              {/* Sofa outline */}
              <motion.rect x="720" y="530" width="100" height="40" stroke="hsl(var(--foreground))" strokeWidth="0.35" fill="none" variants={draw} custom={2.0} />
              <motion.rect x="720" y="510" width="100" height="20" stroke="hsl(var(--foreground))" strokeWidth="0.25" fill="none" variants={draw} custom={2.05} />
              
              {/* Kitchen island */}
              <motion.rect x="540" y="460" width="70" height="35" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" variants={draw} custom={2.1} />
              
              {/* Pendant light */}
              <motion.line x1="575" y1="300" x2="575" y2="380" stroke="hsl(var(--foreground))" strokeWidth="0.3" variants={draw} custom={2.2} />
              <motion.rect x="565" y="380" width="20" height="10" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" variants={draw} custom={2.25} />

              {/* ── Landscaping ── */}
              {/* Tree on left */}
              <motion.line x1="200" y1="680" x2="200" y2="620" stroke="hsl(var(--foreground))" strokeWidth="0.4" variants={draw} custom={2.5} />
              <motion.circle cx="200" cy="600" r="30" stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none" variants={draw} custom={2.6} />
              <motion.circle cx="185" cy="615" r="18" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" variants={draw} custom={2.65} />

              {/* Small tree near left wall */}
              <motion.line x1="470" y1="680" x2="470" y2="640" stroke="hsl(var(--foreground))" strokeWidth="0.3" variants={draw} custom={2.7} />
              <motion.circle cx="470" cy="628" r="18" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" variants={draw} custom={2.75} />

              {/* Shrubs along terrace */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.ellipse key={`shrub-${i}`} cx={560 + i * 80} cy="720" rx="15" ry="8" stroke="hsl(var(--foreground))" strokeWidth="0.3" fill="none" variants={draw} custom={2.8 + i * 0.05} />
              ))}

              {/* Grass line */}
              <motion.line x1="0" y1="740" x2="1600" y2="740" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" strokeDasharray="8 8" variants={draw} custom={2.9} />

              {/* ── Dimension annotations ── */}
              {/* Horizontal dims */}
              <motion.line x1="120" y1="770" x2="500" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" variants={draw} custom={3.0} />
              <motion.line x1="500" y1="770" x2="940" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" variants={draw} custom={3.1} />
              <motion.line x1="940" y1="770" x2="1360" y2="770" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" variants={draw} custom={3.2} />

              {/* Dimension ticks */}
              {[120, 500, 940, 1360].map((x, i) => (
                <motion.line key={`dtick-${i}`} x1={x} y1="765" x2={x} y2="775" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" variants={draw} custom={3.0 + i * 0.05} />
              ))}

              {/* Vertical dimension */}
              <motion.line x1="60" y1="250" x2="60" y2="680" stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4" variants={draw} custom={3.3} />
              {[250, 680].map((y, i) => (
                <motion.line key={`vtick-${i}`} x1="55" y1={y} x2="65" y2={y} stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" variants={draw} custom={3.3 + i * 0.05} />
              ))}

              {/* Labels */}
              <motion.text x="310" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 3.4 }}>
                LIMESTONE FACADE
              </motion.text>
              <motion.text x="720" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 3.5 }}>
                LIVING PAVILION
              </motion.text>
              <motion.text x="1150" y="790" textAnchor="middle" className="fill-muted-foreground" fontSize="12" fontFamily="var(--font-sans)" letterSpacing="0.2em"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 3.6 }}>
                COVERED TERRACE
              </motion.text>
              <motion.text x="40" y="470" textAnchor="middle" className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.1em"
                transform="rotate(-90, 40, 470)"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 3.7 }}>
                ELEVATION
              </motion.text>

              {/* Subtle fill for depth before fade */}
              <motion.rect x="120" y="260" width="380" height="420" fill="hsl(var(--foreground))" stroke="none"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 0.025 } : {}} transition={{ duration: 2, delay: 3.2 }} />
              <motion.rect x="940" y="300" width="420" height="380" fill="hsl(var(--foreground))" stroke="none"
                initial={{ opacity: 0 }} animate={inView ? { opacity: 0.02 } : {}} transition={{ duration: 2, delay: 3.3 }} />
            </motion.svg>
          </motion.div>

          {/* Real building photo */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 2.5, delay: 3.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={heroImage} alt="Completed Brio luxury residence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 5.0, ease: [0.22, 1, 0.36, 1] }}
          className="brio-body text-muted-foreground text-center max-w-xl mx-auto mt-12"
        >
          Every Brio home begins as a single line — drawn with intention, refined with precision, and built to stand the test of time.
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintAnimation;
