// eslint-disable-next-line import/named
import { SagaIterator } from 'redux-saga';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { categoryActions, productsActions } from 'features/Products/store/slice';
import { fetchCategory, fetchProducts } from 'api/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { handleErrorSaga } from 'utils/error';

function* fetchProductsSaga(action: PayloadAction<string | undefined>): SagaIterator {
  try {
    yield put(productsActions.setIsLoading(true));
    const products = yield call(fetchProducts, action.payload);
    yield put(productsActions.setProducts(products));
  } catch (error) {
    yield fork(handleErrorSaga, error);
  } finally {
    yield put(productsActions.setIsLoading(false));
  }
}
function* fetchCategorySaga(): SagaIterator {
  try {
    yield put(categoryActions.setIsLoadingCategory(true));
    const category = yield call(fetchCategory);
    yield put(productsActions.setProductsCategory(category));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(categoryActions.setIsLoadingCategory(false));
  }
}

export function* watchProductsSaga(): SagaIterator {
  yield takeLatest(productsActions.fetchProductsAction.type, fetchProductsSaga);
  yield takeLatest(productsActions.fetchProductsCategoryAction.type, fetchCategorySaga);
}
