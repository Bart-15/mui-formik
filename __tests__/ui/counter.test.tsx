import Counter from '@/pages/counter';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import { renderWithStore } from '../testUtils';

describe('Counter Component', () => {
  let incBtn: HTMLElement;
  let resetBtn: HTMLElement;
  let decBtn: HTMLElement;

  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {
    renderWithStore(<Counter />);
    //buttons
    incBtn = screen.getByRole('button', {
      name: /increment/i,
    });

    resetBtn = screen.getByRole('button', {
      name: /reset counter/i,
    });

    decBtn = screen.getByRole('button', {
      name: /decrement/i,
    });
  });

  test('should render counter component properly', () => {
    const heading = screen.getByRole('heading', {
      name: /Counter/i,
    });
    const countVal = screen.getByRole('heading', {
      name: '0',
    });

    expect(heading).toBeInTheDocument();
    expect(countVal).toBeInTheDocument();
    expect(resetBtn).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();
    expect(incBtn).toBeInTheDocument();
  });

  test('should increment the count', () => {
    fireEvent.click(incBtn);
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  test('should decrement the count', () => {
    fireEvent.click(decBtn);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  test('should reset the count', () => {
    fireEvent.click(resetBtn);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });
});
