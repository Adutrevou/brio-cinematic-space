import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/brio/Navbar";
import Footer from "@/components/brio/Footer";
import PageHero from "@/components/brio/PageHero";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", project: "", message: "" });

  return (
    <div className="grain-overlay">
      <Navbar />
      <PageHero
        caption="Contact"
        title="Let's begin your story"
        description="Whether you're planning a new build, a renovation, or simply exploring ideas — we'd love to hear from you."
      />

      <section className="brio-section pt-0" ref={ref}>
        <div className="brio-container grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8 mb-12">
              {[
                { label: "Studio", value: "10 Kragbron Road, Klopperpark\nJohannesburg, South Africa" },
                { label: "Phone", value: "+27 (87) 265 5940" },
                { label: "Email", value: "info@brio.co.za" },
                { label: "Hours", value: "Monday – Friday, 08:00 – 17:00" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="brio-caption text-muted-foreground mb-2">{item.label}</p>
                  <p className="brio-body text-foreground whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={contactHero} alt="Brio-designed residence — we'd love to design yours" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "email", label: "Email Address", type: "email" },
              { name: "phone", label: "Phone Number", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label className="brio-caption text-muted-foreground block mb-3">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-base font-light text-foreground outline-none focus:border-foreground transition-colors duration-500"
                />
              </div>
            ))}
            <div>
              <label className="brio-caption text-muted-foreground block mb-3">Project Type</label>
              <select
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full bg-background border-b border-border pb-3 font-sans text-base font-light text-foreground outline-none focus:border-foreground transition-colors duration-500 appearance-none"
              >
                <option value="" className="bg-background text-foreground">Select a service</option>
                <option value="architecture" className="bg-background text-foreground">Architecture — New Build</option>
                <option value="renovation" className="bg-background text-foreground">Architecture — Renovation</option>
                <option value="interior" className="bg-background text-foreground">Interior Design</option>
                <option value="technology" className="bg-background text-foreground">Smart Home / Technology</option>
                <option value="cinema" className="bg-background text-foreground">Private Cinema</option>
                <option value="other" className="bg-background text-foreground">Other / Not Sure Yet</option>
              </select>
            </div>
            <div>
              <label className="brio-caption text-muted-foreground block mb-3">Tell us about your project</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-b border-border pb-3 font-sans text-base font-light text-foreground outline-none focus:border-foreground transition-colors duration-500 resize-none"
                placeholder="Share your vision, timeline, or any details you'd like us to know..."
              />
            </div>
            <button
              type="submit"
              className="brio-caption text-foreground border border-foreground px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Send Enquiry
            </button>
            <p className="font-sans text-xs text-muted-foreground font-light mt-4">
              We typically respond within 24 hours during business days.
            </p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
