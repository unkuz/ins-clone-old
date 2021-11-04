export interface EmailPassword {
  email: string;
  password: string;
}
export interface EditProfile {
  name: string;
  username: string;
  email: string;
  bio: string;
  userUid: string;
}
export interface ISignUpWithEmail {
  username: string;
  email: string;
  password: string;
}
export interface ISignInWithEmail {
  email: string;
  password: string;
}

type gender = 'male' | 'female' | 'none';
export interface User {
  name: string;
  username: string;
  photoURL: string;
  email: string;
  following: string[];
  followers: string[];
  bio: string;
  gender: gender;
  posts: string[];
  saved: string[];
  emailVerified: boolean;
  timeStamp: any;
  userUid: string;
}
