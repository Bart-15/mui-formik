import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/data/store/store'

export type TCounter = {
    value: number
}

const initialState: TCounter = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement:  state => {
            state.value -= 1
        },
        incByAmt: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incByAmt } = counterSlice.actions

export const selectCount = (state:RootState) => state.counterReducer.value;

export default counterSlice.reducer