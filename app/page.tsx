'use client';
import { useState } from "react";

export default function Home() {
  const [greeding, setGreeding] = useState("neutro");
  const updateStatus = () => {
    setGreeding("positivo");
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>Status: <strong>{greeding}</strong></p>
      <button onClick={updateStatus}>Approve</button>
    </div>
  );
}
