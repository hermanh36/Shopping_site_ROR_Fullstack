// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from "../../data"
import { RootState } from './store';
import * as productUtil from '../../api/products_api'
import { createSlice,createSelector,PayloadAction,createAsyncThunk,} from "@reduxjs/toolkit";

export interface Product {
    id: number,
    seller_id: string,
    name: string,
    price: number,
    description: string,
    image: string
}

const initialState: Product[] = data;

// export const fetchProducts = createAsyncThunk(
//     "products/fetchProducts", async (_, thunkAPI) => {
//        try {
       
//         productUtil.getProducts().then((response)=>{
//             const productData = response.data;
//             console.log(productData);
//           });
//         } catch (error:any) {
//            return thunkAPI.rejectWithValue({ error: error.message });
//         }
//   });

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state, action: PayloadAction<Product>)=>{
            return [ ...state, action.payload]
        },


        deleteProduct:(state, action: PayloadAction<number>)=>{
            // const productIndex = state.findIndex(product=> product.name === action.payload)
            return state.filter(product=> product.id !==action.payload)

        }

    }
})

export const addProductAsync = (product: any) => (dispatch:any)=>{
    try{
        productUtil.addProducts(product).then((product)=>{
            // console.log("addproduct");
            console.log(product);
            dispatch(addProduct({ ...product.data }));})

            // console.log("showproducts");
            // productUtil.getProducts().then((response)=>{
            //     console.log(response.data)
            //   });
} catch (err: any){
    throw new Error(err);
}

}


export const deleteProductAsync = (product:any) => (dispatch:any)=>{
    try{
        productUtil.deleteProducts(product.id).then((product)=>{
            // console.log("delete");
            console.log(product);
            dispatch(deleteProduct(product.data.id));})
        // console.log("showproductsagain");
        // productUtil.getProducts().then((response)=>{
        //     console.log(response.data)
        //   });         
} catch (err: any){
    throw new Error(err);
}

}

export const {addProduct, deleteProduct} = productSlice.actions;
export const getProductsSelector = (state: RootState)=> state.products;
export default productSlice.reducer;
