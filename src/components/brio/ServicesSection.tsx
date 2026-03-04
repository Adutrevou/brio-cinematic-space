import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Architecture",
    description: "From concept to completion — bespoke residential and commercial architecture that responds to site, light, and the way you live.",
  },
  {
    number: "02",
    title: "Interior Design",
    description: "Material-driven interiors crafted with intention. Every texture, surface, and proportion serves the experience of space.",
  },
  {
    number: "03",
    title: "Smart Home & Technology",
    description: "Invisible technology, seamless control. Lighting, climate, audio, security — unified into architecture, not added on top.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="brio-section bg-secondary" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Services
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-background p-8 md:p-12 group cursor-pointer relative overflow-hidden"
            >
              {/* Blueprint line animation on hover */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 400 400"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.rect
                  x="8" y="8" width="384" height="384"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-brushed-metal"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={hovered === i ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>

              <span className="brio-caption text-brushed-metal block mb-8">{service.number}</span>
              <h3 className="brio-heading-md mb-6">{service.title}</h3>
              <motion.p
                initial={{ opacity: 0.6 }}
                animate={hovered === i ? { opacity: 1 } : { opacity: 0.6 }}
                className="brio-body text-muted-foreground"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={hovered === i ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="brio-divider mt-8 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
