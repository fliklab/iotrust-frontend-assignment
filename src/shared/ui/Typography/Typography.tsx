import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import { typographyStyle, type TypographyVariants } from './typography.css';

type TypographyProps = HTMLAttributes<HTMLElement> &
  TypographyVariants & {
    as?: ElementType;
    children: ReactNode;
  };

const defaultElements: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  body: 'p',
  caption: 'span',
};

export function Typography({
  as,
  variant = 'body',
  color,
  children,
  className,
  ...props
}: TypographyProps) {
  const Component = as ?? defaultElements[variant ?? 'body'] ?? 'p';

  return (
    <Component
      className={`${typographyStyle({ variant, color })} ${className ?? ''}`}
      {...props}
    >
      {children}
    </Component>
  );
}
