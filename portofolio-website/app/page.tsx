import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Herosection2 from "@/components/Herosection2"
import Hersection3 from "@/components/Hersection3"
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
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <AuroraBackground>
      <main className="min-h-screen flex flex-col items-center">
        <div className="w-full mx-auto px-12 py-4 bg-[#FAF9F6]">
          <Header/>
          <Herosection2/>
          {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"> */}
            <About/>
          {/* </div> */}
          <Experience2/>
          <Skills3/>
          <Project/>
          {/* <ProjectCard/> */}
          <Testimonial3/>
          <Contact2/>
          <Footer/>

        </div>
      </main>
      </AuroraBackground>
  );
}

//bg-[#121212]