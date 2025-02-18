import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: "light", // Default theme
  };
const themeSlice = createSlice({
  name:'light',
  initialState,
  reducers:{
    toggleTheme: (state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
      }
  }
});
export default themeSlice;