import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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

const stats = [
  { value: "12+", label: "Projects Completed" },
  { value: "8", label: "Years of Experience" },
  { value: "3", label: "Disciplines Unified" },
  { value: "100%", label: "Bespoke Design" },
];

const About = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="About"
        title="Two brothers. One shared belief — your home should tell your story."
        description="Brio is a refined atelier of bespoke design, founded in Johannesburg and working across Southern Africa and beyond."
      />

      <StorySection />
      <StatsSection />
      <WhyUsSection />
      <PrinciplesSection />
      <ApproachSection />
      <QuoteSection />

      <Footer />
    </div>
  );
};

/* ─── Story ─── */
const StorySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const paragraphs = [
    "Brio started when two brothers combined their deep love for design with a simple belief: your home should tell your story.",
    "For many years, we've designed architecture, interiors, and smart home systems to create spaces that go beyond beauty — they feel personal. We listen to you, understand your needs, and design homes that reflect your identity and lifestyle.",
    "We thoughtfully consider every detail — from how natural light flows to how each finish feels — to create comfort, foster connection, and build a true sense of belonging.",
    "At Brio, we don't just build homes — we shape the moments that matter most.",
  ];

  return (
    <section className="brio-section pt-0" ref={ref}>
      <div className="brio-container max-w-3xl">
        {paragraphs.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`brio-body text-muted-foreground ${i < paragraphs.length - 1 ? "mb-6" : ""} ${i === paragraphs.length - 1 ? "text-foreground font-normal" : ""}`}
          >
            {line}
          </motion.p>
        ))}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-foreground/20 mt-10 origin-left"
        />
      </div>
    </section>
  );
};

/* ─── Stats ─── */
const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20" ref={ref}>
      <div className="brio-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:px-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-5xl font-light text-foreground block mb-2"
              >
                {stat.value}
              </motion.span>
              <span className="brio-caption text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Why Us ─── */
const WhyUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.12, 1]);

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div ref={imageRef} className="aspect-[4/3] overflow-hidden relative order-2 lg:order-1">
          <motion.img
            src={aboutMaterials}
            alt="Brio material palette — stone, brass, timber, marble"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imageScale }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="brio-caption text-muted-foreground mb-8"
          >
            Why Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="brio-heading-lg mb-6"
          >
            Curating Homes, Crafting Stories.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="brio-body text-muted-foreground mb-6"
          >
            We design for clients who prioritise substance over spectacle — those who recognise that true luxury comes not from extravagance, but from creating spaces with intention and thoughtfulness. We ground our work in craft, integrity, and deep respect for the context in which we build.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="brio-body text-muted-foreground"
          >
            We collaborate on each project, combining vision, expertise, and care. We consider every detail, select every material with purpose, and make every design decision deliberately.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-foreground/20 mt-10 origin-left"
          />
        </div>
      </div>
    </section>
  );
};

/* ─── Principles ─── */
const PrinciplesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="brio-section bg-secondary" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Design Principles
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-border">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} principle={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ principle, index }: { principle: typeof principles[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`p-8 md:p-12 border-b border-border ${index % 2 === 0 ? "md:border-r" : ""} relative group`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-serif text-7xl md:text-8xl font-light text-foreground absolute top-4 right-6 select-none pointer-events-none"
      >
        {principle.number}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.1 + (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-8 h-px bg-foreground/30 mb-6 origin-left"
      />
      <h3 className="brio-heading-md mb-4 relative">{principle.title}</h3>
      <p className="brio-body text-muted-foreground relative">{principle.text}</p>
    </motion.div>
  );
};

/* ─── Approach ─── */
const ApproachSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="brio-caption text-muted-foreground mb-8"
          >
            Our Approach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="brio-heading-lg mb-8"
          >
            Architecture, interiors, and technology — designed as one
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="brio-body text-muted-foreground mb-6"
          >
            Most studios treat architecture, interior design, and home technology as separate disciplines. At Brio, they are one unified practice. From the first sketch to the final handover, every decision is made holistically — because a truly exceptional home is one where structure, surface, and system exist in harmony.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="brio-body text-muted-foreground mb-10"
          >
            This integrated approach means fewer compromises, more coherence, and a home that feels effortlessly complete. Whether we shape an entire home or craft a singular, bespoke feature, we follow a process driven by the belief that elegance emerges from restraint, precision, and a quiet boldness that stands the test of time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/process" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              Explore Our Process
            </Link>
          </motion.div>
        </div>
        <div ref={imageRef} className="aspect-[4/3] overflow-hidden relative">
          <motion.img
            src={heroAerial}
            alt="Aerial view of Brio-designed luxury residence"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: imageY }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  );
};

/* ─── Pull Quote ─── */
const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="brio-section bg-secondary" ref={ref}>
      <div className="brio-container max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 0.06, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-8xl md:text-9xl text-foreground mb-4 select-none"
        >
          "
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl md:text-4xl font-light leading-relaxed text-foreground -mt-16 md:-mt-20"
        >
          We don't just build homes — we shape the moments that matter most.
        </motion.blockquote>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-foreground/30 mx-auto mt-10 mb-6"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="brio-caption text-muted-foreground"
        >
          William & Wadel — Founders, Brio
        </motion.p>
      </div>
    </section>
  );
};

export default About;
