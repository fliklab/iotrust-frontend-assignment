import { style } from '@vanilla-extract/css';

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const flexBetween = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const flexStart = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexColumnCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
