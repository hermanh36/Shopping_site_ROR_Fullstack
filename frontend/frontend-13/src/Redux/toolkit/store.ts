import { configureStore } from "@reduxjs/toolkit";
import cart from './cart.slice';
import products from './product.slice';
import showCart from './showcart.slice';
import currentUser from './user.slice';

const store = configureStore({
    reducer:{
        products,
        cart,
        showCart,
        currentUser
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
