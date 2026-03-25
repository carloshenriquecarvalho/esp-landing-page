'use client';

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { sendGTMEvent } from "@next/third-parties/google";
import { CONTENT } from "../constants/content";

export default function Home() {

  const handleConversion = () => {
    sendGTMEvent({
      event: 'button_click',
      value: 'cta_hero_analise',
      button_id: CONTENT.gtm.id,
      category: 'conversao'
    })
    setTimeout(() => {
      window.open("https://wa.me/556192028214", "_blank")
    }, 100)
  };
  
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[80vh] w-full flex flex-col items-center overflow-hidden">
        <picture
        className="absolute inset-0 z-0 w-full brightness-[0.6]">

          {/* Se a tela for maior que 1024px */}
          <source media="(min-width: 1024px)" srcSet="/banner-hero-desktop.png" />

          {/* Se a tela for maior que 768px */}
          <source media="(min-width: 768px)" srcSet="/banner-hero-desktop.png" />

          <Image
            src="/banner-hero.png"
            alt="Fundo ESP"
            fill
            priority
            className="absolute inset-0 z-0 object-cover object-center w-full h-full brightness-[0.4]"
            placeholder="empty">
           </Image>
          </picture>

    
        <div className="relative inset-0 z-10 py-3">
          <Image
          src="/logo.png"
          alt="Esp logo"
          priority
          width={80}
          height={60}
          >

          </Image>
        </div>
        <div className="relative z-10 flex flex-col p-6 flex-1 justify-end">
          <h1 className="text-4xl font-bold text-btn-gold leading-tight align-center text-center">
            {CONTENT.hero.title}
          </h1>
          <p className="mt-6 text-text-primary text-center">
            {CONTENT.hero.description}
          </p>
          <div className="mt-10 flex flex-col align-center">
            <Button
              onClick={handleConversion}
              id={CONTENT.gtm.id}
              text={CONTENT.hero.ctaText}
            >
            </Button>
          </div>
        </div>

      </section>
    </main>
  );
}
