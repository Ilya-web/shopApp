// eslint-disable-next-line import/named
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchSingleProduct } from 'api/api';
import { fetchProductAction, setProduct } from '../store';

function* fetchSingleProductsSaga(action: PayloadAction<string>): SagaIterator {
  try {
    const singleProduct = yield call(fetchSingleProduct, action.payload);
    yield put(setProduct(singleProduct));
  } catch (error) {
    console.log(error);
  }
}

export function* watchSingleProductsSaga(): SagaIterator {
  yield takeLatest(fetchProductAction, fetchSingleProductsSaga);
}
