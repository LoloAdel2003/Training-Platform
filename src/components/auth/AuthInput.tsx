import React from "react";

interface AuthInputProps {
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  error?: string;
  register?: any;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  placeholder,
  icon,
  error,
  register,
}) => {
  return (
    <div className="relative mt-5">
      <label className="absolute -top-3 left-4 bg-card px-1 text-[14px] text-primary font-medium z-10 rounded-sm">
        {label}
      </label>

      <div
        className={`flex items-center border border-border rounded-lg px-4 py-2 transition-all
        ${error ? "border border-red-400" : "border-gray-300 focus-within:border-primary"}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          {...register}
          className="w-full  outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-600"
        />
        {icon && <div className="text-gray-400 cursor-pointer">{icon}</div>}
      </div>

      {error && (
        <p className="text-xs text-red-400 mt-1 ml-2">{error}</p>
      )}
    </div>
  );
};

export default AuthInput;
