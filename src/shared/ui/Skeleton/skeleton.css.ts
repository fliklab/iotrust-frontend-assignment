import { keyframes, style } from '@vanilla-extract/css';

import { color, radii } from '@shared/styles/tokens';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

export const skeleton = style({
  background: `linear-gradient(90deg, ${color.border} 25%, ${color.surface} 50%, ${color.border} 75%)`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s infinite linear`,
  borderRadius: radii.sm,
});

export const circle = style({
  borderRadius: '50%',
});

export const rounded = style({
  borderRadius: radii.md,
});
