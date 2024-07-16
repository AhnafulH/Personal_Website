import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Experience2
 from "@/components/Experience2";
import Skills from "@/components/Skills"
import Skills2 from "@/components/Skills2"
import Skills3 from "@/components/Skills3";
import Project from "@/components/Project";
import ProjectCard from "@/components/Project2";
import Testimonial from "@/components/Testimonial";
import Testimonial2 from "@/components/Testimonial2";
import Testimonial3 from "@/components/Testimonial3";
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <AuroraBackground>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto px-12 py-4">
          <Header/>
          <HeroSection/>
          <About/>
          {/* <Experience/> */}
          <Experience2/>
          {/* <Skills/> */}
          {/* <Skills2/> */}
          <Skills3/>
          {/* <Project/> */}
          <ProjectCard/>
          <Testimonial/>
          <Testimonial2/>
          <Testimonial3/>
          <Contact/>

        </div>
      </main>
      </AuroraBackground>
  );
}

//bg-[#121212]