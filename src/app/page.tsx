import Header from "@/components/general/header";
import HeroSection from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans relative">
      <Header />
      <HeroSection />
    </main>
  );
}
