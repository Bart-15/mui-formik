import LoginForm from '@/components/pages/login/LoginForm';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Login Form', () => {
  afterEach(() => {
    cleanup();
  });
  test('It should render form elements correctly', () => {
    render(<LoginForm />);

    const emailTextField = screen.getByTestId('login-email-textfield');
    const passwordTextField = screen.getByTestId('login-password-textfield');
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });

    expect(emailTextField).toBeInTheDocument();
    expect(passwordTextField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('It should display error message for null input', async () => {
    render(<LoginForm />);

    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });
    userEvent.click(loginButton);

    await screen.findByText('Email is required');
    await screen.findByText('Password is required');
  });

  test('It should display error message for invalid input', async () => {
    render(<LoginForm />);

    // screen.debug(); // This will print the current HTML output to the console
    const emailTextField = screen.getByTestId('login-email-textfield');
    const passwordTextField = screen.getByTestId('login-password-textfield');

    await userEvent.type(emailTextField, 'jjtest.com');
    emailTextField.blur();

    await userEvent.type(passwordTextField, 'pass');
    passwordTextField.blur();

    //Error message
    await screen.findByText('Invalid email address');
    await screen.findByText('Password must be atleast 8 characters');
  });

  test('No error message will display fo valid input', async () => {
    render(<LoginForm />);

    const emailTextField = screen.getByTestId('login-email-textfield');
    const passwordTextField = screen.getByTestId('login-password-textfield');

    await userEvent.type(emailTextField, 'jessy@mail.com');
    emailTextField.blur();

    await userEvent.type(passwordTextField, 'PasWord1234');
    passwordTextField.blur();

    const emailError = screen.queryByText('Invalid email address');
    const passwordError = screen.queryByText(
      'Password must be atleast 8 characters'
    );

    expect(emailError).toBeNull();
    expect(passwordError).toBeNull();
  });
});
