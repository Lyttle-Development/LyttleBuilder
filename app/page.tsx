'use client';

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import { appConfig } from '@/@app';

export default function Home() {
  const homeConfig = appConfig.pages.home;
  const heroContent = homeConfig.content?.find((item) => item.type === 'hero');
  const featuresContent = homeConfig.content?.find(
    (item) => item.type === 'features'
  );

  return (
    <main className="min-h-screen">
      {heroContent && heroContent.type === 'hero' && (
        <HeroSection data={heroContent} />
      )}
      {featuresContent && featuresContent.type === 'features' && (
        <FeaturesSection data={featuresContent} />
      )}
    </main>
  );
}
