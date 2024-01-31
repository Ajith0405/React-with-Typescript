import {PayloadAction, Slice, SliceCaseReducers, createSlice } from "@reduxjs/toolkit"

import { Product } from "./productSlice";




interface cartProductState{
    cartProducts:Product[]
}

const initialState:cartProductState ={
    cartProducts:[]
}

const CartProductSlice:Slice<cartProductState, SliceCaseReducers<cartProductState>, "cartProducts"> = createSlice({
    name:"cartProducts",
    initialState,
    reducers:{
        addToCart:(state, action: PayloadAction<Product>)=>{
            const newCartProduct:Product = action.payload
            if (newCartProduct) {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, newCartProduct],
                };
            } else {
                // Handle case where product is not found
                console.error(`Product with ID ${newCartProduct} not found.`);
                return state;
            }
        },
        deleteCartProduct: (state, action: PayloadAction<string>) => {
            const pIdToDelete = action.payload;
            return {
                ...state,
                cartProducts: state.cartProducts.filter(product => product.pId !== pIdToDelete),
            };
        },
        
    },
});

export const {addToCart, deleteCartProduct } = CartProductSlice.actions;
export const cartReducer = CartProductSlice.reducer;
export default CartProductSlice;