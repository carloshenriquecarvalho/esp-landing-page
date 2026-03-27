// components/sections/AuthoritySection.tsx
import { CONTENT } from "../../constants/content";

export function AuthoritySection() {
  const stats = [
    { label: "CPFs Regularizados", value: "+5.000" },
    { label: "Anos de Experiência", value: "6+" },
    { label: "Atendimento Nacional", value: "27 Estados" },
    { label: "Processos 100% Lícitos", value: "Garantia Jurídica" },
  ];

  return (
    <section className="bg-background py-12 border-y border-btn-gold/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col gap-1">
              <span className="text-btn-gold text-3xl md:text-4xl font-black block">
                {stat.value}
              </span>
              <span className="text-white/50 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}