import { Suspense } from "react";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhereWeWorkSection from "@/components/home/WhereWeWorkSection";
import BrandEcosystemSection from "@/components/home/BrandEcosystemSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import ProjectCTA from "@/components/common/ProjectCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Home Page Banner */}
      <HeroBanner />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* About Section */}
      <AboutSection />

      {/* Where We Work Section */}
      <Suspense fallback={null}>
        <WhereWeWorkSection />
      </Suspense>

      {/* Brand & Product Ecosystem Section */}
      <Suspense fallback={null}>
        <BrandEcosystemSection />
      </Suspense>

      {/* Featured Projects Section */}
      <Suspense fallback={null}>
        <FeaturedProjectsSection />
      </Suspense>

      <ProjectCTA />
    </div>
  );
}
