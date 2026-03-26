// Use este mesmo layout para Termos, mudando apenas o conteúdo do texto.
import { InternalHeader } from "../../components/ui/InternalHeader";
import { Footer } from "../../components/sections/Footer";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-background">
      <InternalHeader />
      <main className="py-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-btn-gold mb-10 border-b pb-6">Política de Privacidade</h1>
          
          <div className="prose prose-slate max-w-none text-grey space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 underline decoration-btn-gold decoration-2 underline-offset-4">1. Coleta de Dados</h2>
              <p>Os dados coletados através do nosso formulário de análise (Nome, WhatsApp, Valor de Dívida) são utilizados estritamente para a finalidade de consultoria técnica solicitada pelo usuário.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 underline decoration-btn-gold decoration-2 underline-offset-4">2. Segurança (LGPD)</h2>
              <p>Seguimos rigorosamente a Lei Geral de Proteção de Dados. Seus dados são armazenados em ambiente seguro e nunca compartilhados com terceiros para fins publicitários.</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-2xl border-l-4 border-background">
              <p className="text-sm italic text-background">Ao solicitar sua análise, você autoriza o contato de um de nossos consultores via WhatsApp ou Telefone.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}