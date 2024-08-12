import TodosComponent from '@/components/Todos/Todos';
import { render, screen } from '@testing-library/react';

test('It should displays My Todos', () => {
  render(<TodosComponent />);

  const heading = screen.getByRole('heading', {
    name: /my todos/i,
  });

  expect(heading).toBeInTheDocument();
});
