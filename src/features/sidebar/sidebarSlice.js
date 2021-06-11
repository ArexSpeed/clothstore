import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
}

export const slice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      console.log('addFavorite')
      state.isOpen = !state.isOpen
    },
  }
})

export const { toggleMenu } = slice.actions;

export const selectIsOpen = state => state.sidebar.isOpen;

export default slice.reducer;
