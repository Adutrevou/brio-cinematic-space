import Navbar from "@/components/brio/Navbar";
import HeroSection from "@/components/brio/HeroSection";
import AboutSection from "@/components/brio/AboutSection";
import ServicesSection from "@/components/brio/ServicesSection";
import ProcessSection from "@/components/brio/ProcessSection";
import ProjectsSection from "@/components/brio/ProjectsSection";
import SmartHomeSection from "@/components/brio/SmartHomeSection";
import ContactSection from "@/components/brio/ContactSection";
import Footer from "@/components/brio/Footer";

const Index = () => {
  return (
    <div className="grain-overlay">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <SmartHomeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
