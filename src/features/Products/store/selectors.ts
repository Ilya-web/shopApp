import { createSelector } from '@reduxjs/toolkit';
import { TStore } from 'store/index';

export const getState = (state: TStore) => state.products;

export const getProducts = createSelector(getState, (state) => state.products.products);

export const getIsLoading = createSelector(getState, (state) => state.products.isLoading);

export const getProductsCategory = createSelector(getState, (state) => state.category.menu);

export const getProductsCategoryIsLoading = createSelector(
  getState,
  (state) => state.category.isLoading,
);
