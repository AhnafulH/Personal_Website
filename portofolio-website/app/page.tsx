import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <Header/>
        <HeroSection/>
      </div>
    </main>
  );
}

//bg-[#121212]