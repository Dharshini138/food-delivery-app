import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import ButtonUserAvatar from "@/components/ButtonUserAvatar";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Cart", path: "/cart" },
];

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <header className="shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Logo />

        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium ${
                location.pathname === link.path
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Replace with real user name & image */}
          <ButtonUserAvatar name="John Doe" />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
