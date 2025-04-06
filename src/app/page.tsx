"use client";
import HeroSection from "@/feature/home/components/sections/HeroSection";
import OverviewSection from "@/feature/home/components/sections/OverviewSection";
import ChallengeSection from "@/feature/home/components/sections/ChallengeSection";
import SolutionSection from "@/feature/home/components/sections/SolutionSection";
import BenefitsSection from "@/feature/home/components/sections/BenefitsSection";
import ImplementationSection from "@/feature/home/components/sections/ImplementationSection";
import FutureSection from "@/feature/home/components/sections/FutureSection";
import CallToActionSection from "@/feature/home/components/sections/CallToActionSection";

export default function BusmateLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 relative z-10">
        {/* Overview Tab */}
        <OverviewSection />

        {/* Challenge Tab */}
        <ChallengeSection />

        {/* Solution Tab */}
        <SolutionSection />

        {/* Benefits Tab */}
        <BenefitsSection />

        {/* Implementation Tab */}
        <ImplementationSection />

        {/* Future Tab */}
        <FutureSection />
      </main>

      {/* Call to Action */}
      <CallToActionSection />

    
    </div>
  );
}
