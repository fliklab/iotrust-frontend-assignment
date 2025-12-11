import { style } from '@vanilla-extract/css';

import { color, radii, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.sm,
  padding: `0 ${spacing.md}`,
  height: '44px',
  backgroundColor: color.surface,
  borderRadius: radii.sm,
});

export const icon = style({
  flexShrink: 0,
  color: color.textSecondary,
});

export const input = style({
  flex: 1,
  height: '100%',
  backgroundColor: 'transparent',
  fontSize: '14px',
  color: color.textPrimary,
  '::placeholder': {
    color: color.textSecondary,
  },
});
