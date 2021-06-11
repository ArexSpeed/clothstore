import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllProducts = createAsyncThunk(
  'allProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  }
) 
export const fetchMenProducts = createAsyncThunk(
  'menProducts',
  async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)
    return response.data
  }
) 
export const fetchWomenProducts = createAsyncThunk(
  'womenProducts',
  async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`)
    return response.data
  }
) 
export const fetchKidsProducts = createAsyncThunk(
  'kidsProducts',
  async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/electronics`)
    return response.data
  }
) 


const initialState = {
  filter: 'all',
  allProducts: [],
  menProducts: [],
  womenProducts: [],
  kidsProducts: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filter = action.payload
    }
    // allProducts: async (state) => {
    //   const { data } = await axios.get('https://fakestoreapi.com/products')
    //   console.log(data, 'data')
    //   state.products = data;
    // }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.allProducts.push(action.payload)
    },
    [fetchMenProducts.fulfilled]: (state, action) => {
      state.menProducts.push(action.payload)
    },
    [fetchWomenProducts.fulfilled]: (state, action) => {
      state.womenProducts.push(action.payload)
    },
    [fetchKidsProducts.fulfilled]: (state, action) => {
      state.kidsProducts.push(action.payload)
    },
  },
});

export const { filterProducts } = productsSlice.actions;

export const selectFilterProducts = (state) => state.products.filter;
export const selectAllProducts = (state) => state.products.allProducts;
export const selectMenProducts = (state) => state.products.menProducts;
export const selectWomenProducts = (state) => state.products.womenProducts;
export const selectKidsProducts = (state) => state.products.kidsProducts;

export default productsSlice.reducer;
