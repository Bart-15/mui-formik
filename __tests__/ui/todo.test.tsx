import TodoItem from '@/components/Todos/TodoItem';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

test('Should render completed todo with strike', () => {
  const todo = {
    id: 1,
    name: 'Wash dishes',
    completed: true,
  };
  render(<TodoItem todo={todo} />);

  const todoItem = screen.getByTestId('todo-1');

  expect(todoItem).toHaveTextContent(/wash dishes/i);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('Should render non-completed todo without strike', () => {
  const todo = {
    id: 2,
    name: 'Wash Car',
    completed: false,
  };
  render(<TodoItem todo={todo} />);

  const todoItem = screen.getByTestId('todo-2');
  expect(todoItem).toHaveTextContent(/wash car/i);
  expect(todoItem).toHaveStyle('text-decoration: none');
});
