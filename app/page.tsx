import { CTA } from "@/app/components/CTA";
import { Captions } from "@/app/components/Captions";
import { Comparison } from "@/app/components/Comparison";
import { DeepFeatures } from "@/app/components/DeepFeatures";
import { FAQ } from "@/app/components/FAQ";
import { Features } from "@/app/components/Features";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Presets } from "@/app/components/Presets";
import { Pricing } from "@/app/components/Pricing";
import { Problem } from "@/app/components/Problem";
import { SocialProof } from "@/app/components/SocialProof";
import { UseCases } from "@/app/components/UseCases";
import {
  captionItems,
  comparisonRows,
  deepFeatureGroups,
  faqItems,
  featureCards,
  heroMetrics,
  howItWorksSteps,
  marketingNavLinks,
  presetItems,
  pricingPlans,
  problemItems,
  socialProofLogos,
  useCaseItems
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <main>
      <Header links={marketingNavLinks} />
      <Hero metrics={heroMetrics} />
      <SocialProof logos={socialProofLogos} />
      <Problem items={problemItems} />
      <Features items={featureCards} />
      <HowItWorks steps={howItWorksSteps} />
      <DeepFeatures items={deepFeatureGroups} />
      <UseCases items={useCaseItems} />
      <Comparison rows={comparisonRows} />
      <Presets items={presetItems} />
      <Captions items={captionItems} />
      <Pricing plans={pricingPlans} />
      <FAQ items={faqItems} />
      <CTA />
      <Footer links={marketingNavLinks} />
    </main>
  );
}
