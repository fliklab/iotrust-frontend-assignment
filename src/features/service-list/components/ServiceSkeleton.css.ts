import { style } from '@vanilla-extract/css';

import { spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.lg,
  padding: `${spacing.md} 0`,
});

export const content = style({
  flex: 1,
});
