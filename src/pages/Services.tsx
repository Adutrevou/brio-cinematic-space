import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";

const services = [
  {
    number: "01",
    title: "Architecture",
    slug: "architecture",
    summary: "From concept to completion — bespoke residential and commercial architecture that responds to site, light, and the way you live.",
    details: [
      "Concept Development & Feasibility Studies",
      "Schematic Design & 3D Visualisation",
      "Town Planning & Municipal Submissions",
      "Construction Documentation",
      "Site Supervision & Project Management",
      "Landscape Integration",
    ],
  },
  {
    number: "02",
    title: "Interior Design",
    slug: "interior-design",
    summary: "Material-driven interiors crafted with intention. Every texture, surface, and proportion serves the experience of space.",
    details: [
      "Spatial Planning & Layout",
      "Material & Finish Selection",
      "Custom Furniture & Joinery Design",
      "Lighting Design",
      "Procurement & Installation Management",
      "Styling & Art Curation",
    ],
  },
  {
    number: "03",
    title: "Integrated Technology",
    slug: "technology",
    summary: "Invisible technology, seamless control. Lighting, climate, audio, security — unified into architecture, not added on top.",
    details: [
      "Smart Home Design & Engineering",
      "Lighting Control Systems",
      "Climate & HVAC Automation",
      "Audio/Visual & Home Cinema",
      "Security & Access Control",
      "Network Infrastructure & Cloud Monitoring",
    ],
  },
];

const Services = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Services"
        title="Architecture, design, and technology — unified under one roof"
        description="We offer a fully integrated design service, ensuring every element of your home is considered, coordinated, and crafted to the highest standard."
      />

      {services.map((service, idx) => (
        <ServiceBlock key={service.slug} service={service} index={idx} />
      ))}

      <Footer />
    </div>
  );
};

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`brio-section ${index % 2 === 1 ? "bg-secondary" : ""}`}
    >
      <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="brio-caption text-brushed-metal block mb-6"
          >
            {service.number}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brio-heading-lg mb-6"
          >
            {service.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="brio-body text-muted-foreground mb-10"
          >
            {service.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="brio-caption text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500 inline-block"
            >
              Enquire
            </Link>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-0"
          >
            {service.details.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="py-4 border-b border-border"
              >
                <span className="brio-body text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
