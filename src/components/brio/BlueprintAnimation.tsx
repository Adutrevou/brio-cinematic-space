import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 2, delay, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.4, delay } },
  }),
};

const fade = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] } },
});

const BlueprintAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="brio-container px-6 md:px-12 lg:px-24">
        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="brio-caption text-muted-foreground mb-12 text-center"
        >
          From Blueprint to Reality
        </motion.p>

        {/* SVG Blueprint Animation */}
        <div className="max-w-5xl mx-auto">
          <motion.svg
            viewBox="0 0 1200 500"
            className="w-full h-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Foundation / ground line */}
            <motion.line
              x1="100" y1="400" x2="1100" y2="400"
              stroke="hsl(var(--foreground))" strokeWidth="1"
              variants={draw} custom={0}
            />

            {/* Main building - left block */}
            <motion.rect
              x="180" y="160" width="320" height="240" rx="0"
              stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none"
              variants={draw} custom={0.3}
            />

            {/* Main building - right block (taller) */}
            <motion.rect
              x="500" y="100" width="280" height="300" rx="0"
              stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none"
              variants={draw} custom={0.5}
            />

            {/* Cantilevered section */}
            <motion.rect
              x="780" y="180" width="200" height="220" rx="0"
              stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none"
              variants={draw} custom={0.7}
            />

            {/* Roof lines */}
            <motion.line
              x1="180" y1="160" x2="500" y2="160"
              stroke="hsl(var(--foreground))" strokeWidth="0.5"
              variants={draw} custom={0.9}
            />
            <motion.line
              x1="500" y1="100" x2="780" y2="100"
              stroke="hsl(var(--foreground))" strokeWidth="0.5"
              variants={draw} custom={1.0}
            />
            <motion.line
              x1="780" y1="180" x2="980" y2="180"
              stroke="hsl(var(--foreground))" strokeWidth="0.5"
              variants={draw} custom={1.1}
            />

            {/* Windows - left block */}
            {[0, 1, 2].map((col) =>
              [0, 1].map((row) => (
                <motion.rect
                  key={`wl-${col}-${row}`}
                  x={220 + col * 90} y={200 + row * 90} width="50" height="60" rx="0"
                  stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none"
                  variants={draw} custom={1.3 + col * 0.1 + row * 0.15}
                />
              ))
            )}

            {/* Windows - right block (tall) */}
            {[0, 1].map((col) =>
              [0, 1, 2].map((row) => (
                <motion.rect
                  key={`wr-${col}-${row}`}
                  x={540 + col * 100} y={135 + row * 80} width="55" height="55" rx="0"
                  stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none"
                  variants={draw} custom={1.5 + col * 0.1 + row * 0.12}
                />
              ))
            )}

            {/* Windows - cantilever */}
            {[0, 1].map((row) => (
              <motion.rect
                key={`wc-${row}`}
                x="820" y={220 + row * 80} width="120" height="50" rx="0"
                stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none"
                variants={draw} custom={1.8 + row * 0.15}
              />
            ))}

            {/* Door */}
            <motion.rect
              x="600" y="340" width="60" height="60" rx="0"
              stroke="hsl(var(--foreground))" strokeWidth="0.6" fill="none"
              variants={draw} custom={2.0}
            />

            {/* Dimension lines */}
            <motion.line
              x1="180" y1="430" x2="500" y2="430"
              stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4"
              variants={draw} custom={2.2}
            />
            <motion.line
              x1="500" y1="430" x2="780" y2="430"
              stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4"
              variants={draw} custom={2.3}
            />
            <motion.line
              x1="780" y1="430" x2="980" y2="430"
              stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4"
              variants={draw} custom={2.4}
            />

            {/* Vertical dimension */}
            <motion.line
              x1="140" y1="100" x2="140" y2="400"
              stroke="hsl(var(--muted-foreground))" strokeWidth="0.4" strokeDasharray="4 4"
              variants={draw} custom={2.5}
            />

            {/* Dimension ticks */}
            {[100, 160, 400].map((y, i) => (
              <motion.line
                key={`tick-${i}`}
                x1="135" y1={y} x2="145" y2={y}
                stroke="hsl(var(--muted-foreground))" strokeWidth="0.4"
                variants={draw} custom={2.6 + i * 0.05}
              />
            ))}

            {/* Labels that fade in */}
            <motion.text
              x="340" y="450" textAnchor="middle"
              className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.15em"
              variants={fade(2.8)}
            >
              LIVING
            </motion.text>
            <motion.text
              x="640" y="450" textAnchor="middle"
              className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.15em"
              variants={fade(2.9)}
            >
              STUDIO
            </motion.text>
            <motion.text
              x="880" y="450" textAnchor="middle"
              className="fill-muted-foreground" fontSize="10" fontFamily="var(--font-sans)" letterSpacing="0.15em"
              variants={fade(3.0)}
            >
              TERRACE
            </motion.text>

            {/* Elevation label */}
            <motion.text
              x="120" y="255" textAnchor="middle"
              className="fill-muted-foreground" fontSize="9" fontFamily="var(--font-sans)" letterSpacing="0.1em"
              transform="rotate(-90, 120, 255)"
              variants={fade(3.1)}
            >
              ELEVATION
            </motion.text>

            {/* Landscape elements - trees (circles) */}
            <motion.circle
              cx="120" cy="380" r="20"
              stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none"
              variants={draw} custom={3.0}
            />
            <motion.line
              x1="120" y1="400" x2="120" y2="380"
              stroke="hsl(var(--foreground))" strokeWidth="0.4"
              variants={draw} custom={3.0}
            />
            <motion.circle
              cx="1050" cy="370" r="25"
              stroke="hsl(var(--foreground))" strokeWidth="0.4" fill="none"
              variants={draw} custom={3.1}
            />
            <motion.line
              x1="1050" y1="400" x2="1050" y2="370"
              stroke="hsl(var(--foreground))" strokeWidth="0.4"
              variants={draw} custom={3.1}
            />

            {/* Filled surfaces fade in for depth */}
            <motion.rect
              x="500" y="100" width="280" height="300"
              fill="hsl(var(--foreground))" stroke="none"
              variants={fade(3.2)}
              style={{ opacity: 0 }}
              animate={inView ? { opacity: 0.03 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 3.2 }}
            />
            <motion.rect
              x="180" y="160" width="320" height="240"
              fill="hsl(var(--foreground))" stroke="none"
              variants={fade(3.3)}
              style={{ opacity: 0 }}
              animate={inView ? { opacity: 0.02 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 3.3 }}
            />
            <motion.rect
              x="780" y="180" width="200" height="220"
              fill="hsl(var(--foreground))" stroke="none"
              variants={fade(3.4)}
              style={{ opacity: 0 }}
              animate={inView ? { opacity: 0.015 } : { opacity: 0 }}
              transition={{ duration: 2, delay: 3.4 }}
            />
          </motion.svg>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="brio-body text-muted-foreground text-center max-w-xl mx-auto mt-12"
        >
          Every Brio home begins as a single line — drawn with intention, refined with precision, and built to stand the test of time.
        </motion.p>
      </div>
    </section>
  );
};

export default BlueprintAnimation;
