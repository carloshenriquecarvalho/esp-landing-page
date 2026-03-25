// components/sections/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { CONTENT } from "../../constants/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esp-darkblue border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* COLUNA 1: LOGO E SOBRE */}
        <div className="flex flex-col gap-6">
          <Image 
            src="/logo.png" 
            alt="ESP Logo" 
            width={120} 
            height={80} 
            className="brightness-110"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Especialistas em recuperação de crédito e limpeza de nome. Devolvendo o poder de compra e a dignidade para milhares de brasileiros.
          </p>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Navegação</h4>
          <nav className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link href="#" className="hover:text-btn-gold transition-colors">Início</Link>
            <Link href="#solucoes" className="hover:text-btn-gold transition-colors">Soluções</Link>
            <Link href="#depoimentos" className="hover:text-btn-gold transition-colors">Depoimentos</Link>
            <Link href="#contato" className="hover:text-btn-gold transition-colors">Análise Gratuita</Link>
          </nav>
        </div>

        {/* COLUNA 3: CONTATO E LEGAL */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Fale Conosco</h4>
          <div className="text-gray-400 text-sm flex flex-col gap-3">
            <p>📍 Taguatinga, Brasília - DF</p>
            <p>📞 (61) 9202-8214</p>
            <p>✉️ contato@espsolucoes.com.br</p>
          </div>
          {/* REDES SOCIAIS (Ícones simples) */}
          <div className="flex gap-4 mt-2">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-gold/20 transition-all">
              <span className="text-white">IG</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-gold/20 transition-all">
              <span className="text-white">FB</span>
            </Link>
          </div>
        </div>
      </div>

      {/* LINHA FINAL: COPYRIGHT E CNPJ */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
        <p>© {currentYear} ESP SOLUÇÕES FINANCEIRAS - TODOS OS DIREITOS RESERVADOS.</p>
        <p>CNPJ: 00.000.000/0001-00</p> {/* Rick, peça o CNPJ real do Edgar depois */}
        <p className="hover:text-white transition-colors cursor-pointer">Desenvolvido por Nexus Growth</p>
      </div>
    </footer>
  );
}