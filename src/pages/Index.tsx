import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import SmartHomeSection from "@/components/brio/SmartHomeSection";
import heroImage from "@/assets/hero-residence.jpg";
import projectArchitecture from "@/assets/project-architecture.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectCinema from "@/assets/project-cinema.jpg";
import projectTiny from "@/assets/project-tiny.jpg";

const featuredProjects = [
  { image: projectArchitecture, title: "Namib Residence", category: "Architecture", slug: "namib-residence" },
  { image: projectInterior, title: "Islands House", category: "Interior Design", slug: "islands-house" },
  { image: projectCinema, title: "Eye of Africa Cinema", category: "Smart Cinema", slug: "eye-of-africa-cinema" },
  { image: projectTiny, title: "Victoria Falls Tiny Home", category: "Tiny Homes", slug: "victoria-falls-tiny-home" },
];

const services = [
  { number: "01", title: "Architecture", description: "Bespoke residential and commercial architecture that responds to site, light, and the way you live.", link: "/services" },
  { number: "02", title: "Interior Design", description: "Material-driven interiors crafted with intention. Every texture, surface, and proportion serves the experience of space.", link: "/services" },
  { number: "03", title: "Integrated Technology", description: "Invisible technology, seamless control. Lighting, climate, audio, security — unified into architecture.", link: "/services" },
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
        The Art of Living,
        <br />
        Beautifully Composed
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }} className="brio-body text-primary-foreground/60 max-w-xl mt-6">
        Founded by two brothers who believe a home should tell your story. Brio unifies architecture, interior design, and smart technology into singular living experiences.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.2 }} className="mt-10 flex gap-4">
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

  const lines = [
    "Brio began when two brothers fused a deep love",
    "for design with a simple belief —",
    "your home should tell your story.",
  ];

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }} className="brio-caption text-muted-foreground mb-12">
            About the Studio
          </motion.p>
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="brio-heading-lg mb-2"
            >
              {line}
            </motion.p>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="brio-body text-muted-foreground mt-8 max-w-lg"
          >
            We don't design spectacles. We design intention, precision, and lived experience. Architecture, interiors, and technology — considered as one.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1 }} className="mt-10">
            <Link to="/about" className="brio-caption text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-colors duration-500">
              Read Our Story
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="aspect-[3/4] bg-secondary"
        />
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
              View All Projects
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
              className="bg-background p-8 md:p-12 cursor-pointer relative overflow-hidden"
            >
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" fill="none" preserveAspectRatio="none">
                <motion.rect
                  x="8" y="8" width="384" height="384"
                  stroke="currentColor" strokeWidth="0.5"
                  className="text-brushed-metal"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={hovered === i ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
              <span className="brio-caption text-brushed-metal block mb-8">{service.number}</span>
              <h3 className="brio-heading-md mb-6">{service.title}</h3>
              <p className="brio-body text-muted-foreground">{service.description}</p>
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

/* ─── CTA ─── */
const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="brio-section" ref={ref}>
      <div className="brio-container text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="brio-heading-lg mb-6"
        >
          Ready to begin?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="brio-body text-muted-foreground mb-10"
        >
          Whether it's a new build, a renovation, or a conversation about what's possible — we'd love to hear from you.
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
