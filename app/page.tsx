'use client';
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { sendGTMEvent } from "@next/third-parties/google";
import { CONTENT } from "../constants/content";

export default function Home() {
  const handleConversion = () => {
    sendGTMEvent({
      event: 'button_click',
      value: 'cta_hero_analise',
      button_id: 'hero_main_button',
      category: 'conversao'
    })
    setTimeout(() => {
      window.open("https://wa.me/556192028214", "_blank")
    }, 100)
  };
  
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center px-6 py-16">
        <div>
          <h1 className="text-4xl font-bold text-btn-gold leading-tight">
            {CONTENT.hero.title}
          </h1>
        </div>

      </section>
    </main>
  );
}
