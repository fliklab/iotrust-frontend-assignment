import { style } from '@vanilla-extract/css';

import { color, radii, spacing, typography } from '@shared/styles/tokens';

export const container = style({
  position: 'relative',
  width: '100%',
  height: '120px',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});

export const image = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const content = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100%',
  padding: spacing.lg,
  paddingBottom: spacing.xl,
});

export const title = style({
  fontSize: typography.h1.fontSize,
  fontWeight: typography.h1.fontWeight,
  color: color.white,
  marginBottom: spacing.sm,
});

export const ctaButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: spacing.xs,
  alignSelf: 'flex-start',
  padding: `${spacing.sm} ${spacing.lg}`,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: color.textPrimary,
  borderRadius: radii.full,
  fontSize: typography.caption.fontSize,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  selectors: {
    '&:hover': {
      backgroundColor: color.white,
    },
  },
});

export const arrow = style({
  fontSize: '10px',
});
