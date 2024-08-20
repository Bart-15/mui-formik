import { Box, styled } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

export const LogingFormContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: lightGreen[500],
}));
