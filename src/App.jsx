import Header from "./components/layout/Header";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProcessSection from "./components/sections/ProcessSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";
import TechStackSection from "./components/sections/TechStackSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-stone-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,132,74,0.24),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(240,199,118,0.12),transparent_24%),linear-gradient(135deg,#08111d_0%,#0f1d2c_55%,#13293b_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-16 pt-4">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TechStackSection />
          <ProjectsSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}

export default App;
