import Profile from '@/layout/Profile/Profile';
import { useAppSelector } from '@/store';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProfilePage: NextPage = () => {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.auth.status);
  useEffect(() => {
    if (isAuth === 'unauthenticated') {
      router.push('/');
    }
  }, [isAuth, router]);
  return (
    <div>
      <Profile header layout footer />
    </div>
  );
};

export default React.memo(ProfilePage);
