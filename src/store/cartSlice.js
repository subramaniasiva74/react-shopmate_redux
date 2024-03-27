// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const new_total = state.total + action.payload.price;
            return {...state, total: new_total, cartList: updatedCartList}
        },
        remove(state, action){
            const updatedCartList = state.cartList.filter(current => current.id !== action.payload.id);
            const new_total = state.total - action.payload.price;
            return {...state, total: new_total, cartList: updatedCartList}
        }
    }

});


export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;