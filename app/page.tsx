
import HeroSection from "@/components/HeroSection";
import FourPillars from "@/components/FourPillars";
import FeaturedListings from "@/components/FeaturedListings";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import StatsBanner from "@/components/StatsBanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import AnimatedHouses from "@/components/AnimatedHouses";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-sky-50">
      <HeroSection />
      <FourPillars />
      <FeaturedListings />
      <ProcessSection />
      <FeaturedProperties/>
      <AnimatedHouses/>
      <StatsBanner />
      <Testimonials />
      //<AboutSection />

    </main>
  );
}