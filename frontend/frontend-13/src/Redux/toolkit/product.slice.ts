import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {data} from "../../data"
import { RootState } from './store';

export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    image: string
}

const initialState: Product[] = data;

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state, action: PayloadAction<Product>)=>{
            return [ ...state, action.payload]
            // state.push(action.payload)
        }

    }
})

export const {addProduct} = productSlice.actions;
export const getProductsSelector = (state: RootState)=> state.products;
export default productSlice.reducer;
//export{}