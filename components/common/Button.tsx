import { ChevronRightCircleIcon } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
    const variants = {
        primary: {
            button: "bg-[#0078BF] text-white hover:bg-white hover:text-[#0E3A55] hover:border border-[#0E3A55]",
            icon: "fill-white stroke-[#0078BF] group-hover:fill-[#0078BF] group-hover:stroke-white",
        },
        secondary: {
            button: "bg-white text-[#0E3A55] hover:bg-[#0078BF] hover:text-white",
            icon: "fill-[#0078BF] stroke-white group-hover:fill-white group-hover:stroke-[#0078BF]",
        },
    };

    return (
        <button
            className={`group ${variants[variant].button} flex items-center rounded-full px-5 py-3.5 gap-3 cursor-pointer transition-all duration-300 ${className}`}
            {...props}
        >
            <span>{children}</span>
            <ChevronRightCircleIcon
                className={`${variants[variant].icon} transition-all duration-300 group-hover:translate-x-1 shrink-0`}
            />
        </button>
    );
};

export default Button;