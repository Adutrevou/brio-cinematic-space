import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";
import heroImage from "@/assets/hero-residence.jpg";
import projectIslands from "@/assets/project-islands.jpg";
import servicesTech from "@/assets/services-technology.jpg";

const services = [
  {
    number: "01",
    title: "Architecture",
    summary: "From concept to completion — bespoke residential and commercial architecture that responds to site, light, and the way you live. We design homes that belong to their landscape and reflect the people who inhabit them.",
    image: heroImage,
    details: [
      "Concept Development & Feasibility Studies",
      "Schematic Design & 3D Visualisation",
      "Town Planning & Municipal Submissions",
      "Construction Documentation",
      "Site Supervision & Project Management",
      "Landscape Integration & Outdoor Design",
    ],
  },
  {
    number: "02",
    title: "Interior Design",
    summary: "Material-driven interiors crafted with intention. Every texture, surface, and proportion serves the experience of space. We curate environments that feel collected, layered, and deeply personal.",
    image: projectIslands,
    details: [
      "Spatial Planning & Layout Design",
      "Material & Finish Selection",
      "Custom Furniture & Joinery Design",
      "Lighting Design & Specification",
      "Procurement & Installation Management",
      "Styling, Art Curation & Accessories",
    ],
  },
  {
    number: "03",
    title: "Integrated Technology",
    summary: "Invisible technology, seamless control. Lighting, climate, audio, security, cinema — every system unified under a single intelligent layer, designed from day one as part of your home's architecture.",
    image: servicesTech,
    details: [
      "Smart Home Design & Engineering",
      "Lighting Control & Scene Programming",
      "Climate & HVAC Automation",
      "Audio/Visual & Home Cinema Design",
      "Security, CCTV & Access Control",
      "Network Infrastructure & 24/7 Cloud Monitoring",
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
        <ServiceBlock key={service.title} service={service} index={idx} />
      ))}

      <Footer />
    </div>
  );
};

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`brio-section ${index % 2 === 1 ? "bg-secondary" : ""}`}>
      <div className="brio-container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
          <div className={index % 2 === 1 ? "lg:order-2" : ""}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="aspect-[4/3] overflow-hidden mb-8 lg:mb-0"
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
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
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-0 mb-10"
            >
              {service.details.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                  className="py-3 border-b border-border"
                >
                  <span className="brio-body text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="brio-caption text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500 inline-block"
              >
                Enquire About {service.title}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
