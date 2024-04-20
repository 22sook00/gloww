import React from "react";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "full";
  theme?: "primary" | "secondary" | "error" | "outline";
  customStyle?: string | number | undefined;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  size = "md",
  theme = "primary",
  type = "button",
  disabled = false,
  children,
  onClick,
  customStyle,
}: ButtonProps) => {
  const sizeProps =
    size === "xs"
      ? "min-w-[60px] w-fit h-[32px] p-3 text-xs"
      : size === "sm"
      ? "min-w-[80px] w-fit h-[41px] p-3 text-sm"
      : size === "md"
      ? "min-w-[100px] h-[43px] p-3"
      : size === "lg"
      ? "min-w-[130px] w-full h-[52px] p-4 text-lg rounded-[8px]"
      : size === "full"
      ? "w-full h-[43px] p-3"
      : undefined;

  const themeProps =
    theme === "primary"
      ? `bg-default-black text-white hover:bg-dark-black`
      : theme === "secondary"
      ? `bg-tint-gray text-default-black hover:bg-light-gray`
      : theme === "outline"
      ? `bg-white border border-default-black hover:border-primary-dark focus:outline-none `
      : undefined;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${sizeProps ?? customStyle} ${customStyle ?? themeProps} 
    ${
      disabled &&
      "cursor-not-allowed bg-light-gray text-light-black border-opacity-30 hover:bg-light-gray"
    } font-semibold transition-all flex justify-center items-center rounded-md `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
