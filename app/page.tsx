import PublicLayout from "@/components/shared/PublicLayout";
import CTA from "./_components/CTA";
import Hero from "./_components/Hero";
import IntroductionSection from "./_components/IntroductionSection";
import WhyChoose from "./_components/WhyChoose";
export default function Home() {
  return (
    <PublicLayout>
      <Hero />
      <IntroductionSection />
      <WhyChoose />
      <CTA />
    </PublicLayout>
  );
}
