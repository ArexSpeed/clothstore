import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
}

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action, 'add');
      state.items = [...state.items ,action.payload];
      console.log(state.items, 'state items');
      state.totalItems++;
    },
    remove: (state, action) => {
      console.log(action, 'remove');
      const deleteId = action.payload;
      state.items = state.items.filter(item => item.id !== deleteId);
      console.log(state.items, 'state items');
      state.totalItems--;
    },
    incrementQty: (state, action) => {
      console.log(action, 'incrementAction')
      const id = action.payload
      state.items.filter(item => item.id === id && item.qty++);
      state.totalItems++;
    },
    decrementQty: (state, action) => {
      console.log(action, 'decrementAction')
      const id = action.payload
      state.items.filter(item => item.id === id && item.qty--);
      state.totalItems--;
    }
  }
})

export const { add, remove, incrementQty, decrementQty } = slice.actions;

export const selectCartItems = state => state.cart.items;
export const selectTotalItems = state => state.cart.totalItems;

export default slice.reducer;