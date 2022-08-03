import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types/types';

type TStateProducts = {
  products: TProduct[];
  isLoading: boolean;
};

type TProductsCategory = {
  menu: string[];
  isLoading: boolean;
};

const initialState: TStateProducts = {
  products: [],
  isLoading: false,
};

const productsCategory: TProductsCategory = {
  menu: [],
  isLoading: false,
};

export const { reducer: products, actions: productsAction } = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchProductsAction: (_, action: PayloadAction<string | undefined>) => {},
  },
});

export const { reducer: category, actions: categoryActions } = createSlice({
  name: 'productsCategory',
  initialState: productsCategory,
  reducers: {
    setProductsCategory: (state, action: PayloadAction<string[]>) => {
      state.menu = action.payload;
    },
    setIsLoadingCategory: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchProductsCategoryAction: () => {},
  },
});

export const productsActions = {
  ...productsAction,
  ...categoryActions,
};

export default combineReducers({
  products,
  category,
});
