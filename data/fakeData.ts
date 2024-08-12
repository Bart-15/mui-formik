export type Todo = {
  id: number;
  completed: boolean;
  name: string;
};

export const todos: Todo[] = [
  { id: 1, completed: false, name: 'Buy groceries' },
  { id: 2, completed: true, name: 'Finish project report' },
  { id: 3, completed: false, name: 'Call the plumber' },
  { id: 4, completed: true, name: 'Schedule doctor appointment' },
  { id: 5, completed: false, name: 'Read a book' },
];
