import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { stat } from "fs";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    cart: [],
    user: {},
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      console.log("cart state updated redux", state.cart);
    },
    updateCart: (state, action) => {

    },
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("user state updated redux", state.cart);
    },
    getContent: (state, action) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => { });
  },
});

export const { setCart, updateCart, getContent, setUser } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
export const selectGlobal = (state: RootState) => state.global;