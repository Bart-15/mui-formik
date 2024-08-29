import CustomComponents from '@/pages/custom-components';
import { render, screen } from '@testing-library/react';

test(`Custom components should display correct heading "Custom Componnets"`, () => {
  render(<CustomComponents />);

  const heading = screen.getByRole('heading', {
    name: /custom componentss/i,
  });

  expect(heading).toBeInTheDocument();
});
