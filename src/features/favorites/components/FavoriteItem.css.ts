import { style } from '@vanilla-extract/css';

import { color, spacing } from '@shared/styles/tokens';

export const deleteButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing.xs,
  padding: spacing.sm,
  color: color.textSecondary,
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
  selectors: {
    '&:active': {
      opacity: 0.7,
    },
  },
});

export const deleteText = style({
  fontSize: '12px',
});
