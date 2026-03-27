'use client';

import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { FormSection } from "../components/sections/FormSection";
import { Footer } from "../components/sections/Footer";
import { FAQSection } from "../components/sections/FAQSection";
import { AuthoritySection } from "../components/sections/AuthoritySection";
import { ProcessSection } from "../components/sections/ProcessSecion";

export default function Home() {

  
  return (
    <main className="min-h-screen">
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      {/* <TestimonialsSection></TestimonialsSection> */}
      <FormSection></FormSection>
      <ProcessSection></ProcessSection>
      <AuthoritySection></AuthoritySection>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </main>
  );
}
