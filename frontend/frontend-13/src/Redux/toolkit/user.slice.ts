import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import { RootState } from './store';

export interface UserType {
    user: number,
    username: string,
    email: string
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

        }

    }
})

// const userSlice = createSlice({
//     name:'currentUser',
//     initialState,
//     reducers:{
//         addCurrentUser:(state, action: PayloadAction<string>)=>{
//             return state=action.payload

//         }

//     }
// })
export const {addCurrentUser} = userSlice.actions;
export const getCurrenntUser = (state: RootState)=> state.currentUser;
export default userSlice.reducer;