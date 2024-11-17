import { AuroraBackground } from "@/components/ui/aurora-background";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <AuroraBackground>
      <main className="min-h-screen flex flex-col items-center">
        <div className="w-full mx-auto px-12 py-4 bg-[#FAF9F6]">
          <Header/>
          <HeroSection/>
          <About/>
          <Experience/>
          <Skills/>
          <Project/>
          <Testimonial/>
          <Contact/>
          <Footer/>

        </div>
      </main>
      </AuroraBackground>
  );
}
