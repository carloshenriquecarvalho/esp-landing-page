// components/ui/FeatureCard.tsx
import Image from "next/image";

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

export function FeatureCard({ id, title, description, imgSrc }: FeatureCardProps) {
  
  const isHighlight = id === 3 || id % 2 !== 0; 

  const containerClasses = isHighlight
    ? "bg-white border-esp-gold/30 flex-col md:flex-row-reverse shadow-2xl"
    : "bg-esp-blue border-white/5 flex-col md:flex-row"; 

  // Classes de texto
  const titleClasses = isHighlight ? "text-black" : "text-white";
  const descClasses = isHighlight ? "text-gray-700" : "text-gray-300";
  const numberClasses = isHighlight ? "text-background/20" : "text-btn-gold";

  return (
    <div 
      className={`rounded-2xl border flex items-stretch overflow-hidden transition-all duration-300 md:min-h-[350px] ${containerClasses}`}
    >
      <div className="flex-1 relative h-[250px] md:h-full md:min-h-full">
        <Image 
          src={imgSrc} 
          alt={`Cenário ${title}`}
          fill
          className="absolute inset-0 object-cover object-center w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 relative">
        
        <span className={`absolute top-4 right-6 text-7xl font-bold opacity-100 ${numberClasses} md:text-9xl md:opacity-100`}>
          {id}
        </span>

        <h3 className={`relative z-10 text-2xl font-bold mb-4 leading-tight ${titleClasses} md:text-3xl max-w-sm`}>
          {title}
        </h3>
        <p className={`relative z-10 text-base leading-relaxed ${descClasses}`}>
          {description}
        </p>
      </div>

    </div>
  );
}