import { HeroSection } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { ServicesOverview } from "@/components/sections/services-overview";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustIndicators />
      <LeadMagnet />
      <ServicesOverview />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
