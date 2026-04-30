import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer,  toast } from 'react-toastify';
const initialState = {
  items: [],
};

 const notify = () =>  toast.success('🦄 Wow so easy!', {
position: "top-right",
autoClose: false,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
});



const cartSlice = createSlice({
  name: "cart",
  initialState,
  
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
        
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      notify
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // remove item if quantity becomes 0
          state.items = state.items.filter(
            (i) => i.id !== action.payload
          );
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;



export default cartSlice.reducer;
