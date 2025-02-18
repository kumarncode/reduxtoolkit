import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import themeSlice from "./themeSlice";
import langSlice from "./langSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products:productSlice.reducer,
        theme:themeSlice.reducer,
        lang:langSlice.reducer,
    },
})
export default store;