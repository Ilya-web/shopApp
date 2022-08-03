import { call } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { Toaster } from 'components/Toaster';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const isAxiosError = (value: any): value is AxiosError => value && value.isAxiosError;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */

export function* handleErrorSaga(error: unknown) {
  if (isAxiosError(error)) {
    // yield call(Toaster, error);
  }
}
