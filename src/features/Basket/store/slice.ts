import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types/types';

export type TState = {
  count: number;
  product: TProduct;
};

export const basket = createSlice({
  name: 'basket',
  initialState: [] as TState[],
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      const productIndex = state.findIndex((p) => p.product.id === action.payload.id);
      if (productIndex !== -1) {
        state[productIndex].count += 1;
      } else {
        return [...state, { count: 1, product: action.payload }];
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productIndex = state.findIndex((p) => p.product.id === action.payload);
      if (productIndex !== -1 && state[productIndex].count === 1) {
        return state.filter((p) => p.product.id !== action.payload);
      }
      if (productIndex !== -1) {
        state[productIndex].count = state[productIndex].count - 1;
      }
    },
    resetAllProduct: (state, action: PayloadAction<number>) =>
      state.filter((p) => p.product.id !== action.payload),

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    basketAction: (_, action: PayloadAction<TProduct>) => {},
  },
});

export const { addProduct, removeProduct, basketAction, resetAllProduct } = basket.actions;
export default basket.reducer;
