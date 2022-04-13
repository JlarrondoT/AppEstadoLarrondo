import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cart-reducer";
import thunk from 'redux-thunk'
import categoryReducer from "./reducers/category-reducer";
import productReducer from "./reducers/product-reducer";

export interface IReducers {
  categories: any,
  products: any,
  cart: any
}

let combinedReducers = {
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
} as IReducers;

const rootReducer = combineReducers(combinedReducers);

export default createStore(rootReducer, applyMiddleware(thunk));
