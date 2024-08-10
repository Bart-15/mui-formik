import TaskTable from '@//Tasks/TaskTable';
import { MyTextField } from '@/components/Form/FormFields';
import { addTask, loadTasks } from '@/data/function/taskFunction';
import { RootState } from '@/data/store/store';
import { taskSchema } from '@/validation/task';
import { Box, Button, Container, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const initVal = {
  task: '',
};

const TasksPage = () => {
  const { loading, tasks } = useSelector(
    (state: RootState) => state.taskReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    async function init() {
      mounted && (await loadTasks());
    }

    init();

    //cleanup func
    return () => {
      mounted = false;
    };
  }, []);

  async function handleSubmit(
    values: { task: string },
    formikHelpers: FormikHelpers<{ task: string }>
  ) {
    const payload = { ...values };
    const res = await addTask(payload);

    if (res?.status === 200) {
      await loadTasks();
      formikHelpers.resetForm();
    }
  }

  return (
    <>
      <Head>
        <title>Practice Redux Toolkit</title>
      </Head>
      <Container>
        <Typography
          variant="h3"
          alignItems="center"
          gutterBottom
          textAlign="center"
          mt={10}
        >
          Task (Redux Toolkit)
        </Typography>

        {/* Add new Task */}
        <Box>
          <Formik
            initialValues={initVal}
            validationSchema={taskSchema}
            onSubmit={(values, formikHelpers) =>
              handleSubmit(values, formikHelpers)
            }
          >
            {({ isSubmitting, isValidating }) => (
              <Form>
                <Box mb={6}>
                  <MyTextField
                    name="task"
                    label="Task"
                    size="small"
                    fullWidth
                    sx={{ maxWidth: { md: '350px', display: 'block' } }}
                  />
                  <Button
                    type="submit"
                    variant="outlined"
                    color="success"
                    sx={{ marginTop: '10px' }}
                    disabled={isSubmitting || isValidating}
                  >
                    Add Todo
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        {/* Task Table  */}
        <TaskTable tasks={tasks} />
      </Container>
    </>
  );
};

export default TasksPage;
