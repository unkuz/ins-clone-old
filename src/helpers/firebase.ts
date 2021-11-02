import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'instagram-cuzknothz.firebaseapp.com',
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

// const getUser = async () => {
//   const querySnapshot = await getDocs(collection(db, 'users'));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
//   return querySnapshot;
// };

export { app, db, auth, storage, FacebookProvider, GoogleProvider };
