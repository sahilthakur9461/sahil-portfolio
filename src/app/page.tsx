
import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div>
      <Navbar />
    
      <Hero />
      <div className="h-10"></div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
