interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset"; // Adicionei isso
  onClick?: () => void;
}

export function Button({ id, text, className, onClick, type = "submit" }: ButtonProps) { // Default é submit
  return (
    <button
      id={id}
      type={type} // Aplicado aqui
      onClick={onClick}
      className={`bg-btn-gold cursor-pointer text-white px-8 py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition-all ${className}`}
    >
      {text}
    </button>
  )
}