import { createUserWithEmail } from '@/store/sagas/auth/createUserWithEmail';
import { signInWithEmail } from '@/store/sagas/auth/signInWithEmail';
import { signInWithFacebook } from '@/store/sagas/auth/signInWithFacebook';
import { signInWithGoogle } from '@/store/sagas/auth/signInWithGoogle';
import { signOut } from '@/store/sagas/auth/signOut';
import { all, call } from 'redux-saga/effects';

export function* authSaga() {
  yield all([
    call(createUserWithEmail),
    call(signInWithGoogle),
    call(signOut),
    call(signInWithFacebook),
    call(signInWithEmail),
  ]);
}
