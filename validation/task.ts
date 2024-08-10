import { object, string } from 'yup';

export const taskSchema = object({
  task: string().required('Task field is required'),
});
