import type { RootState } from '@/data/store/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type TCounter = {
  value: number;
};

export const initialState: TCounter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    incByAmt: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    resetCounter: (state) => {
      if (state.value === 0) return;

      state.value = 0;
    },
  },
});

export const { increment, decrement, incByAmt, resetCounter } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counterReducer.value;

export default counterSlice.reducer;
