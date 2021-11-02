import { authSaga } from '@/store/sagas/auth';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([authSaga()]);
}
