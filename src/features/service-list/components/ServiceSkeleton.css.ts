import { style } from '@vanilla-extract/css';

import { spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.md,
  height: '80px',
  padding: `0 ${spacing.lg}`,
});

export const content = style({
  flex: 1,
});
