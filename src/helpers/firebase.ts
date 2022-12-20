import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBnTmhe4kjG5ixLB0v0YiNI7wHiuACOD4s',
  authDomain: 'instagram-cuzknothz.firebaseapp.com',
  databaseURL: 'https://instagram-cuzknothz-default-rtdb.firebaseio.com',
  projectId: 'instagram-cuzknothz',
  storageBucket: 'instagram-cuzknothz.appspot.com',
  messagingSenderId: '294855522800',
  appId: '1:294855522800:web:e79d171d3aa768f0ab0535',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

export { app, db, auth, storage, FacebookProvider, GoogleProvider };
