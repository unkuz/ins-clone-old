import { auth, db, GoogleProvider } from '@/helpers/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React from 'react';

const FireBasePage = () => {
  const signIn = async () => {
    const rs = await signInWithPopup(auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(rs);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = rs.user;
    console.log(user);
  };
  const getData = async () => {
    const docRef = doc(db, 'cities', 'la');
    await setDoc(docRef, {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    });
    const snap = await getDoc(docRef);
    console.log(snap.exists);
  };

  const addComment = async () => {
    const idPost = 'PGnZh7gfw6U8n5z61fKv';
    const cR = doc(db, 'comments', idPost);

    await updateDoc(cR, {
      comment: [
        {
          user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
          content: 'hahahah',
          likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
          dislikes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
          reply: [
            {
              user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
              content: 'you r crazy guy',
              likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
            },
            {
              user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
              content: 'hahahahahahha',
              likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
            },
          ],
        },
        {
          user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
          content: 'hahahah',
          likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
          dislikes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
          reply: [
            {
              user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
              content: 'you r crazy guy',
              likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
            },
            {
              user: 'g1M7gZmJ99TGogDENuhK37FuBiL2',
              content: 'hahahahahahha',
              likes: ['g1M7gZmJ99TGogDENuhK37FuBiL2'],
            },
          ],
        },
      ],
    });
  };

  return (
    <>
      <div onClick={signIn}>click</div>
      <div onClick={getData}>get data</div>
      <div onClick={addComment}>Add comment conntent</div>
    </>
  );
};

export default FireBasePage;
