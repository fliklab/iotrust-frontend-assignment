import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle } from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyle({ variant, size, fullWidth })} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
