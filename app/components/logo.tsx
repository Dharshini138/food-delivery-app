import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/logo.png" // Place your logo image in public/logo.png
        alt="Tasty Kitchen"
        className="w-8 h-8"
      />
      <span className="text-xl font-bold text-orange-600">TastyKitchen</span>
    </Link>
  );
};

export default Logo;
