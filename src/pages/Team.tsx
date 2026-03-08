import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";
import teamWilliam from "@/assets/team-william.jpg";
import teamWadel from "@/assets/team-wadel.jpg";

const team = [
  {
    name: "William",
    role: "Co-Founder / Creative Director",
    image: teamWilliam,
    quote: "Architecture is the art of making people feel something without knowing why. The best spaces don't announce themselves — they quietly transform the way you experience your day.",
    bio: "William leads the creative vision at Brio, overseeing every project from concept through completion. His design philosophy centres on the belief that great architecture emerges from deep listening — understanding not just what a client wants, but how they want to feel in their own home. With a refined eye for proportion, materiality, and light, William ensures every Brio project carries an unmistakable sense of intention. His work spans luxury residences, boutique hospitality, and bespoke interior environments across Southern Africa.",
  },
  {
    name: "Wadel",
    role: "Co-Founder / Managing Director",
    image: teamWadel,
    quote: "Precision in execution is what transforms a beautiful drawing into a beautiful home. Every detail matters — from the engineering to the final coat of paint.",
    bio: "Wadel brings operational excellence and technical rigour to every Brio project. As Managing Director, he oversees project delivery, engineering coordination, and technology integration — ensuring that design ambition is matched by construction precision. His commitment to documentation, client communication, and seamless smart home integration means every project is delivered to the highest standard. Wadel's expertise in home automation and building systems ensures that Brio's technology solutions are as invisible as they are powerful.",
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
        description="Brio was founded by two brothers united by a shared obsession with space, light, and the way a home can shape how you feel."
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
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img src={member.image} alt={`${member.name} — ${member.role}`} className="w-full h-full object-cover" />
              </div>
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

      {/* Studio values */}
      <section className="brio-section bg-secondary">
        <div className="brio-container text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="brio-caption text-muted-foreground mb-8"
          >
            Our Shared Belief
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brio-heading-lg mb-6"
          >
            We design for clients who prioritise substance over spectacle.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="brio-body text-muted-foreground"
          >
            Those who recognise that true luxury comes not from extravagance, but from creating spaces with intention and thoughtfulness. We ground our work in craft, integrity, and deep respect for the context in which we build.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
