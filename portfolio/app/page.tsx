import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import WhatIBuild from "@/components/WhatIBuild";
import Achievements from "@/components/Achievements";
import CurrentStatus from "@/components/CurrentStatus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <TechStack />
        <Projects />
        <WhatIBuild />
        <Achievements />
        <CurrentStatus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
