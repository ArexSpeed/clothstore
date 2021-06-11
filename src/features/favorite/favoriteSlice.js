import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalLikes: 0
}

export const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log('addFavorite')
      state.items = [...state.items ,action.payload];
      state.totalLikes++;
    },
    remove: (state, action) => {
      console.log(action, 'remove');
      const deleteId = action.payload;
      state.items = state.items.filter(item => item.id !== deleteId);
      state.totalLikes--;
    },
  }
})

export const { add, remove } = slice.actions;

export const selectFavoriteItems = state => state.favorite.items;
export const selectTotalLikes = state => state.favorite.totalLikes;

export default slice.reducer;
