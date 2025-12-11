import { style } from '@vanilla-extract/css';

import { color, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.xxl,
  textAlign: 'center',
  minHeight: '200px',
});

export const message = style({
  fontSize: '14px',
  color: color.textSecondary,
  marginBottom: spacing.lg,
});

export const retryButton = style({
  padding: `${spacing.sm} ${spacing.lg}`,
  backgroundColor: color.primary,
  color: color.white,
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  border: 'none',
});
