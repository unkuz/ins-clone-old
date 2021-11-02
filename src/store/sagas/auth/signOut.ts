import { auth } from '@/helpers/firebase';
import { signOutFailure, signOutRequest, signOutSuccess } from '@/store/reducers/authSlice';
import { signOut as FireSignOut } from 'firebase/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

function* onSignOut(): any {
  try {
    call(FireSignOut, auth);
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* signOut() {
  yield takeLatest(signOutRequest.toString(), onSignOut);
}
