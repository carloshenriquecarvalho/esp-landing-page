'use client'
import { useState } from 'react';
import { CONTENT } from '../../constants/content';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="bg-esp-darkblue py-24 px-6 text-white" id='faq'>
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-btn-gold text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-400 text-lg">Tudo o que você precisa saber sobre a regularização.</p>
        </div>

        <div className="flex flex-col gap-4">
          {CONTENT.faq.map((item) => (
            <div 
              key={item.id} 
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300 hover:border-btn-gold/30"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-lg pr-4">{item.question}</span>
                <span className={`text-2xl text-btn-gold transition-transform duration-500 ${openId === item.id ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              {/* A MÁGICA DA ANIMAÇÃO SMOOTH COM GRID */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openId === item.id 
                    ? 'grid-rows-[1fr] opacity-100 p-6 pt-0' 
                    : 'grid-rows-[0fr] opacity-0 p-6 py-0'
                }`}
              >
                <div className="overflow-hidden text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}