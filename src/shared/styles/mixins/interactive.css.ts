import { style } from '@vanilla-extract/css';

export const touchFeedback = style({
  transition: 'opacity 0.15s ease, transform 0.15s ease',
  selectors: {
    '&:active': {
      opacity: 0.9,
      transform: 'scale(0.98)',
    },
  },
});

export const hoverHighlight = style({
  transition: 'background-color 0.15s ease',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
});

export const ellipsis = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const lineClamp = (lines: number) =>
  style({
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  });
