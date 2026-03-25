// components/sections/FeaturesSection.tsx
import { CONTENT } from "../../constants/content";
import { FeatureCard } from "../ui/FeatureCard";

export function FeaturesSection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Headline da Seção */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-btn-gold font-bold uppercase tracking-widest text-sm mb-4">
            A Solução ESP
          </h2>
          <p className="text-white text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Por que continuar sofrendo com nome sujo?
          </p>
        </div>


        <div className="grid grid-cols-1 gap-10">
          {CONTENT.features.map((item) => (
            <FeatureCard 
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}