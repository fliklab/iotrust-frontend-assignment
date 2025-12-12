import { style } from '@vanilla-extract/css';

import { color, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.lg,
  padding: `${spacing.md} 8px`,
  borderBottom: `1px solid ${color.border}`,
});

export const content = style({
  flex: 1,
});
