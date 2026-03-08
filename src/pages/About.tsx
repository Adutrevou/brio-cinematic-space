import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";
import aboutStudio from "@/assets/about-studio.jpg";
import aboutMaterials from "@/assets/about-materials.jpg";
import heroAerial from "@/assets/hero-aerial.jpg";

const principles = [
  { number: "01", title: "Intention Over Spectacle", text: "Every line, material, and space serves a purpose. We design for how you live, not for how things look on a screen. True luxury is felt, not displayed." },
  { number: "02", title: "Precision as Craft", text: "Architecture is engineering meets artistry. We obsess over the details that others overlook — because that's where beauty lives. Every joint, every edge, every transition matters." },
  { number: "03", title: "Technology as Invisible Luxury", text: "The best technology is the kind you never see. We integrate smart systems so deeply into architecture that they feel like magic — effortless, intuitive, and always responsive." },
  { number: "04", title: "Story-Driven Design", text: "Your home should tell your story. We listen before we draw, and every design decision reflects who you are and how you want to live. No two Brio homes are alike." },
];

const About = () => {
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: true, margin: "-100px" });
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="About"
        title="Two brothers. One shared belief — your home should tell your story."
        description="Brio is a refined atelier of bespoke design, founded in Johannesburg and working across Southern Africa and beyond."
      />

      {/* Story */}
      <section className="brio-section pt-0" ref={storyRef}>
        <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {[
              "Brio started when two brothers combined their deep love for design with a simple belief: your home should tell your story.",
              "For many years, we've designed architecture, interiors, and smart home systems to create spaces that go beyond beauty — they feel personal. We listen to you, understand your needs, and design homes that reflect your identity and lifestyle.",
              "We thoughtfully consider every detail — from how natural light flows to how each finish feels — to create comfort, foster connection, and build a true sense of belonging.",
              "At Brio, we don't just build homes — we shape the moments that matter most.",
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
            className="aspect-[3/4] overflow-hidden"
          >
            <img src={aboutStudio} alt="Brio design studio" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="brio-section" ref={valuesRef}>
        <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img src={aboutMaterials} alt="Brio material palette — stone, brass, timber, marble" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={valuesInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground mb-8">
              Why Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="brio-heading-lg mb-6"
            >
              Curating Homes, Crafting Stories.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="brio-body text-muted-foreground mb-6"
            >
              We design for clients who prioritise substance over spectacle — those who recognise that true luxury comes not from extravagance, but from creating spaces with intention and thoughtfulness. We ground our work in craft, integrity, and deep respect for the context in which we build.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="brio-body text-muted-foreground"
            >
              We collaborate on each project, combining vision, expertise, and care. We consider every detail, select every material with purpose, and make every design decision deliberately.
            </motion.p>
          </div>
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
        <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={approachInView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground mb-8">
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
              className="brio-body text-muted-foreground mb-6"
            >
              Most studios treat architecture, interior design, and home technology as separate disciplines. At Brio, they are one unified practice. From the first sketch to the final handover, every decision is made holistically — because a truly exceptional home is one where structure, surface, and system exist in harmony.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={approachInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="brio-body text-muted-foreground"
            >
              This integrated approach means fewer compromises, more coherence, and a home that feels effortlessly complete. Whether we shape an entire home or craft a singular, bespoke feature, we follow a process driven by the belief that elegance emerges from restraint, precision, and a quiet boldness that stands the test of time.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={approachInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img src={heroAerial} alt="Aerial view of Brio-designed luxury residence" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
