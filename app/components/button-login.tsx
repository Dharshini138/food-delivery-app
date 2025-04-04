import React from "react";
import clsx from "clsx";

interface ButtonLoginProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  text?: string;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ loading, text = "Login", className, ...props }) => {
  return (
    <button
      className={clsx(
        "w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition",
        loading && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? "Logging in..." : text}
    </button>
  );
};

export default ButtonLogin;
