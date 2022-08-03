import { all, fork, StrictEffect } from 'redux-saga/effects';
type SagaIterator = IterableIterator<StrictEffect>;
import { watchProductsSaga } from 'features/Products/store';
import { watchSingleProductsSaga } from 'features/SingleProduct/store';

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchProductsSaga)]);
  yield all([fork(watchSingleProductsSaga)]);
}
