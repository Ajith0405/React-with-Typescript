import {PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";


export interface Product{
    pId:string,
    pImg:string,
    pName:string,
    pPrice:number,
    pDescription:string

}

interface ProductState{
    products:Product[]
}

const initialState:ProductState={
    products:[],
}

 const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state, action: PayloadAction<Product>)=>{
            const newProduct: Product = action.payload;
            return {
                ...state,
                products: [...state.products, newProduct],
            };
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            const pIdToDelete = action.payload;
            return {
                ...state,
                products: state.products.filter(product => product.pId !== pIdToDelete),
            };
        },
    },
});

export const AllProducts = (state: RootState) => state.product.products;
export const {addProduct, deleteProduct} = ProductSlice.actions;
export const productReducer = ProductSlice.reducer;
export default ProductSlice;

