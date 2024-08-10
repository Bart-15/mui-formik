import { Paper, styled } from '@mui/material';

export const MagicPaper = styled(Paper)(({ theme }) => ({
  height: '200px', // Set your desired height
  width: '120px', // Set your desired width
  padding: theme.spacing(2), // Optional: Add padding or other styles
}));
