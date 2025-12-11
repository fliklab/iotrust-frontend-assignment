import { style } from '@vanilla-extract/css';

import { spacing } from '@shared/styles/tokens';

export const container = style({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

export const track = style({
  display: 'flex',
  transition: 'transform 0.3s ease-out',
});

export const slide = style({
  flexShrink: 0,
  width: '100%',
  padding: `0 ${spacing.lg}`,
});
