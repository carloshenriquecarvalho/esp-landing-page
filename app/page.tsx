'use client';
import { Button } from "../components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [greeding, setGreeding] = useState("neutro");
  const updateStatus = () => {
    setGreeding("positivo");
  }
  return (
    <div className="bg-esp-gold flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button text="Faça sua Análise Agora!" >
        
      </Button>
    </div>
  );
}
