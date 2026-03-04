import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import projectArchitecture from "@/assets/project-architecture.jpg";
import projectInterior from "@/assets/project-interior.jpg";
import projectCinema from "@/assets/project-cinema.jpg";
import projectTiny from "@/assets/project-tiny.jpg";

const projects = [
  { image: projectArchitecture, title: "Sandstone Residence", category: "Architecture", size: "large" },
  { image: projectInterior, title: "The Stone Room", category: "Interior Design", size: "medium" },
  { image: projectCinema, title: "Private Cinema Suite", category: "Smart Cinema", size: "medium" },
  { image: projectTiny, title: "Karoo Retreat", category: "Tiny Homes", size: "large" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="brio-section" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Selected Work
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden cursor-pointer group ${
                project.size === "large" ? "aspect-[4/3]" : "aspect-square"
              }`}
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

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-foreground/0 flex flex-col justify-end p-8"
                animate={hoveredIndex === i ? { backgroundColor: "hsla(220, 10%, 15%, 0.4)" } : { backgroundColor: "hsla(220, 10%, 15%, 0)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="brio-caption text-primary-foreground/70 mb-2"
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="font-serif text-2xl md:text-3xl font-light text-primary-foreground"
                >
                  {project.title}
                </motion.h3>
              </motion.div>

              {/* Blueprint line overlay on hover */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
