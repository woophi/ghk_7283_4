import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem 20px',
  flexDirection: 'column',
  gap: '32px',
});

const btmContent = style({
  padding: 0,
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  btmContent,
  row,
};
