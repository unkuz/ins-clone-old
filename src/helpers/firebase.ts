import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'instagram-cuzknothz.firebaseapp.com',
  projectId: 'instagram-cuzknothz',
  storageBucket: 'instagram-cuzknothz.appspot.com',
  messagingSenderId: '294855522800',
  appId: '1:294855522800:web:e79d171d3aa768f0ab0535',
};

const app = initializeApp(firebaseConfig);
