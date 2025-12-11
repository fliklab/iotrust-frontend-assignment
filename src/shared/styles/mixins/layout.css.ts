import { style } from '@vanilla-extract/css';

import { spacing } from '../tokens/spacing.css';

export const pageContainer = style({
  width: '100%',
  maxWidth: '100%',
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
});

export const fullWidth = style({
  width: '100%',
});

export const fullHeight = style({
  height: '100%',
});
