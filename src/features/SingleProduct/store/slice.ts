import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProduct } from 'types/types';

export const product = createSlice({
  name: 'product',
  initialState: null as TProduct | null,
  reducers: {
    setProduct: (_, action: PayloadAction<TProduct>) => action.payload,
    resetProduct: () => null,

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetProductAction: () => {},
    fetchProductAction: (_, action: PayloadAction<string>) => {},
  },
});

export const { setProduct, fetchProductAction, resetProduct, resetProductAction } = product.actions;
export default product.reducer;
