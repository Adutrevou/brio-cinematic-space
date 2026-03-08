import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";

const stages = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a conversation. Understanding your vision, lifestyle, site conditions, and aspirations allows us to establish a clear design brief that guides every decision that follows.",
    detail: "Site visits · Lifestyle analysis · Design brief",
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Initial sketches and spatial diagrams explore the possibilities of your site. We present concept options that balance ambition with practicality, establishing the architectural language for your project.",
    detail: "Sketches · Spatial diagrams · Concept options",
  },
  {
    number: "03",
    title: "Design & 3D Visualisation",
    description: "The concept evolves into detailed design. Full 3D renderings, material palettes, and spatial walkthroughs bring your home to life before construction begins.",
    detail: "3D renders · Material palettes · Virtual walkthroughs",
  },
  {
    number: "04",
    title: "Technical & Engineering",
    description: "Structural engineering, energy modelling, and construction documentation transform the design into buildable reality. Every technical detail is resolved with precision.",
    detail: "Structural engineering · Energy modelling · Documentation",
  },
  {
    number: "05",
    title: "Material Selection",
    description: "Stone, timber, glass, metal — we curate every finish and surface, sourcing materials that balance beauty, durability, and budget.",
    detail: "Stone · Timber · Glass · Metal · Finishes",
  },
  {
    number: "06",
    title: "Construction",
    description: "We manage the build process with meticulous oversight, ensuring the design intent is preserved from foundation to final coat of paint.",
    detail: "Project management · Quality control · Site oversight",
  },
  {
    number: "07",
    title: "Technology Integration",
    description: "Smart home systems — lighting, climate, audio, security, cinema — are engineered and installed as an integral part of the architecture.",
    detail: "Lighting · Climate · Audio · Security · Cinema",
  },
  {
    number: "08",
    title: "Handover",
    description: "Your home is delivered fully documented, fully operational, and ready to live in. We provide complete system training and ongoing support.",
    detail: "Documentation · Training · Ongoing support",
  },
];

const Process = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Process"
        title="From first conversation to final detail"
        description="Our design process is structured yet flexible, ensuring clarity and precision at every stage while remaining responsive to your evolving vision."
      />

      <section className="brio-section pt-0" ref={timelineRef}>
        <div className="brio-container relative">
          {/* Vertical progress line */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-foreground origin-top"
              style={{ height: "100%", scaleY: scrollYProgress }}
            />
          </div>

          <div className="flex flex-col">
            {stages.map((stage, i) => (
              <StageRow key={stage.number} stage={stage} index={i} total={stages.length} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StageRow = ({
  stage,
  index,
  total,
}: {
  stage: typeof stages[0];
  index: number;
  total: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`relative pl-16 md:pl-28 py-16 md:py-20 ${
        index < total - 1 ? "border-b border-border/50" : ""
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 md:left-10 top-16 md:top-20 -translate-x-1/2">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-3 h-3 rounded-full bg-foreground" />
          <motion.div
            initial={{ scale: 1, opacity: 0.4 }}
            animate={inView ? { scale: 2.5, opacity: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 w-3 h-3 rounded-full bg-foreground"
          />
        </motion.div>
      </div>

      {/* Number */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-6xl md:text-8xl font-light text-foreground/[0.07] absolute right-0 top-8 md:top-12 select-none pointer-events-none"
      >
        {stage.number}
      </motion.span>

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="brio-heading-md mb-3"
          >
            {stage.title}
          </motion.h3>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-caption text-muted-foreground"
          >
            {stage.detail}
          </motion.span>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="brio-body text-muted-foreground"
          >
            {stage.description}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-foreground/20 mt-8 origin-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
