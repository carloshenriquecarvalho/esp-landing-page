'use client';

import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";

export default function Home() {

  
  return (
    <main className="min-h-screen">
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
    </main>
  );
}
