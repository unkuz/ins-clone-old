import Profile from '@/layout/Profile/Profile';
import { NextPage } from 'next';
import React from 'react';

const ProfilePage: NextPage = () => {
  return (
    <div>
      <Profile header layout footer />
    </div>
  );
};

export default React.memo(ProfilePage);
