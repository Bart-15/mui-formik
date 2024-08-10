import { destroyTask, loadTasks } from '@/data/function/taskFunction';
import { TTask } from '@/data/reducers/tasksSlice';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const TaskTable = ({ tasks }: { tasks: TTask[] }) => {
  const rows: string[] = ['id', 'Task', 'Completed', 'Actions'];

  async function deleteTask(id: number) {
    const res = await destroyTask(id);

    if (res?.status === 200) {
      await loadTasks();
      return;
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="task table">
        <TableHead>
          <TableRow>
            {rows.map((row) => (
              <TableCell align="left" key={row}>
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>No data available</TableCell>
            </TableRow>
          )}
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell align="left" component="th" scope="row">
                {task.id}
              </TableCell>
              <TableCell align="left">{task.task}</TableCell>
              <TableCell align="left">
                {task.completed ? 'Yes' : 'No'}
              </TableCell>
              <TableCell align="left">
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
