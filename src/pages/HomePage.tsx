import { Hero } from "../components/home/Hero";
import { ProofBar } from "../components/home/ProofBar";
import { FeaturedCases } from "../components/home/FeaturedCases";
import { NowBuilding } from "../components/home/NowBuilding";
import { ExperienceSection } from "../components/home/ExperienceSection";

export function HomePage() {
  return (
    <main className="page">
      <Hero />
      <NowBuilding />
      <ProofBar />
      <FeaturedCases />
      <ExperienceSection />
    </main>
  );
}
