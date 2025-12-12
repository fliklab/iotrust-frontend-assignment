import { style } from '@vanilla-extract/css';

import { color, radii } from '@shared/styles/tokens';

export const container = style({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: color.surface,
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const rounded = style({
  borderRadius: radii.md,
});

export const fallback = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#87CEEB',
});
