import { style } from '@vanilla-extract/css';

import { color, radii, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.lg,
  padding: `${spacing.md} 0`,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  borderBottom: `1px solid ${color.border}`,
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
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
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

export const title = style({
  fontSize: '17px',
  fontWeight: '600',
  color: color.textPrimary,
  marginBottom: '4px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const subtitle = style({
  fontSize: '14px',
  color: color.textSecondary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const action = style({
  flexShrink: 0,
});
