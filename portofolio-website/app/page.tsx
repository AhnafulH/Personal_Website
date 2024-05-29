import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollBtn from "@/components/ScrollBtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <Header/>
        <HeroSection/>
        {/* <ScrollBtn/> */}
      </div>
    </main>
  );
}

//bg-[#121212]