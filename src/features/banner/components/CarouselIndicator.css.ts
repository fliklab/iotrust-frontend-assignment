import { style } from '@vanilla-extract/css';

import { radii, spacing } from '@shared/styles/tokens';

export const container = style({
  position: 'absolute',
  bottom: spacing.md,
  right: spacing.md,
  display: 'flex',
  alignItems: 'center',
  gap: spacing.xs,
  padding: `${spacing.xs} ${spacing.sm}`,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: radii.full,
});

export const text = style({
  fontSize: '12px',
  color: 'white',
  fontWeight: '500',
});
