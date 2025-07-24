import { HeroSection } from "@/components/HeroSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { SolutionSection } from "@/components/SolutionSection";
import { StockFilterSection } from "@/components/StockFilterSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExploreSection } from "@/components/ExploreSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <StockFilterSection />
      <HowItWorksSection />
      <TechStackSection />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default Index;
