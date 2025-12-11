import { recipe } from '@vanilla-extract/recipes';

import { color, radii, typography } from '@shared/styles/tokens';

export const buttonStyle = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: typography.button.fontWeight,
    borderRadius: radii.full,
    transition: 'opacity 0.15s ease, transform 0.15s ease',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    selectors: {
      '&:active': {
        opacity: 0.9,
        transform: 'scale(0.98)',
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        transform: 'none',
      },
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: color.primary,
        color: color.white,
      },
      secondary: {
        backgroundColor: color.white,
        color: color.textPrimary,
        border: `1px solid ${color.border}`,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: color.textSecondary,
      },
    },
    size: {
      sm: {
        height: '32px',
        padding: '0 12px',
        fontSize: '12px',
      },
      md: {
        height: '44px',
        padding: '0 16px',
        fontSize: '14px',
      },
      lg: {
        height: '52px',
        padding: '0 20px',
        fontSize: '16px',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
