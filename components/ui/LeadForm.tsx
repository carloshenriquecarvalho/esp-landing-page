// components/ui/LeadForm.tsx
'use client'

import { useState } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { Button } from './Button';

export function LeadForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', debt: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sendGTMEvent({ 
      event: 'generate_lead', 
      form_id: 'analise_credito_principal',
      debt_range: formData.debt 
    });

    const message = `Olá! Meu nome é ${formData.name}. Gostaria de uma análise para limpar meu nome. Minha dívida aproximada é de ${formData.debt}.`;
    const whatsappUrl = `https://wa.me/556192028214?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-2xl border border-esp-gold/20 flex flex-col gap-5 w-full max-w-md mx-auto"
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-background">Análise Gratuita</h3>
        <p className="text-gray-500 text-sm">Preencha os dados para iniciarmos seu processo.</p>
      </div>

      {/* INPUT NOME */}
      <div className="flex flex-col gap-2">
        <label htmlFor='name' className="text-xs font-bold uppercase text-gray-400 ml-2">Nome Completo</label>
        <input 
          id="name"
          required
          type="text"
          placeholder="Ex: Carlos Henrique"
          className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-black outline-none focus:border-btn-gold focus:ring-1 focus:ring-btn-gold transition-all"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      {/* INPUT WHATSAPP */}
      <div className="flex flex-col gap-2">
        <label htmlFor='whatsapp' className="text-xs font-bold uppercase text-gray-400 ml-2">WhatsApp</label>
        <input 
          id="whatsapp"
          required
          type="tel"
          placeholder="(61) 99999-9999"
          className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-black outline-none focus:border-btn-gold focus:ring-1 focus:ring-btn-gold transition-all"
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="debt-select" className="text-xs font-bold uppercase text-gray-400 ml-2">Valor da Dívida</label>
        <select 
          id="debt-select"
          required
          className="bg-gray-50 border border-gray-200 p-4 rounded-2xl text-black outline-none focus:border-btn-gold transition-all appearance-none cursor-pointer"
          onChange={(e) => setFormData({...formData, debt: e.target.value})}
        >
          <option value="">Selecione um valor</option>
          <option value="Até R$5.000,00">Até R$ 5.000,00</option>
          <option value="R$5.000,00 a R$20.000,00">R$ 5.000 a R$ 20.000,00</option>
          <option value="Acima de R$20.000,00">Acima de R$ 20.000,00</option>
        </select>
      </div>

      <Button 
        text="Solicitar Minha Análise" 
        className="w-full mt-4 shadow-btn-gold/30 shadow-xl py-5"
      />
      
      <p className="text-[10px] text-center text-gray-400">
        🔒 Seus dados estão protegidos pela LGPD.
      </p>
    </form>
  );
}