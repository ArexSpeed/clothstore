import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}

export const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log('addFavorite')
      state.items = [...state.items ,action.payload];
    },
    remove: (state, action) => {
      console.log(action, 'remove');
      const deleteId = action.payload;
      state.items = state.items.filter(item => item.id !== deleteId);
    },
  }
})

export const { add, remove } = slice.actions;

export const selectFavoriteItems = state => state.favorite.items;

export default slice.reducer;
