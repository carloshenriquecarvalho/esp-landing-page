import { InternalHeader } from "../../components/ui/InternalHeader";
import { Footer } from "../../components/sections/Footer";
import { AuthoritySection } from "../../components/sections/AuthoritySection";

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-background">
      <InternalHeader />
      <main>
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <span className="text-btn-gold font-bold uppercase tracking-widest text-sm">Institucional</span>
          <h1 className="text-4xl md:text-6xl font-black text-btn-gold mt-4 mb-8 leading-tight">
            Transparência e Justiça Financeira.
          </h1>
          
          <div className="grid gap-8 text-white-700 text-lg leading-relaxed">
            <p className="border-l-4 border-btn-gold pl-6 italic text-xl text-btn-gold/80 font-medium">
              "A ESP Soluções nasceu com um propósito único: equilibrar o jogo entre o consumidor e as grandes instituições de crédito."
            </p>
            <p>
              Com sede em Brasília, somos uma equipe multidisciplinar focada em análise técnica e jurídica de restrições de crédito. Entendemos que o nome negativado não é apenas um problema financeiro, é uma barreira emocional que impede sonhos.
            </p>
            <p>
              Atuamos com base no <strong>Código de Defesa do Consumidor</strong>, identificando abusividades e garantindo que cada cliente recupere seu direito de comprar, financiar e planejar o futuro.
            </p>
          </div>
        </section>
        
        {/* Reutilizando a seção de números para dar autoridade aqui também */}
        <AuthoritySection />
      </main>
      <Footer />
    </div>
  );
}