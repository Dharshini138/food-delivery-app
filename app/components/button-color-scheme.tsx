import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "success" | "danger" | "outline" | "ghost";
  children: React.ReactNode;
}

const baseStyles = "px-4 py-2 rounded-md font-semibold focus:outline-none transition duration-200";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  ghost: "text-gray-600 hover:underline",
};

const ButtonColorScheme: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonColorScheme;
