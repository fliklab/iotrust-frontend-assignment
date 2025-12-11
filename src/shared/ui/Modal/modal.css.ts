import { keyframes, style } from '@vanilla-extract/css';

import { color, radii, shadows, spacing, zIndex } from '@shared/styles/tokens';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideUp = keyframes({
  from: { transform: 'translate(-50%, calc(-50% + 20px))', opacity: 0 },
  to: { transform: 'translate(-50%, -50%)', opacity: 1 },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: color.overlay,
  zIndex: zIndex.overlay,
  animation: `${fadeIn} 0.2s ease-out`,
});

export const container = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: color.white,
  borderRadius: radii.md,
  padding: spacing.xxl,
  boxShadow: shadows.modal,
  zIndex: zIndex.modal,
  maxWidth: '300px',
  width: 'calc(100% - 32px)',
  animation: `${slideUp} 0.25s ease-out`,
});

export const title = style({
  fontSize: '18px',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: spacing.lg,
});

export const divider = style({
  borderBottom: `1px dashed ${color.border}`,
  margin: `${spacing.lg} 0`,
});

export const message = style({
  fontSize: '14px',
  textAlign: 'center',
  color: color.textPrimary,
  marginBottom: spacing.xl,
});

export const buttonGroup = style({
  display: 'flex',
  gap: spacing.md,
});
