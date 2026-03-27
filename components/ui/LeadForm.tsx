// components/ui/LeadForm.tsx
'use client'

import React, { useState } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { Button } from './Button';

export function LeadForm() {
  // RF08: Estado atualizado com campos de qualificação
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    debt: '',
    status: '',
    time: ''
  });

  // Correção do Deprecated: Usando React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // GTM: Enviando dados completos para filtrar curiosos no Analytics
    sendGTMEvent({
      event: 'generate_lead',
      form_id: 'analise_credito_principal',
      debt_range: formData.debt,
      status_negativado: formData.status,
      tempo_divida: formData.time
    });

    // RF07: Mensagem personalizada para o Edgar já saber quem é o lead lucrativo
    const message = `Olá! Meu nome é ${formData.name}. 
Situação: ${formData.status}. 
Dívida: ${formData.debt} há ${formData.time}. 
Quero minha análise gratuita!`;

    const whatsappUrl = `https://wa.me/556192028214?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  // Classe padrão para os selects/inputs para evitar repetição
  const inputStyle = "bg-gray-50 border border-gray-200 p-4 rounded-2xl text-black outline-none focus:border-btn-gold focus:ring-1 focus:ring-btn-gold transition-all cursor-pointer";

  return (
    <form
      onSubmit={handleSubmit}
      id="form"
      className="bg-white p-8 rounded-3xl shadow-2xl border border-esp-gold/20 flex flex-col gap-5 w-full max-w-md mx-auto"
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-background">Análise Gratuita</h3>
        <p className="text-gray-600 text-sm italic">Preencha os dados e receba o retorno em 24h.</p>
      </div>

      {/* NOME */}
      <div className="flex flex-col gap-2">
        <label htmlFor='name' className="text-xs font-bold uppercase text-gray-500 ml-2">Nome Completo</label>
        <input
          id="name"
          required
          type="text"
          placeholder="Ex: Carlos Henrique"
          className={inputStyle}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      {/* WHATSAPP */}
      <div className="flex flex-col gap-2">
        <label htmlFor='whatsapp' className="text-xs font-bold uppercase text-gray-500 ml-2">WhatsApp</label>
        <input
          id="whatsapp"
          required
          type="tel"
          placeholder="(61) 99999-9999"
          className={inputStyle}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      {/* VALOR DA DÍVIDA */}
      <div className="flex flex-col gap-2">
        <label htmlFor="debt-select" className="text-xs font-bold uppercase text-gray-500 ml-2">Valor da Dívida</label>
        <select
          id="debt-select"
          required
          className={inputStyle}
          onChange={(e) => setFormData({ ...formData, debt: e.target.value })}
        >
          <option value="">Selecione um valor</option>
          <option value="Até R$5.000,00">Até R$ 5.000,00</option>
          <option value="R$5.000,00 a R$20.000,00">R$ 5.000 a R$ 20.000,00</option>
          <option value="Acima de R$20.000,00">Acima de R$ 20.000,00</option>
        </select>
      </div>

      {/* STATUS - FILTRO DE QUALIFICAÇÃO (RF08) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="is-negativado" className="text-xs font-bold uppercase text-gray-500 ml-2">Você possui restrições hoje?</label>
        <select 
          id="is-negativado" 
          required 
          className={inputStyle} 
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="">Selecione</option>
          <option value="Sim, estou negativado">Sim, estou negativado</option>
          <option value="Não, apenas score baixo">Não, apenas score baixo</option>
        </select>
      </div>

      {/* TEMPO - FILTRO DE QUALIFICAÇÃO (RF08) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="debt-time" className="text-xs font-bold uppercase text-gray-500 ml-2">Tempo da dívida principal</label>
        <select 
          id="debt-time" 
          required 
          className={inputStyle} 
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        >
          <option value="">Selecione o tempo</option>
          <option value="Menos de 1 ano">Menos de 1 ano</option>
          <option value="Entre 1 e 5 anos">Entre 1 e 5 anos</option>
          <option value="Mais de 5 anos (Caducada)">Mais de 5 anos (Caducada)</option>
        </select>
      </div>

      <Button
        type="submit"
        text="Quero minha análise gratuita agora"
        className="w-full mt-4 shadow-btn-gold/30 shadow-xl py-5"
      />

      <p className="text-[10px] text-center text-gray-500">
        🔒 Seus dados estão protegidos pela LGPD.
      </p>
    </form>
  );
}