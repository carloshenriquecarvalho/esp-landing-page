interface ButtonProps {
        text: string;
        className?: string;
        onClick?: () => void;
    }

export function Button({ text, className, onClick }: ButtonProps) {
    return (
        <button
        onClick={onClick} 
        className={`bg-btn-gold cursor-pointer text-white px-8 py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition-all ${className}`}>
            {text}
        </button>
    )
}