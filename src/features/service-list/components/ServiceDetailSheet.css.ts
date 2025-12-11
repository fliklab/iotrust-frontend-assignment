import { style } from '@vanilla-extract/css';

import { color, radii, spacing } from '@shared/styles/tokens';

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.lg,
  marginBottom: spacing.xxxl,
});

export const iconWrapper = style({
  flexShrink: 0,
  width: '64px',
  height: '64px',
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

export const serviceName = style({
  fontSize: '20px',
  fontWeight: '700',
  color: color.textPrimary,
});

export const section = style({
  marginBottom: spacing.md,
});

export const sectionLabel = style({
  fontSize: '14px',
  fontWeight: '600',
  color: color.textPrimary,
  marginBottom: spacing.sm,
});

export const description = style({
  fontSize: '14px',
  lineHeight: '1.6',
  color: color.textSecondary,
});

export const footer = style({
  marginTop: 'auto',
  paddingTop: spacing.lg,
});

export const footerContainer = style({
  display: 'flex',
  justifyContent: 'center',
});

export const goButton = style({
  width: '240px',
  height: '52px',
  backgroundColor: color.primary,
  color: color.white,
  fontSize: '16px',
  fontWeight: '600',
  borderRadius: radii.full,
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
  selectors: {
    '&:active': {
      opacity: 0.9,
    },
  },
});
