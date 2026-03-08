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
      <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32 pt-0" ref={ref}>
        <div className="brio-container grid grid-cols-1 md:grid-cols-2 gap-0">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative overflow-hidden cursor-pointer group block aspect-[4/3]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={inView ? { scale: hovered ? 1.08 : 1 } : { scale: 1.15 }}
          transition={{ duration: hovered ? 0.8 : 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-8 md:p-10"
          animate={hovered ? { backgroundColor: "rgba(0,0,0,0.25)" } : { backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="brio-caption text-white/60 mb-2"
          >
            {project.category} · {project.location}
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + (index % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-2xl md:text-3xl font-light text-white"
          >
            {project.title}
          </motion.h3>
          <motion.div
            className="h-px bg-white/30 mt-4 origin-left"
            initial={{ scaleX: 0 }}
            animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Projects;
