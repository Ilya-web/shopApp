import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from 'features/Products/store';
import singleProductsReducer from 'features/SingleProduct/store';
import basketReducer from 'features/Basket/store';

export const createRootReducer = () => {
  return combineReducers({
    products: productsReducer,
    singleProduct: singleProductsReducer,
    basket: basketReducer,
  });
};
