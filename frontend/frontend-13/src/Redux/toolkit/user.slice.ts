import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { RootState } from './store';

export interface UserType {
    user: any,
    username: any,
    email: any
}

// const initialState: string ='';
const initialState: UserType ={
    user: 0,
    username: "",
    email: ""
};


const userSlice = createSlice({
    name:'currentUser',
    initialState,
    reducers:{
        addCurrentUser:(state, action: PayloadAction<UserType>)=>{
            return state=action.payload;

        },

        clearCurrentUser:(state)=>{
            return initialState;
}
            
        
       
            // return clearState;
        
            
}}
)



export const {addCurrentUser, clearCurrentUser} = userSlice.actions;
export const getCurrenntUser = (state: RootState)=> state.currentUser;
export default userSlice.reducer;