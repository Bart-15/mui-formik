import { selectCount } from "@/data/reducers/counterSlice";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/data/reducers/counterSlice";


const Counter = () => {

    const countVal = useSelector(selectCount);
    const dispatch = useDispatch();

    return ( 
        <Container>
            <Typography variant="h3" gutterBottom>Counter</Typography>

            <Typography variant="h4" textAlign="center">{countVal}</Typography>

            <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            >
                <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>Increment</Button>
                <Button variant="contained" color="primary" onClick={() => dispatch(decrement())}>Decrement</Button>

            </Stack>
        </Container>
    );
}

export default Counter;