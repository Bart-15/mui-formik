import { Button, styled } from '@mui/material';
import { deepOrange, green, lightGreen } from '@mui/material/colors';

export const DangerButton = styled(Button)(() => ({
  backgroundColor: deepOrange[800],
  textTransform: 'none',
  letterSpacing: '.5px',
  fontSize: '1rem',
  borderRadius: '8px',
  padding: '5px 10px',
  color: 'white',
  '&:hover': {
    background: deepOrange[600],
  },
}));

export const SuccessButton = styled(Button)(() => ({
  backgroundColor: green[500],
  textTransform: 'none',
  borderRadius: '0',
  fontSize: '14px',
  fontWeight: '400',
  color: 'white',
  '&:hover': {
    background: lightGreen[600],
  },
}));
