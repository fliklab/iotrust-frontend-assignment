import { style } from '@vanilla-extract/css';

import { color, radii, spacing, typography } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.md,
  padding: `${spacing.md} 0`,
});

export const iconWrapper = style({
  flexShrink: 0,
  width: '64px',
  height: '64px',
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

export const url = style({
  fontSize: typography.caption.fontSize,
  color: color.textSecondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

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
