import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle, type ButtonVariants } from './button.css';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  children: ReactNode;
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
