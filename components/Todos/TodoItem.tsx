import { type Todo } from '@/data/fakeData';
import { Typography } from '@mui/material';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, name, completed } = todo;

  return (
    <Typography
      data-testid={`todo-${id}`}
      variant="body1"
      sx={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {name}
    </Typography>
  );
};

export default TodoItem;
