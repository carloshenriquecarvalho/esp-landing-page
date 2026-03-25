'use client';

import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FormSection } from "../components/sections/FromSection";

export default function Home() {

  
  return (
    <main className="min-h-screen">
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <FormSection></FormSection>
    </main>
  );
}
