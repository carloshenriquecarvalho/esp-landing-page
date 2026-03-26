import { InternalHeader } from "../../components/ui/InternalHeader";
import { Footer } from "../../components/sections/Footer";

export default function ComoFunciona() {
  const passos = [
    { n: "01", t: "Análise Técnica", d: "Avaliamos seu CPF nos principais órgãos e detectamos irregularidades ou oportunidades de revisão." },
    { n: "02", t: "Estratégia Jurídica", d: "Nossa equipe aplica as teses legais para solicitar a regularização dos seus apontamentos." },
    { n: "03", t: "Nome Limpo", d: "Monitoramos o sistema até que a restrição seja removida e seu poder de compra retorne." }
  ];

  return (
    <div className="min-h-screen bg-bbackground ">
      <InternalHeader />
      <main className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-btn-gold mb-4">Método ESP de Regularização</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">Um processo fundamentado na lei, sem letras miúdas e focado em resultados rápidos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {passos.map((p) => (
              <div key={p.n} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <span className="text-5xl font-black text-btn-gold block mb-6">{p.n}</span>
                <h3 className="text-xl font-bold text-background mb-3">{p.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}