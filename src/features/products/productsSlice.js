import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = productsSlice.actions;

export const selectCount = (state) => state.counter.value;

export default productsSlice.reducer;
