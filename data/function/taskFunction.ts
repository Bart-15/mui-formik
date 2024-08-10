import { TTask } from '@/data/reducers/tasksSlice';
import { store } from '@/data/store/store';
import axios from '@/utils/axios';
import { AxiosError } from 'axios';

export async function loadTasks() {
  try {
    const { data } = await axios.get('/tasks');

    store.dispatch({
      type: 'task/loadTasks',
      payload: data as TTask[],
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch({
        type: 'task/showError',
        payload: err.message,
      });
    }
  }
}

export async function addTask(payload: { task: string }) {
  try {
    const response = await axios.post('/tasks', payload);
    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch({
        type: 'task/showTask',
        payload: err.message,
      });
    }
  }
}

export async function destroyTask(id: number) {
  try {
    const response = await axios.delete(`/tasks/${id}`);
    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      store.dispatch({
        type: 'task/showTask',
        payload: err.message,
      });
    }
  }
}
