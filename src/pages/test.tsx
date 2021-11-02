import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import { app, db, auth, getUser, GGprovider, FBprovider } from '@/helpers/firebase';
import { getAuth, sendEmailVerification, signOut } from 'firebase/auth';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from '@firebase/auth';

const Test: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getCurrentUser = () => {
    console.log(auth.currentUser);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createUser = async () => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
    };
    createUser();
  };

  useEffect(() => {
    // (async function () {
    //   const user = await getUser();
    //   console.log(user);
    //   console.log('sdjfhjksdf');
    // })();
  }, []);

  const FBnonasync = async () => {
    signOut(auth);
    const result = await signInWithPopup(auth, FBprovider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName);
  };

  const nonasync = () => {
    signOut(auth);
    const signInwithGoogle = async () => {
      const result = await signInWithPopup(auth, GGprovider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
    };
    signInwithGoogle();
  };

  return (
    <div>
      <p
        onClick={() => {
          nonasync();
        }}
      >
        Sign In with GG
      </p>
      <p
        onClick={() => {
          FBnonasync();
        }}
      >
        Sign In with FB
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Pass" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Create" />
        </form>
      </div>
      <p onClick={getCurrentUser}>Get current User</p>
    </div>
  );
};

export default Test;
