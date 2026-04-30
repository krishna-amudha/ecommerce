import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import themeReducer from "./themeSlice";

// load cart from localStorage
const savedCart = localStorage.getItem("cart");

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
     theme: themeReducer,
  },
  preloadedState: {
    cart: savedCart ? JSON.parse(savedCart) : { items: [] },
  },
});

// save cart to localStorage
store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart)
  );
});

export default store;
