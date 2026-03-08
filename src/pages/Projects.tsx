import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";
import { projects, categories } from "@/data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Portfolio"
        title="Selected work across architecture, interiors, cinema, and compact living"
        description="Each project is a unique response to site, client, and brief. From desert retreats to urban residences, private cinemas to modular micro-homes."
      />

      {/* Filters */}
      <section className="px-6 md:px-12 lg:px-24 pb-12">
        <div className="brio-container flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`brio-caption px-6 py-2 border transition-all duration-500 ${
                activeCategory === cat
                  ? "border-foreground text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="brio-section pt-0" ref={ref}>
        <div className="brio-container grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} inView={inView} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectCard = ({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`relative overflow-hidden cursor-pointer group block ${
          project.size === "large" ? "aspect-[4/3]" : "aspect-square"
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={hovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-8"
          animate={hovered ? { backgroundColor: "hsla(220, 10%, 15%, 0.5)" } : { backgroundColor: "hsla(220, 10%, 15%, 0.15)" }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
            transition={{ duration: 0.4 }}
            className="brio-caption text-primary-foreground/70 mb-2"
          >
            {project.category} · {project.location}
          </motion.span>
          <motion.h3
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 0 }}
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
            animate={hovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default Projects;
