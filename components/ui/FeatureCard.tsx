// components/ui/FeatureCard.tsx
import Image from "next/image";

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  imgSrc: string; // Caminho da imagem na /public (ex: /feature-2.webp)
}

export function FeatureCard({ id, title, description, imgSrc }: FeatureCardProps) {
  
  // A Lógica de Ouro que você queria: Se o ID for 3 (ou qualquer ímpar), ele é o card branco.
  // Usamos o operador de resto (id % 2 !== 0) para automatizar isso.
  const isHighlight = id === 3 || id % 2 !== 0; 
  // Se quiser seguir a imagem à risca (2=Azul, 3=Branco, 4=Azul), a regra acima funciona perfeita.

  // Definição de classes dinâmicas para limpar o JSX
  const containerClasses = isHighlight
    ? "bg-white border-esp-gold/30 flex-col md:flex-row-reverse shadow-2xl" // Diferente (3): Fundo Branco, Texto Preto, Imagem Direita (Desktop)
    : "bg-esp-blue border-white/5 flex-col md:flex-row"; // Normal (2, 4): Fundo Azul, Texto Branco, Imagem Esquerda (Desktop)

  // Classes de texto
  const titleClasses = isHighlight ? "text-black" : "text-white";
  const descClasses = isHighlight ? "text-gray-700" : "text-gray-300";
  const numberClasses = isHighlight ? "text-esp-darkblue/10" : "text-btn-gold"; // O número atrás do texto

  return (
    <div 
      className={`rounded-2xl border flex items-stretch overflow-hidden transition-all duration-300 md:min-h-[350px] ${containerClasses}`}
      // 'flex-col' no mobile garante que a imagem fique em cima e texto embaixo (ou vice-versa).
      // 'md:flex-row(-reverse)' faz o layout alternado no desktop como na sua imagem.
      // 'items-stretch' garante que as duas metades tenham a mesma altura.
      // 'min-h-[350px]' no desktop garante que o card tenha corpo.
    >
      
      {/* 1. BLOCO DA IMAGEM SANGRADA (Metade 1) */}
      {/* 'flex-1' faz ocupar metade do espaço. 'relative' e 'h-full' para o Image fill. */}
      {/* 'min-h-[250px]' garante que no mobile a imagem não vire uma linha. */}
      <div className="flex-1 relative h-[250px] md:h-full md:min-h-full">
        <Image 
          src={imgSrc} 
          alt={`Cenário ${title}`}
          fill // Preenche o container pai (a div)
          className="absolute inset-0 object-cover object-center w-full h-full"
          // 'object-cover' garante que a imagem sangre e corte sem distorcer.
        />
      </div>

      {/* 2. BLOCO DE CONTEÚDO (Metade 2) */}
      {/* 'flex-1' faz ocupar metade do espaço. 'p-8' para respiro. 'relative' para o número. */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-12 relative">
        
        {/* O NÚMERO (Como na imagem, grande e transparente/dourado) */}
        <span className={`absolute top-4 right-6 text-7xl font-bold opacity-100 ${numberClasses} md:text-9xl md:opacity-100`}>
          {id}
        </span>

        {/* Título e Descrição */}
        <h3 className={`relative z-10 text-2xl font-bold mb-4 leading-tight ${titleClasses} md:text-3xl max-w-sm`}>
          {title}
        </h3>
        <p className={`relative z-10 text-base leading-relaxed ${descClasses}`}>
          {description}
        </p>
      </div>

    </div>
  );
}