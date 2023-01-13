import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import cart from '../toolkit/cart.slice';
import products from '../toolkit/product.slice';
import showCart from '../toolkit/showcart.slice';

const rootReducer = (combineReducers({
    session:sessionReducer,
    users: usersReducer,
    cart,
    products,
    showCart,
}));
export default rootReducer;