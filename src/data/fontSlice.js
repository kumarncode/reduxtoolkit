import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    fontSize: 16, // Default font size
    minFontSize: 10,
    maxFontSize: 32,
  };
const fontSlice = createSlice({
    name:"font",
    initialState,
    reducers:{
        increaseFont: (state) => {
            if (state.fontSize < state.maxFontSize) {
              state.fontSize += 2;
            }
          },
          decreaseFont: (state) => {
            if (state.fontSize > state.minFontSize) {
              state.fontSize -= 2;
            }
          },
          intialFont: (state) => {
            state.fontSize = 16;
          },
    }
})
export default fontSlice;