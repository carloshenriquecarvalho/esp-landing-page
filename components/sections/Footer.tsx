
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-esp-darkblue border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
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

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Navegação</h4>
          <nav className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link href="#" className="hover:text-btn-gold transition-colors">Início</Link>
            <Link href="#solucoes" className="hover:text-btn-gold transition-colors">Soluções</Link>
            <Link href="#depoimentos" className="hover:text-btn-gold transition-colors">Depoimentos</Link>
            <Link href="#contato" className="hover:text-btn-gold transition-colors">Análise Gratuita</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Fale Conosco</h4>
          <div className="text-gray-400 text-sm flex flex-col gap-3">
            <p>📍 Taguatinga, Brasília - DF</p>
            <p>📞 (61) 9202-8214</p>
            <p>✉️ contato@espsolucoes.com.br</p>
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="https://www.instagram.com/servicos.esp/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-btn-gold/20 transition-all">
              <span className="text-white">IG</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
        <p>© {currentYear} ESP SOLUÇÕES FINANCEIRAS - TODOS OS DIREITOS RESERVADOS.</p>
        <p className="hover:text-white transition-colors cursor-pointer">Desenvolvido por Nexus Tecnologia e Inovação</p>
      </div>
    </footer>
  );
}