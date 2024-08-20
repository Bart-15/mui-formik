import { InferType, object, string } from 'yup';

export const LoginFormSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Password is required'),
});

export type LoginFormValues = InferType<typeof LoginFormSchema>;
