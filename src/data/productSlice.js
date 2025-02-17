import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from "./productList.json";

export const fetchAllProducts = createAsyncThunk('fetch-all-products',async (apiUrls)=>{
  let res = await fetch(apiUrls);
  res = await res.json();
  return res;
});
const productSlice = createSlice({
    name:'products',
    initialState:{data:[],fetchStatus:''},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
          state.data = action.payload
          state.fetchStatus = 'success'
        })
         .addCase(fetchAllProducts.pending,(state)=>{
            state.fetchStatus = 'pending'
         })
         .addCase(fetchAllProducts.rejected,(state)=>{
            state.data = productList.products;
            state.fetchStatus = 'rejected'
         })
    }
});
export default productSlice;