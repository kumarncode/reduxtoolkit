import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    lang: "en", // Default theme
  };
const langSlice = createSlice({
  name:'en',
  initialState,
  reducers:{
    toggleLang: (state) => {
        state.lang = state.lang === "en" ? "hi" : "en";
      }
  }
});
export default langSlice;