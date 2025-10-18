import AppShowcase from "@/feature/home-2/components/section/AppShowcase";
import CTA from "@/feature/home-2/components/section/Cta";
import Features from "@/feature/home-2/components/section/Features";
import HowWeightWorks from "@/feature/home-2/components/section/HowWeightWorks";
import Problem from "@/feature/home-2/components/section/Problem";
import Solution from "@/feature/home-2/components/section/Solution";
import TechStack from "@/feature/home-2/components/section/TechStack";
import HeroSection from "@/feature/home/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HeroSection />
      <Problem />
      <Solution />
      <Features />
      <AppShowcase />
      <HowWeightWorks />
      <TechStack />
      <CTA />
    </main>
  );
}
