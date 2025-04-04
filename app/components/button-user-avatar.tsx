import React from "react";

interface ButtonUserAvatarProps {
  name?: string;
  avatarUrl?: string;
  onClick?: () => void;
}

const getInitials = (name: string) => {
  const names = name.trim().split(" ");
  return names.map((n) => n[0]).join("").toUpperCase();
};

const ButtonUserAvatar: React.FC<ButtonUserAvatarProps> = ({ name = "User", avatarUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold hover:ring-2 ring-blue-500 transition"
      title={name}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span>{getInitials(name)}</span>
      )}
    </button>
  );
};

export default ButtonUserAvatar;
