import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorProps {
  message: string;
  onClose?: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, onClose }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <AlertTriangle size={18} className="text-red-600" />
        <span>{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-xl text-red-700 hover:text-red-900"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Error;
