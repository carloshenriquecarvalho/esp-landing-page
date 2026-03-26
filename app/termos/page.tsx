// app/termos/page.tsx
import { InternalHeader } from "../../components/ui/InternalHeader";
import { Footer } from "../../components/sections/Footer";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background">
      <InternalHeader />
      
      <main className="py-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header da Página Legal */}
          <div className="mb-12 border-b pb-8">
            <span className="text-btn-gold font-bold uppercase tracking-widest text-xs">Documento Legal</span>
            <h1 className="text-4xl font-black text-esp-darkblue mt-2">Termos de Uso</h1>
            <p className="text-gray-500 mt-2 text-sm italic">Última atualização: 26 de Março de 2026</p>
          </div>

          <div className="space-y-10 text-white-700 leading-relaxed">
            
            {/* Seção 1 */}
            <section>
              <h2 className="text-xl font-bold text-btn-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-esp-darkblue text-white rounded-lg flex items-center justify-center text-xs">01</span>
                Aceitação dos Termos
              </h2>
              <p>
                Ao acessar o site da <strong>ESP Soluções Financeiras</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
              </p>
            </section>

            {/* Seção 2 */}
            <section>
              <h2 className="text-xl font-bold text-btn-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-esp-darkblue text-white rounded-lg flex items-center justify-center text-xs">02</span>
                Escopo da Consultoria
              </h2>
              <p>
                A ESP atua como consultoria técnica e jurídica para regularização de restrições de crédito. A <strong>Análise Gratuita</strong> inicial não constitui vínculo contratual imediato, sendo uma etapa de diagnóstico para identificar a viabilidade do serviço.
              </p>
            </section>

            {/* Seção 3 - Blindagem Jurídica Importante */}
            <section className="bg-slate-50 p-8 rounded-3xl border-l-4 border-btn-gold">
              <h2 className="text-xl font-bold text-background mb-4">03. Isenção de Responsabilidade</h2>
              <p className="text-sm text-black">
                Os materiais no site da ESP são fornecidos 'como estão'. Não oferecemos garantias implícitas de aprovação de crédito bancário imediato, visto que a concessão de crédito é uma decisão exclusiva das instituições financeiras. Nosso trabalho foca na <strong>regularização do apontamento</strong> conforme as leis vigentes.
              </p>
            </section>

            {/* Seção 4 */}
            <section>
              <h2 className="text-xl font-bold text-btn-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-esp-darkblue text-white rounded-lg flex items-center justify-center text-xs">04</span>
                Limitações
              </h2>
              <p>
                Em nenhum caso a ESP ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site, mesmo que a ESP tenha sido notificada oralmente ou por escrito da possibilidade de tais danos.
              </p>
            </section>

            {/* Seção 5 */}
            <section>
              <h2 className="text-xl font-bold text-btn-gold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-esp-darkblue text-white rounded-lg flex items-center justify-center text-xs">05</span>
                Modificações
              </h2>
              <p>
                A ESP pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
              </p>
            </section>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}