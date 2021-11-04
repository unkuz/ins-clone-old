import { authSaga } from '@/store/sagas/auth';
import { fetchAllPostsSaga } from '@/store/sagas/fetchAllPosts';
import { fetchAllUsersSaga } from '@/store/sagas/fetchAllUser';
import { userPostSaga } from '@/store/sagas/userPost';
import { all } from 'redux-saga/effects';
import { userEditProfileSaga } from '@/store/sagas/userEditProfile';
import { fetchAllSavedSaga } from '@/store/sagas/fetchAllSaved';

export function* rootSaga() {
  yield all([
    authSaga(),
    userPostSaga(),
    userEditProfileSaga(),
    fetchAllPostsSaga(),
    fetchAllUsersSaga(),
    fetchAllSavedSaga(),
  ]);
}
