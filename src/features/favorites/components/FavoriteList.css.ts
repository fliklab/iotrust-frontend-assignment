import { style } from '@vanilla-extract/css';

import { color, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const emptyState = style({
  padding: `${spacing.xxl} 0`,
  textAlign: 'center',
  color: color.textSecondary,
  fontSize: '14px',
});
