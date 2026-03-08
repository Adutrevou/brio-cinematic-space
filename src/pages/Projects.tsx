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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-8"
          animate={hovered ? { backgroundColor: "rgba(0,0,0,0.3)" } : { backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.5 }}
        >
          <span className="brio-caption text-white/70 mb-2">
            {project.category} · {project.location}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-white">
            {project.title}
          </h3>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Projects;
