import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { color, typography } from '@shared/styles/tokens';

export const typographyStyle = recipe({
  base: {
    margin: 0,
  },
  variants: {
    variant: {
      h1: {
        fontSize: typography.h1.fontSize,
        fontWeight: typography.h1.fontWeight,
        lineHeight: typography.h1.lineHeight,
      },
      h2: {
        fontSize: typography.h2.fontSize,
        fontWeight: typography.h2.fontWeight,
        lineHeight: typography.h2.lineHeight,
      },
      body: {
        fontSize: typography.body.fontSize,
        fontWeight: typography.body.fontWeight,
        lineHeight: typography.body.lineHeight,
      },
      caption: {
        fontSize: typography.caption.fontSize,
        fontWeight: typography.caption.fontWeight,
        lineHeight: typography.caption.lineHeight,
      },
    },
    color: {
      primary: { color: color.textPrimary },
      secondary: { color: color.textSecondary },
      inherit: { color: 'inherit' },
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'primary',
  },
});

export type TypographyVariants = RecipeVariants<typeof typographyStyle>;
