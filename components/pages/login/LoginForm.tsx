import { LoginField } from '@/components/Form/FormFields';
import { LogingFormContainer } from '@/components/StyledMui/Box';
import { SuccessButton } from '@/components/StyledMui/Button';
import {
  LoginFormSchema,
  LoginFormValues,
} from '@/validation/login.validation';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Form, Formik, FormikHelpers } from 'formik';

const initVal: LoginFormValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  function handleLoginSubmit(
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>
  ) {
    console.log(values);
  }

  return (
    <LogingFormContainer>
      <Paper
        elevation={4}
        sx={{
          width: {
            xs: '90%', // 90% width on extra-small screens
            sm: '30%', // 80% width on small screens,
            md: '30%  ',
          },
          borderRadius: 0,
          padding: '40px',
        }}
      >
        <Formik
          initialValues={initVal}
          validationSchema={LoginFormSchema}
          onSubmit={(values, formikHelpers) =>
            handleLoginSubmit(values, formikHelpers)
          }
        >
          <Form>
            <Stack>
              <LoginField
                name="email"
                type="email"
                aria-label="email"
                fullWidth
                placeholder="Email"
                inputProps={{
                  'data-testid': 'login-email-textfield',
                }}
              />

              <LoginField
                name="password"
                type="password"
                fullWidth
                placeholder="Password"
                inputProps={{
                  'data-testid': 'login-password-textfield',
                }}
              />

              <SuccessButton type="submit" disableElevation disableRipple>
                LOGIN
              </SuccessButton>
            </Stack>
          </Form>
        </Formik>
      </Paper>
    </LogingFormContainer>
  );
};

export default LoginForm;
