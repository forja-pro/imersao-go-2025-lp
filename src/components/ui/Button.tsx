"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

const Button = ({
  children,
  primary = false,
  onClick,
  type = "button",
  loading = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative cursor-pointer ${
        primary
          ? "bg-primary text-black hover:bg-primary/90"
          : "bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#252525]"
      } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={loading}
    >
      {loading && (
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="w-4 h-4 border-t-2 border-black rounded-full animate-spin" />
        </div>
      )}
      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
};

export default Button;
