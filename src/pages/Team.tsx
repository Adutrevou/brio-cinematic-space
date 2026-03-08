import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";

const team = [
  {
    name: "William",
    role: "Creative Director",
    quote: "Architecture is the art of making people feel something without knowing why.",
    bio: "William leads the creative vision at Brio, overseeing every project from concept through completion. His design philosophy centres on the belief that great architecture emerges from deep listening — understanding not just what a client wants, but how they want to feel in their own home. With a refined eye for proportion, materiality, and light, William ensures every Brio project carries an unmistakable sense of intention.",
  },
  {
    name: "Wadel",
    role: "Managing Director",
    quote: "Precision in execution is what transforms a beautiful drawing into a beautiful home.",
    bio: "Wadel brings operational excellence and technical rigour to every Brio project. As Managing Director, he oversees project delivery, engineering coordination, and technology integration — ensuring that design ambition is matched by construction precision. His commitment to documentation, client communication, and seamless smart home integration means every project is delivered to the highest standard.",
  },
];

const Team = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Team"
        title="The people behind the practice"
      />

      <section className="brio-section pt-0" ref={ref}>
        <div className="brio-container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[3/4] bg-secondary mb-8" />
              <p className="brio-caption text-brushed-metal mb-3">{member.role}</p>
              <h3 className="brio-heading-lg mb-6">{member.name}</h3>
              <blockquote className="font-serif text-xl italic text-muted-foreground mb-6 border-l-2 border-border pl-6">
                "{member.quote}"
              </blockquote>
              <p className="brio-body text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
