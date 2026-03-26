// components/ui/InternalHeader.tsx
import Link from "next/image";
import LinkNext from "next/link";
import Image from "next/image";

export function InternalHeader() {
  return (
    <header className="w-full bg-background py-6 px-6 border-b border-white/5">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo que também volta para a Home */}
        <LinkNext href="/">
          <Image src="/logo.png" alt="ESP Logo" width={80} height={50} />
        </LinkNext>

        {/* Botão de Voltar Minimalista */}
        <LinkNext 
          href="/" 
          className="text-btn-gold text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
        >
          <span>←</span> Voltar para o Início
        </LinkNext>
      </div>
    </header>
  );
}