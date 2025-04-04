import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  ClipboardList,
  Users,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home size={18} />, path: "/" },
  { name: "Orders", icon: <ClipboardList size={18} />, path: "/orders" },
  { name: "Cart", icon: <ShoppingCart size={18} />, path: "/cart" },
  { name: "Customers", icon: <Users size={18} />, path: "/customers" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 bg-white shadow-md p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">TastyKitchen</h2>
      
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-10">
        <button className="flex items-center space-x-2 text-sm text-red-600 hover:underline">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
