import { NAV_LINKS } from "./data/nav";
import { useScrollProgress } from "./hooks/useScrollProgress";

import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import { PipelineRail } from "./components/layout/PipelineRail/PipelineRail";

import { Hero } from "./components/sections/Hero/Hero";
import { About } from "./components/sections/About/About";
import { Experience } from "./components/sections/Experience/Experience";
import { Projects } from "./components/sections/Projects/Projects";
import { Skills } from "./components/sections/Skills/Skills";
import { Contact } from "./components/sections/Contact/Contact";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function App() {
  const { progress, activeId } = useScrollProgress(SECTION_IDS);

  return (
    <>
      <Header activeId={activeId} />
      <PipelineRail activeId={activeId} progress={progress} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
