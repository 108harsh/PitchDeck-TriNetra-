import BusinessSocialImpact from "@/components/BusinessSocialImpact";
import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import ProblemContext from "@/components/ProblemContext";
import PrototypePreview from "@/components/PrototypePreview";
import SolutionDetailed from "@/components/SolutionDetailed";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-emerald-500/30 selection:text-white">
      <FloatingNavbar />

      {/* 1. Landing / Hero */}
      <Hero />

      {/* 2. Core Problem (Real World Focus) */}
      <ProblemContext />

      {/* 3. Our Solution (Detailed + Impact) */}
      <SolutionDetailed />

      {/* 4. Business Idea & Social Impact */}
      <BusinessSocialImpact />

      {/* 5. Dashboard, Prototype & Datasets */}
      <PrototypePreview />
    </main>
  );
}
