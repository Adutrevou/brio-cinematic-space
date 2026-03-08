import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import SmartHomeSection from "@/components/brio/SmartHomeSection";
import heroImage from "@/assets/hero-residence.jpg";
import aboutStudio from "@/assets/about-studio.jpg";
import projectNamib from "@/assets/project-namib.jpg";
import projectIslands from "@/assets/project-islands.jpg";
import projectEyeCinema from "@/assets/project-eye-cinema.jpg";
import projectVictoria from "@/assets/project-victoria.jpg";
import servicesTech from "@/assets/services-technology.jpg";
import contactHero from "@/assets/contact-hero.jpg";

const featuredProjects = [
  { image: projectNamib, title: "Namib Residence", category: "Architecture", slug: "namib-residence" },
  { image: projectIslands, title: "Islands House", category: "Interior Design", slug: "islands-house" },
  { image: projectEyeCinema, title: "Eye of Africa Cinema", category: "Smart Cinema", slug: "eye-of-africa-cinema" },
  { image: projectVictoria, title: "Victoria Falls Tiny Home", category: "Tiny Homes", slug: "victoria-falls-tiny-home" },
];

const services = [
  { number: "01", title: "Architecture", description: "From concept to completion — bespoke residential and commercial architecture that responds to site, light, and the way you live.", image: heroImage },
  { number: "02", title: "Interior Design", description: "Material-driven interiors crafted with intention. Every texture, surface, and proportion serves the experience of space.", image: aboutStudio },
  { number: "03", title: "Integrated Technology", description: "Invisible technology, seamless control. Lighting, climate, audio, security — unified into architecture.", image: servicesTech },
];

const Index = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ServicesPreview />
      <SmartHomeSection />
      <EditorialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

/* ─── Hero ─── */
const HeroSection = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-cover bg-center animate-slow-zoom" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-background" />
    </motion.div>

    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="0 0 800 400" className="w-full max-w-4xl opacity-[0.06]" fill="none" stroke="currentColor" strokeWidth="0.5">
        <motion.rect x="100" y="50" width="300" height="200" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }} className="text-foreground" />
        <motion.rect x="400" y="50" width="200" height="200" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }} className="text-foreground" />
        <motion.line x1="250" y1="50" x2="250" y2="250" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }} className="text-foreground" />
        <motion.line x1="100" y1="150" x2="600" y2="150" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }} className="text-foreground" />
      </svg>
    </div>

    <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6 text-center">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1 }} className="brio-caption text-primary-foreground/70 mb-6">
        Architecture · Design · Technology · Unified
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }} className="brio-heading-xl text-primary-foreground max-w-4xl">
        Design That Shapes Lifetimes
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} className="brio-body text-primary-foreground/60 max-w-xl mt-6">
        Brio started when two brothers combined their deep love for design with a simple belief: your home should tell your story. We design architecture, interiors, and smart home systems to create spaces that go beyond beauty — they feel personal.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.2 }} className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/projects" className="brio-caption text-primary-foreground/80 border border-primary-foreground/30 px-8 py-3 hover:bg-primary-foreground/10 transition-all duration-500">
          View Our Work
        </Link>
        <Link to="/contact" className="brio-caption text-primary-foreground/80 border border-primary-foreground/30 px-8 py-3 hover:bg-primary-foreground/10 transition-all duration-500">
          Start a Conversation
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── About Preview ─── */
const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground mb-12">
            About the Studio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brio-heading-lg mb-6"
          >
            Curating Homes, Crafting Stories.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-body text-muted-foreground mb-6"
          >
            We design for clients who prioritise substance over spectacle — those who recognise that true luxury comes not from extravagance, but from creating spaces with intention and thoughtfulness. We ground our work in craft, integrity, and deep respect for the context in which we build.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="brio-body text-muted-foreground mb-8"
          >
            Whether we shape an entire home or craft a singular, bespoke feature, we follow a process driven by the belief that elegance emerges not from adornment, but from restraint, precision, and a quiet boldness that stands the test of time.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.8 }}>
            <Link to="/about" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              Read Our Story
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="aspect-[3/4] overflow-hidden"
        >
          <img src={aboutStudio} alt="Brio design studio with architectural models and blueprints" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Featured Projects ─── */
const FeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="brio-section bg-secondary" ref={ref}>
      <div className="brio-container">
        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground">
            Selected Work
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <Link to="/projects" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              View All 12 Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="relative overflow-hidden cursor-pointer group block aspect-[4/3]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={hoveredIndex === i ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  animate={hoveredIndex === i ? { backgroundColor: "hsla(220, 10%, 15%, 0.4)" } : { backgroundColor: "hsla(220, 10%, 15%, 0)" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="brio-caption text-primary-foreground/70 mb-2"
                  >
                    {project.category}
                  </motion.span>
                  <motion.h3
                    animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="font-serif text-2xl md:text-3xl font-light text-primary-foreground"
                  >
                    {project.title}
                  </motion.h3>
                </motion.div>
                <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] pointer-events-none" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
                  <motion.rect
                    x="0" y="0" width="400" height="300"
                    stroke="currentColor" strokeWidth="0.5"
                    className="text-primary-foreground/30"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={hoveredIndex === i ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Services Preview ─── */
const ServicesPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container">
        <div className="flex items-end justify-between mb-16">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground">
            Services
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <Link to="/services" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              All Services
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="bg-background relative overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={hovered === i ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="brio-caption text-brushed-metal block mb-6">{service.number}</span>
                <h3 className="brio-heading-md mb-4">{service.title}</h3>
                <p className="brio-body text-muted-foreground">{service.description}</p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hovered === i ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="brio-divider mt-6 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Editorial Section ─── */
const EditorialSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[3/4] overflow-hidden"
        >
          <img src={contactHero} alt="Brio-designed luxury residence at golden hour" className="w-full h-full object-cover" />
        </motion.div>
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="brio-caption text-muted-foreground mb-8"
          >
            Our Belief
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-heading-lg mb-6"
          >
            We don't just build homes — we shape the moments that matter most.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="brio-body text-muted-foreground mb-8"
          >
            We listen to you, understand your needs, and design homes that reflect your identity and lifestyle. We thoughtfully consider every detail — from how natural light flows to how each finish feels — to create comfort, foster connection, and build a true sense of belonging.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/process" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              Explore Our Process
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="brio-section bg-secondary" ref={ref}>
      <div className="brio-container text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="brio-heading-lg mb-6"
        >
          Ready to begin your story?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="brio-body text-muted-foreground mb-10"
        >
          Whether it's a new build, a renovation, or a conversation about what's possible — we'd love to hear from you. Based in Johannesburg, designing across Southern Africa and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact" className="brio-caption text-foreground border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500 inline-block">
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
