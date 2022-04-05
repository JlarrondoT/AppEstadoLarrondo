import { createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/cart-reducer";
import thunk from 'redux-thunk'
import categoryReducer from "./reducers/category-reducer";
import productReducer from "./reducers/product-reducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
