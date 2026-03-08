import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";

const stages = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a conversation. Understanding your vision, lifestyle, site conditions, and aspirations allows us to establish a clear design brief that guides every decision that follows.",
  },
  {
    number: "02",
    title: "Concept Development",
    description: "Initial sketches and spatial diagrams explore the possibilities of your site. We present concept options that balance ambition with practicality, establishing the architectural language for your project.",
  },
  {
    number: "03",
    title: "Design & 3D Visualisation",
    description: "The concept evolves into detailed design. Full 3D renderings, material palettes, and spatial walkthroughs bring your home to life before construction begins.",
  },
  {
    number: "04",
    title: "Technical & Engineering",
    description: "Structural engineering, energy modelling, and construction documentation transform the design into buildable reality. Every technical detail is resolved with precision.",
  },
  {
    number: "05",
    title: "Material Selection",
    description: "Stone, timber, glass, metal — we curate every finish and surface, sourcing materials that balance beauty, durability, and budget.",
  },
  {
    number: "06",
    title: "Construction",
    description: "We manage the build process with meticulous oversight, ensuring the design intent is preserved from foundation to final coat of paint.",
  },
  {
    number: "07",
    title: "Technology Integration",
    description: "Smart home systems — lighting, climate, audio, security, cinema — are engineered and installed as an integral part of the architecture.",
  },
  {
    number: "08",
    title: "Handover",
    description: "Your home is delivered fully documented, fully operational, and ready to live in. We provide complete system training and ongoing support.",
  },
];

const Process = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Process"
        title="From first conversation to final detail"
        description="Our design process is structured yet flexible, ensuring clarity and precision at every stage while remaining responsive to your evolving vision."
      />

      <section className="brio-section pt-0">
        <div className="brio-container">
          {stages.map((stage, i) => (
            <StageRow key={stage.number} stage={stage} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StageRow = ({ stage, index }: { stage: typeof stages[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-8 md:gap-16 py-12 md:py-16 ${
        index < stages.length - 1 ? "border-b border-border" : ""
      }`}
    >
      <span className="brio-caption text-brushed-metal">{stage.number}</span>
      <h3 className="brio-heading-md">{stage.title}</h3>
      <p className="brio-body text-muted-foreground">{stage.description}</p>
    </motion.div>
  );
};

export default Process;
