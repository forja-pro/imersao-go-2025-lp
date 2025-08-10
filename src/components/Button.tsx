import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  primary = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        primary
          ? "bg-primary text-black hover:bg-primary/90"
          : "bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#252525]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
