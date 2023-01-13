import { RootState } from './store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: boolean = false;

const showCartSlice = createSlice({
    name:'showCart',
    initialState,
    reducers:{
        OpenCart:(state, action: PayloadAction<boolean>)=>{
            return state=!action.payload;
        }
    }
})

export const {OpenCart} = showCartSlice.actions;
export const getCartStatus = (state: RootState)=> state.showCart;
export default showCartSlice.reducer;
//export{}