import Features from "@/components/features";
import Header from "@/components/general/header";
import HeroSection from "@/components/heroSection/heroSection";
import WhyFinpay from "@/components/whyFinpay";

export default function Home() {
  return (
    <main className="flex bg-[#FEFEFE] text-textColor flex-col min-h-screen items-center font-sans relative">
      <Header />
      <HeroSection />
      <Features />
      <WhyFinpay />
    </main>
  );
}
