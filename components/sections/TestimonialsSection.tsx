// components/sections/TestimonialsSection.tsx
import { CONTENT } from "../../constants/content";
import { TestimonialCard } from "../ui/TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      
      {/* Elemento Visual Dourado (Opcional, dá um ar premium) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-btn-gold/10 rounded-full blur-[100px] z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Headline da Seção */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-btn-gold font-bold uppercase tracking-widest text-sm mb-4">
            Aprovação Real
          </h2>
          <p className="text-white text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
            Não acredite apenas em nós. Acredite em quem já teve a vida transformada pela ESP.
          </p>
        </div>

        {/* O GRID: A mágica do seu pedido */}
        {/* 'grid-cols-1' (Mobile): 3 cards empilhados.
          'md:grid-cols-2' (Tablet/Desktop): Duas colunas com 3 cards cada (total 6).
          'gap-8' para respiro entre os cards.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {CONTENT.testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              city={testimonial.city}
              time={testimonial.time}
              likes={testimonial.likes}
            />
          ))}

        </div>
      </div>
    </section>
  );
}