// components/ui/TestimonialCard.tsx
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  city: string;
  time: string;
  likes: string;
}

export function TestimonialCard({ name, text, city, time, likes }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-5 hover:border-btn-gold transition-all duration-300">
      
      <div className="relative w-14 h-14 flex-shrink-0">
        <Image 
          src="/logo.png"
          alt={`Avatar ${name}`}
          fill
          className="rounded-full object-cover shadow-inner"
        />
      </div>

      <div className="flex-1">
        
        <h4 className="text-black font-bold text-base md:text-lg mb-2">
          {name}
        </h4>
        <p className="text-gray-900 text-sm md:text-base leading-relaxed mb-4">
          {text}
        </p>
        
        <div className="flex items-center gap-6 text-gray-600 text-xs md:text-sm">
          <span>{time}</span>
          <span className="font-bold">{likes} curtidas</span>
          <span className="cursor-pointer hover:text-btn-gold">Responder</span>
        </div>
      </div>

    </div>
  );
}