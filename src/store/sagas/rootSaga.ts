import { authSaga } from '@/store/sagas/auth';
import { userPostSaga } from '@/store/sagas/userPost';
import { all } from 'redux-saga/effects';
import { userEditProfileSaga } from './userEditProfile';

export function* rootSaga() {
  yield all([authSaga(), userPostSaga(), userEditProfileSaga()]);
}
