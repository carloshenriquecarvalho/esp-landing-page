'use client';

import Image from "next/image";
import { Button } from "../ui/Button";
import { sendGTMEvent } from "@next/third-parties/google";
import { CONTENT } from "../../constants/content";

export function HeroSection() {
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
        <section className="relative min-h-[85vh] md:min-h-screen w-full flex flex-col items-center overflow-hidden bg-esp-darkblue">
            <picture className="absolute inset-0 z-0 w-full h-full">
                <source media="(min-width: 1024px)" srcSet="/banner-hero-desktop.png" />
                <source media="(min-width: 768px)" srcSet="/banner-hero-desktop.png" />
                <Image
                    src="/banner-hero.png"
                    alt="Fundo ESP"
                    fill
                    priority
                    className="object-cover object-center w-full h-full brightness-[0.4] md:brightness-[0.4]"
                    placeholder="empty"
                />
            </picture>

            <div className="relative z-20 py-6 md:py-10">
                <Image
                    src="/logo.png"
                    alt="Esp logo"
                    priority
                    width={100}
                    height={80}
                    className="md:w-[140px]"
                />
            </div>

            <div className="relative z-10 flex flex-col flex-1 items-center justify-end md:justify-center px-6 pb-16 md:pb-0 w-full max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-btn-gold leading-tight max-w-4xl">
                        {CONTENT.hero.title}
                    </h1>
                    
                    <p className="mt-6 text-text-primary text-lg md:text-2xl max-w-2xl opacity-90">
                        {CONTENT.hero.description}
                    </p>
                    
                    <div className="mt-10 w-full md:w-auto flex justify-center">
                        <Button
                            onClick={handleConversion}
                            id={CONTENT.gtm.id}
                            text={CONTENT.hero.ctaText}
                            className="w-full md:w-auto md:px-16 md:py-6 md:text-2xl shadow-2xl shadow-btn-gold/20"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}