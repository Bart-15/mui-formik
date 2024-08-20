import { TextField, styled } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const StyledLoginTextField = styled(TextField)(() => ({
  marginBottom: '15px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f0f0f0', // Background color
    borderRadius: '0px',
    '& input': {
      color: blueGrey[700], // Text color
    },
    '& fieldset': {
      border: 'none', // Remove the border
    },
  },
  '& .MuiInputLabel-root': {
    color: blueGrey[500], // Optional: change label color if needed
  },
}));
