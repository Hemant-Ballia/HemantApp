import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";

import HeroSection from "./sections/HeroSection";
import TechStack from "./sections/TechStack";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black font-body">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      {/* ADDED: pt-20 md:pt-0 to prevent content from hiding behind mobile fixed navbar */}
      <main className="flex w-full flex-col overflow-x-hidden md:pl-64 pt-20 md:pt-0">
        
        {/* Top Banner */}
        <TopBanner />

        {/* Hero Section */}
        <HeroSection />

        {/* Tech Stack */}
        <TechStack />

        {/* About */}
        <AboutSection />

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Contact */}
        <ContactSection />

        {/* Footer */}
        <Footer />
        
      </main>
    </div>
  );
}

export default App;