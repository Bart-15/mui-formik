import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/data/store/store'


export type TTask = {
    id: number
    task: string
    completed: boolean
}


type TInitState = {
    tasks: TTask[]
    loading: boolean
    error: string
}


const initialState: TInitState = {
    tasks: [],
    loading: false,
    error: ""
}

export const taskSlice = createSlice({
    name:'task',
    initialState: initialState,
    reducers: {
        apiRequest : (state) => {
            state.loading = true;
        },

        loadTasks: (state, action: PayloadAction<TTask[]>) => {
            state.tasks = action.payload;
            state.loading = false;
        },

        addTask: (state, action: PayloadAction<TTask>) => {
            state.tasks.push(action.payload);
        },

        removeTask: (state, action: PayloadAction<number>) => {
            const newTask = state.tasks.filter((item) => item.id !== action.payload)
            state.tasks = newTask;
        },

        showError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },

        completedTask: (state, action: PayloadAction<number>) => {
            const idx = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[idx].completed = true;
        },
        showTask: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
})

export const { addTask, removeTask, completedTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.taskReducer.tasks;

export default taskSlice.reducer;