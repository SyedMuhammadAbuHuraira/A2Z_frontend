
import HeroSection from "@/components/HeroSection";
import FourPillars from "@/components/FourPillars";
import FeaturedListings from "@/components/FeaturedListings";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import StatsBanner from "@/components/StatsBanner";
import FeaturedProperties from "@/components/FeaturedProperties";
import SellingOptionsSection from "@/components/ROI";
import HomeValueSection from "@/components/HomeValueSection"
import LocalProofSection from "@/components/LocalProof"
import FinalCTASection from "@/components/FinalCta"
// import AnimatedHouses from "@/components/AnimatedHouses";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-sky-50">
      <HeroSection />
      <SellingOptionsSection/>
      <HomeValueSection/>
      <FeaturedProperties/>
      <ProcessSection />
      <FourPillars />
      <LocalProofSection/>
      <AboutSection />
      <FinalCTASection/>
      {/* <FeaturedListings /> */}
      {/* <AnimatedHouses/> */}
      {/* <StatsBanner /> */}
      {/* <Testimonials /> */}

    </main>
  );
}