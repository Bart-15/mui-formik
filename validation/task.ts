import { string, object } from 'yup';

export const taskSchema = object({
    task: string().required("Task field is required")
})