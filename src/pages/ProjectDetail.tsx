import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import { projects } from "@/data/projects";
import projectArchitecture from "@/assets/project-architecture.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectCinema from "@/assets/project-cinema.jpg";
import projectTiny from "@/assets/project-tiny.jpg";

const imageMap: Record<string, string> = {
  "Architecture": projectArchitecture,
  "Interior Design": projectInterior,
  "Smart Cinema": projectCinema,
  "Tiny Homes": projectTiny,
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="grain-overlay">
        <Navbar />
        <div className="brio-section pt-32 text-center">
          <h1 className="brio-heading-lg mb-4">Project not found</h1>
          <Link to="/projects" className="brio-caption text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const img = imageMap[project.category] || projectArchitecture;

  return (
    <div className="grain-overlay">
      <Navbar />

      {/* Full-screen hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-caption text-muted-foreground mb-4"
          >
            {project.category} · {project.location} · {project.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="brio-heading-xl max-w-3xl"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Description */}
      <section className="brio-section">
        <div className="brio-container max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brio-heading-md text-foreground mb-8"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="brio-divider origin-left"
          />
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="brio-section pt-0">
        <div className="brio-container grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: n * 0.1 }}
              className="aspect-[4/3] bg-secondary"
            />
          ))}
        </div>
      </section>

      {/* Back link */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="brio-container">
          <Link
            to="/projects"
            className="brio-caption text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            ← All Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
