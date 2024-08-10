import { DangerButton, SuccessButton } from '@//StyledMui/Button';
import {
  decrement,
  increment,
  resetCounter,
  selectCount,
} from '@/data/reducers/counterSlice';
import { Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const countVal = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Counter
      </Typography>

      <Typography variant="h4" textAlign="center">
        {countVal}
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <SuccessButton onClick={() => dispatch(increment())}>
          Increment
        </SuccessButton>
        <DangerButton onClick={() => dispatch(resetCounter())}>
          Reset Counter
        </DangerButton>
        <SuccessButton onClick={() => dispatch(decrement())}>
          Decrement
        </SuccessButton>
      </Stack>
    </Container>
  );
};

export default Counter;
