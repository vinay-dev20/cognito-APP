import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-colors duration-200 text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-google-blue text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
    secondary: "bg-google-gray text-google-text hover:bg-gray-200 focus:ring-gray-400",
    outline: "border border-gray-300 text-google-blue hover:bg-blue-50 focus:ring-blue-500"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};