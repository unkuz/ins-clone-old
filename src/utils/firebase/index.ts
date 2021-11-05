import { serverTimestamp } from 'firebase/firestore';
import { User } from '../types/auth';

export const generateNewUser = (user: any): User => {
  const defaultUserImage =
    'https://firebasestorage.googleapis.com/v0/b/instagram-cuzknothz.appspot.com/o/default.jpg?alt=media&token=c6dfb887-b739-4260-827e-608d1f405eed';
  return {
    name: user?.displayName,
    username: user?.displayName || (Math.random() + 1).toString(36).substring(7),
    photoURL: user?.photoURL || defaultUserImage,
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
export const generateNewPost = (post: any) => {
  return {
    caption: post.caption,
    likes: [],
    dislikes: [],
    timeStamp: serverTimestamp(),
    imageURL: '',
    id: '',
    user: post.userUid,
    comment: [],
  };
};
