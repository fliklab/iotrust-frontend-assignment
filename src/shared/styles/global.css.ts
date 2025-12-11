import { globalStyle } from '@vanilla-extract/css';

import { color } from './tokens/color.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontSize: '16px',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('body', {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  backgroundColor: color.background,
  color: color.textPrimary,
  lineHeight: 1.5,
  minHeight: '100vh',
});

globalStyle('#root', {
  minHeight: '100vh',
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
});

globalStyle('input, textarea', {
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
});
