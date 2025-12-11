import { keyframes, style } from '@vanilla-extract/css';

import { color, radii, spacing, zIndex } from '@shared/styles/tokens';

const slideUp = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const wrapper = style({
  position: 'fixed',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  zIndex: zIndex.modal,
  pointerEvents: 'none',
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: color.overlay,
  animation: `${fadeIn} 0.2s ease-out`,
  pointerEvents: 'auto',
});

export const container = style({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  maxWidth: '480px',
  backgroundColor: color.background,
  borderTopLeftRadius: radii.lg,
  borderTopRightRadius: radii.lg,
  zIndex: 1,
  animation: `${slideUp} 0.3s ease-out`,
  maxHeight: '80vh',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  pointerEvents: 'auto',
});

export const header = style({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: spacing.md,
  paddingBottom: 0,
});

export const closeButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  color: color.textSecondary,
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});

export const content = style({
  flex: 1,
  overflow: 'auto',
  padding: spacing.xxxl,
  paddingTop: 0,
});

export const footer = style({
  padding: spacing.xxl,
  marginBottom: spacing.md,
  paddingTop: 0,
});
