import { all } from 'redux-saga/effects';
import { authSaga } from '@/store/sagas/auth';

export function* rootSaga() {
  yield all([authSaga()]);
}
