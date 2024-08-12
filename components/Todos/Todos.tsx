import { todos } from '@/data/fakeData';
import { Container, Stack, Typography } from '@mui/material';
import { MagicPaper } from '../StyledMui/Paper';
import TodoItems from './TodoItem';

const TodosComponent = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        My Todos
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        mb={10}
        sx={{
          gap: { xs: 1, sm: 2, md: 3 }, // Different gap sizes for different screen sizes
        }}
      >
        {todos.map((todo) => (
          <MagicPaper
            key={todo.id}
            sx={{
              height: 'auto',
            }}
          >
            <TodoItems todo={todo} />
          </MagicPaper>
        ))}
      </Stack>
    </Container>
  );
};

export default TodosComponent;
