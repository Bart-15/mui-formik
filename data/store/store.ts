import counterReducer from '@/data/reducers/counterSlice';
import taskReducer from '@/data/reducers/tasksSlice';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const reducerList = {
  counterReducer,
  taskReducer,
};

export const store = configureStore({
  reducer: {
    ...reducerList,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
