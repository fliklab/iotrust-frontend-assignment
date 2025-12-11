import { style } from '@vanilla-extract/css';

import { color } from '@shared/styles/tokens';

export const container = style({
  maxWidth: '480px',
  margin: '0 auto',
  minHeight: '100vh',
  backgroundColor: color.background,
});

export const content = style({
  padding: '0 16px',
  paddingBottom: '32px',
});
