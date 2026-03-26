// components/sections/Footer.tsx
import Image from "next/image";
import { CONTENT } from "../../constants/content";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esp-darkblue border-t border-white/10 pt-20 pb-10 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* COLUNA 1: AUTORIDADE (5 colunas) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <Image 
            src="/logo.png" 
            alt="ESP Soluções Logo" 
            width={120} 
            height={90} 
            className="brightness-125"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A ESP Soluções Financeiras é referência em regularização de crédito e revisão técnica de apontamentos. Atuamos rigorosamente dentro das normas do Código de Defesa do Consumidor.
          </p>
          {/* SELO DE SEGURANÇA (Opcional mas ajuda no RF09/06) */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 border border-btn-gold/50 rounded-lg text-[10px] text-btn-gold font-bold uppercase">
              🔒 LGPD Compliance
            </div>
            <div className="mt-4">
              <Image 
                src="/google-safe.png" // Nome exato do seu arquivo na pasta public
                alt="Google Safe Browsing"
                width={150} 
                height={50}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="px-3 py-1 border border-white/20 rounded-lg text-[10px] text-gray-400 font-bold uppercase">
              ⚖️ Suporte Jurídico
            </div>
          </div>
        </div>

        {/* COLUNA 2: LINKS (3 colunas) */}
        <div className="md:col-span-3">
          <h4 className="font-bold mb-6 text-btn-gold uppercase text-xs tracking-widest">Institucional</h4>
        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
          <li><Link href="/quem-somos" className="hover:text-white transition-colors">Quem Somos</Link></li>
          <li><Link href="/como-funciona" className="hover:text-white transition-colors">Como Funciona</Link></li>
          <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
          <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
        </ul>
        </div>

        {/* COLUNA 3: CONTATO REAL (4 colunas) */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-6 text-btn-gold uppercase text-xs tracking-widest">Atendimento Oficial</h4>
          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <p className="flex items-center gap-3">
              <span className="text-btn-gold">📍</span> Ceilândia, Brasília - DF
            </p>
            <p className="flex items-center gap-3">
              <span className="text-btn-gold">📞</span> (61) 9202-8214
            </p>
            <p className="flex items-center gap-3">
              <span className="text-btn-gold">✉️</span> contato@espsolucoes.com.br
            </p>
          </div>
        </div>
      </div>

      {/* LINHA FINAL: DADOS DO CNPJ (RF06 PURÍSSIMO) */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 font-mono">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <span>ESP SOLUÇÕES FINANCEIRAS LTDA</span>
          <span className="hidden md:block">|</span>
          <span>CNPJ:   </span>
        </div>
        <p>© {currentYear} — Todos os direitos reservados.</p>
        <p className="hover:text-white transition-colors cursor-pointer">
          BY NEXUS TECH & INNOVATION
        </p>
      </div>
    </footer>
  );
}