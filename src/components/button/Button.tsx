'use client'

import React, { FC } from 'react';
import  Link  from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
  variant: 'primary' | 'transparent';
  size: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  variant,
  size,
  icon,
  external = false,
}) => {
  const variantStyles = {
    primary:
      'bg-yellow_primary text-green_primary border border-slate-400 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300',
    transparent:
      'border-2 border-green_primary text-lg text-green_primary transition ease-in duration-500 hover:translate-x-4',
  };

  const sizeStyles = {
    small: 'px-4 py-2',
    medium: 'px-4 py-2',
    large: 'px-3 py-6',
  };

  // Render as a link if href is provided, otherwise render as a button
  const ButtonContent = (
    <span className="flex items-center justify-center gap-2">
      <span>{text}</span>
      {icon && <span className="text-lg">{icon}</span>}
    </span>
  );

  return href ? (
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 rounded-lg focus:outline-none ${variantStyles[variant]} ${sizeStyles[size]}`}
      >
        {ButtonContent}
      </a>
    ) : (
      <Link
        href={href}
        className={`flex items-center justify-center gap-2 w-[158px] rounded-lg focus:outline-none ${variantStyles[variant]} ${sizeStyles[size]}`}
      >
        {ButtonContent}
      </Link>
    )
  ) : (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-lg focus:outline-none ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {ButtonContent}
    </button>
  );
};

export default Button;