import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Brio began when two brothers fused a deep love",
  "for design with a simple belief —",
  "your home should tell your story.",
  "",
  "We don't design spectacles.",
  "We design intention, precision,",
  "and lived experience.",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="brio-section" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Philosophy
        </motion.p>

        <div className="max-w-3xl">
          {lines.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-8" />
            ) : (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="brio-heading-lg mb-2"
              >
                {line}
              </motion.p>
            )
          )}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="brio-divider mt-16 origin-left"
        />
      </div>
    </section>
  );
};

export default AboutSection;
