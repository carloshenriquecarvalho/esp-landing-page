// components/sections/ProcessSection.tsx
import { Search, ShieldCheck, CreditCard } from "lucide-react"; // Se não tiver, use emojis ou SVGs simples

export function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-btn-gold" />,
      title: "Análise Gratuita",
      desc: "Analisamos seu CPF nos órgãos de proteção ao crédito para identificar irregularidades e o que pode ser removido legalmente."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-btn-gold" />,
      title: "Estratégia Jurídica",
      desc: "Nossos especialistas aplicam teses fundamentadas no Código de Defesa do Consumidor para solicitar a regularização dos apontamentos."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-btn-gold" />,
      title: "Nome Limpo",
      desc: "Acompanhamos o processo até que a restrição seja retirada, devolvendo a você o poder de compra e crédito no mercado."
    }
  ];

  return (
    <section id="como-funciona" className="bg-esp-darkblue py-24 px-6 relative overflow-hidden">
      {/* Detalhe de fundo para não ficar chapado */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-btn-gold/5 rounded-full blur-[120px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Três passos para a sua <span className="text-btn-gold">Liberdade</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sem burocracia. Sem promessas falsas. Apenas a aplicação rigorosa da lei em seu favor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Linha conectora entre os passos (apenas no desktop) */}
              {index !== 2 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[1px] border-t border-dashed border-btn-gold/30 z-0" />
              )}
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-btn-gold/50 transition-all duration-300 relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-esp-darkblue border border-btn-gold/20 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#form" 
            className="inline-block bg-btn-gold text-esp-darkblue font-black px-10 py-4 rounded-full hover:scale-105 transition-transform shadow-lg shadow-btn-gold/20 uppercase text-sm tracking-widest"
          >
            Quero minha análise agora
          </a>
        </div>
      </div>
    </section>
  );
}