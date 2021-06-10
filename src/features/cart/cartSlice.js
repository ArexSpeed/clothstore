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
    },
    incrementQty: (state, action) => {
      console.log(action, 'incrementAction')
      const id = action.payload
      state.items.filter(item => item.id === id && item.qty++)
    },
    decrementQty: (state, action) => {
      console.log(action, 'decrementAction')
      const id = action.payload
      state.items.filter(item => item.id === id && item.qty--)
    }
  }
})

export const { add, incrementQty, decrementQty } = slice.actions;

export const selectCartItems = state => state.cart.items;

export default slice.reducer;