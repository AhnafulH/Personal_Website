import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ScrollBtn from "@/components/ScrollBtn";

export default function Home() {
  return (
    <AuroraBackground>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto px-12 py-4">
          <Header/>
          <HeroSection/>
          {/* <ScrollBtn/> */}
        </div>
      </main>
      </AuroraBackground>
  );
}

//bg-[#121212]