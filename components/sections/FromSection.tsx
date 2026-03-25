// components/sections/FormSection.tsx
import { LeadForm } from "../ui/LeadForm";

export function FormSection() {
  return (
    <section className="bg-esp-darkblue py-24 px-6 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-btn-gold/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Pronto para <span className="text-btn-gold">limpar seu nome</span> de uma vez por todas?
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            Nossa equipe jurídica está pronta para analisar seu caso. O primeiro passo para sua liberdade financeira começa aqui.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 text-white/80">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-btn-gold">✓</span> Análise 100% Gratuita
            </div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-btn-gold">✓</span> Retorno em até 24 horas
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <LeadForm />
        </div>
        
      </div>
    </section>
  );
}