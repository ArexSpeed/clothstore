import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action, 'add');
      state.items = [...state.items ,action.payload];
      console.log(state.items, 'state items')
    }
  }
})

export const { add } = slice.actions;

export const selectCartItems = state => state.cart.items;

export default slice.reducer;