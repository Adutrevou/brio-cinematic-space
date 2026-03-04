import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="brio-section" ref={ref}>
      <div className="brio-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="brio-caption text-muted-foreground mb-16"
        >
          Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="brio-heading-lg mb-8"
            >
              Let's begin your story
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 brio-body text-muted-foreground"
            >
              <p>Johannesburg, South Africa</p>
              <p>studio@brio.co.za</p>
              <p>Mon — Fri, 08:00 — 17:00</p>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="brio-caption text-muted-foreground block mb-3">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-base font-light text-foreground outline-none focus:border-foreground transition-colors duration-500 placeholder:text-muted-foreground/40"
                />
              </div>
            ))}
            <div>
              <label className="brio-caption text-muted-foreground block mb-3">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border pb-3 font-sans text-base font-light text-foreground outline-none focus:border-foreground transition-colors duration-500 resize-none placeholder:text-muted-foreground/40"
              />
            </div>
            <button
              type="submit"
              className="brio-caption text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Send Enquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
