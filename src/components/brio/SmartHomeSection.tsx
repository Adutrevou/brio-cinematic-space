import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "◯", title: "Unified Control", description: "One interface for every system in your home." },
  { icon: "◇", title: "Fully Documented", description: "Complete system documentation and handover." },
  { icon: "△", title: "24/7 Monitoring", description: "Cloud-based monitoring and remote support." },
  { icon: "□", title: "Seamless Integration", description: "Technology designed into architecture, not added." },
];

const SmartHomeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="brio-section brio-dark" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-dark-surface-foreground/50 mb-16"
        >
          Technology
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="brio-heading-lg text-dark-surface-foreground mb-8"
            >
              Technology that disappears into architecture
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="brio-body text-dark-surface-foreground/60 max-w-md"
            >
              Lighting, climate, audio, security, cinema — every system unified under a single intelligent layer, 
              designed from day one as part of your home's architecture.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="border-l border-dark-surface-foreground/10 pl-6"
              >
                <span className="text-2xl text-dark-surface-foreground/30 block mb-4">{f.icon}</span>
                <h4 className="font-serif text-lg text-dark-surface-foreground mb-2">{f.title}</h4>
                <p className="font-sans text-sm text-dark-surface-foreground/50 font-light">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHomeSection;
