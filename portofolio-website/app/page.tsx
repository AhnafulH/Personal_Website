import Header from "@/components/Header";
import Header2 from "@/components/Header2";
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
import Contact2 from "@/components/Contact"
import Contact from "@/components/Contact2";

export default function Home() {
  return (
    <AuroraBackground>
      <main className="min-h-screen flex flex-col items-center">
        <div className="container mx-auto px-12 py-4">
          <Header/>
          {/* <Header2/> */}
          <HeroSection/>
          <About/>
          {/* <Experience/> */}
          <Experience2/>
          {/* <Skills/> */}
          {/* <Skills2/> */}
          <Skills3/>
          {/* <Project/> */}
          <ProjectCard/>
          {/* <Testimonial/> */}
          {/* <Testimonial2/> */}
          <Testimonial3/>
          {/* <Contact/> */}
          <Contact2/>

        </div>
      </main>
      </AuroraBackground>
  );
}

//bg-[#121212]