import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from "./product.slice";
import { RootState } from './store';

export interface CartItemType extends Product{
    amount:number;
}

const cartSlice = createSlice({
    name:'cart',
    initialState: [] as CartItemType[],
    reducers:{
        addToCart: (state, action: PayloadAction<Product>)=>{
            const productIndex = state.findIndex(product=> product.id ===action.payload.id);
            if(productIndex !== -1){
                state[productIndex].amount+=1;

            } else {
                state.push({...action.payload, amount:1})
            }

        },

        removeFromCart:(state, action: PayloadAction<number>)=>{
            const productIndex = state.findIndex(product=> product.id === action.payload)
            if(state[productIndex].amount>1){
                state[productIndex].amount-=1;
            } else {
                return state.filter(product=> product.id !==action.payload)
            }

        }

    }
})


export const getCartProduct = (state: RootState)=> state.cart;
export const getCartItemAmount = (state: RootState)=>state.cart.reduce((amt,next)=>amt+=next.amount, 0);
export const getTotalPrice = (state: RootState)=> state.cart.reduce((acc,next)=>acc+=(next.amount * next.price), 0);
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
//export {}