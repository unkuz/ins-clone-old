import { serverTimestamp } from 'firebase/firestore';
import { User } from '../types/auth';

export const generateNewUser = (user: any): User => {
  return {
    name: user?.displayName,
    username: user?.email,
    photoURL: user?.photoURL,
    email: user?.email,
    following: ['EPqa5M5PEpZJuJ4IIX7bMRqKy783'],
    followers: [],
    bio: '',
    gender: 'none',
    posts: [],
    saved: [],
    emailVerified: user?.emailVerified ? true : false,
    timeStamp: serverTimestamp(),
    userUid: user.uid,
  };
};
