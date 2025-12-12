import { style } from '@vanilla-extract/css';

import { color, spacing, typography } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: spacing.xl,
  paddingBottom: spacing.md,
  borderTop: `1px solid ${color.border}`,
  borderBottom: `1px solid ${color.border}`,
});

export const title = style({
  fontSize: typography.body.fontSize,
  fontWeight: '600',
  color: color.textPrimary,
});

export const action = style({
  fontSize: typography.caption.fontSize,
  color: color.textSecondary,
  cursor: 'pointer',
});
