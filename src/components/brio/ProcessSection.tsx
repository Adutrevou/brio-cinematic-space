import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  { number: "01", title: "Consultation", description: "Understanding your vision, site, and aspirations." },
  { number: "02", title: "Concept", description: "Translating ideas into spatial narratives." },
  { number: "03", title: "Design", description: "Refining every detail with precision." },
  { number: "04", title: "Engineering", description: "Structural and technical resolution." },
  { number: "05", title: "Construction", description: "Meticulous execution on site." },
  { number: "06", title: "Technology", description: "Seamless smart integration." },
  { number: "07", title: "Handover", description: "Your story, beautifully composed." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="brio-section" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Process
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="brio-heading-lg mb-20 max-w-2xl"
        >
          From first conversation to final detail
        </motion.h2>

        {/* Horizontal scroll on desktop */}
        <div className="overflow-x-auto scrollbar-hide -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24">
          <div className="flex gap-px min-w-max">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="w-48 md:w-56 flex-shrink-0 border-l border-border pl-6 pr-4"
              >
                <span className="brio-caption text-brushed-metal block mb-4">{stage.number}</span>
                <h3 className="font-serif text-xl font-light mb-3">{stage.title}</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
