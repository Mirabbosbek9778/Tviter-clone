import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ButtonProps {
  label: ReactNode | string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  outline?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}
const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed",
        fullWidth ? "w-full" : "w-fit",
        secondary ? "bg-white text-black" : "bg-sky-500 text-white",
        large ? "py-3 px-5 text-xl" : "py-3 px-4 text-md",
        outline
          ? "bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40"
          : "",
        disabled ? "opacity-50 cursor-not-allowed" : ""
      )}
    >
      {label}
    </button>
  );
};

export default Button;