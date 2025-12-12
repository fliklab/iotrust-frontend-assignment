import { style } from '@vanilla-extract/css';

import { color, spacing } from '@shared/styles/tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const searchWrapper = style({
  padding: `${spacing.md} 0`,
});

export const listContainer = style({
  width: '100%',
});

export const virtualListWrapper = style({
  width: '100%',
  position: 'relative',
});

export const virtualItem = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
});

export const emptyState = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.xxl,
  color: color.textSecondary,
  fontSize: '14px',
});

export const loadingMore = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing.lg,
  color: color.textSecondary,
  fontSize: '14px',
});
