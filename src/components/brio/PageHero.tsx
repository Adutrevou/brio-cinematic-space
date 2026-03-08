import { motion } from "framer-motion";

interface PageHeroProps {
  caption: string;
  title: string;
  description?: string;
}

const PageHero = ({ caption, title, description }: PageHeroProps) => (
  <section className="brio-section pt-32 md:pt-40 pb-16 md:pb-24">
    <div className="brio-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="brio-caption text-muted-foreground mb-8"
      >
        {caption}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="brio-heading-xl max-w-4xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="brio-body text-muted-foreground max-w-2xl mt-8"
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="brio-divider mt-12 origin-left"
      />
    </div>
  </section>
);

export default PageHero;
