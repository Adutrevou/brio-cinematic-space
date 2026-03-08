import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";

const principles = [
  { number: "01", title: "Intention Over Spectacle", text: "Every line, material, and space serves a purpose. We design for how you live, not for how things look on a screen." },
  { number: "02", title: "Precision as Craft", text: "Architecture is engineering meets artistry. We obsess over the details that others overlook — because that's where beauty lives." },
  { number: "03", title: "Technology as Invisible Luxury", text: "The best technology is the kind you never see. We integrate smart systems so deeply into architecture that they feel like magic." },
  { number: "04", title: "Story-Driven Design", text: "Your home should tell your story. We listen before we draw, and every design decision reflects who you are and how you want to live." },
];

const About = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="About"
        title="Two brothers. One shared belief — your home should tell your story."
      />

      {/* Story */}
      <section className="brio-section pt-0" ref={storyRef}>
        <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {[
              "Brio was born from a conviction that architecture should be personal.",
              "Founded by two brothers — William and Wadel — in Johannesburg, the studio grew from a shared obsession with space, light, and the way a home can shape how you feel.",
              "We don't design to impress. We design to endure. Every project begins with listening, and every detail serves the experience of living.",
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                className="brio-body text-muted-foreground mb-6"
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={storyInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="aspect-[3/4] bg-secondary"
          />
        </div>
      </section>

      {/* Principles */}
      <section className="brio-section bg-secondary" ref={principlesRef}>
        <div className="brio-container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={principlesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="brio-caption text-muted-foreground mb-16"
          >
            Design Principles
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              >
                <span className="brio-caption text-brushed-metal block mb-4">{p.number}</span>
                <h3 className="brio-heading-md mb-4">{p.title}</h3>
                <p className="brio-body text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="brio-section" ref={approachRef}>
        <div className="brio-container max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={approachInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="brio-caption text-muted-foreground mb-16"
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brio-heading-lg mb-8"
          >
            Architecture, interiors, and technology — designed as one
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-body text-muted-foreground"
          >
            Most studios treat architecture, interior design, and home technology as separate disciplines. At Brio, they are one unified practice. From the first sketch to the final handover, every decision is made holistically — because a truly exceptional home is one where structure, surface, and system exist in harmony. This integrated approach means fewer compromises, more coherence, and a home that feels effortlessly complete.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
