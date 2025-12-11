import { style } from '@vanilla-extract/css';

import { color, radii, spacing, typography } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.md,
  height: '80px',
  padding: `0 ${spacing.lg}`,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  selectors: {
    '&:active': {
      backgroundColor: color.surface,
    },
  },
});

export const iconWrapper = style({
  flexShrink: 0,
  width: '56px',
  height: '56px',
  borderRadius: radii.md,
  backgroundColor: color.surface,
  overflow: 'hidden',
});

export const icon = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const content = style({
  flex: 1,
  minWidth: 0,
});

export const name = style({
  fontSize: typography.h2.fontSize,
  fontWeight: typography.h2.fontWeight,
  color: color.textPrimary,
  marginBottom: spacing.xs,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const description = style({
  fontSize: typography.body.fontSize,
  color: color.textSecondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const arrow = style({
  flexShrink: 0,
  color: color.textSecondary,
});
