import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productSlice from "./Features/productSlice";
import CartProductSlice from "./Features/cartSlice";

export const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        cartProducts:CartProductSlice.reducer
       
    }
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch:() => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>= useSelector;