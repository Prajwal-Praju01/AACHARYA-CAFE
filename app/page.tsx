import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { LocationMap } from "@/components/LocationMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <MenuSection />
      <ReviewsSection />
      <CTASection />
      <LocationMap />
    </>
  );
}
