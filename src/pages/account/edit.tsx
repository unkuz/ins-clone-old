import EditProfile from '@/layout/EditProfile/EditProfile';
import { NextPage } from 'next';
import React from 'react';

const EditPage: NextPage = () => {
  return (
    <div>
      <EditProfile />
    </div>
  );
};

export default React.memo(EditPage);
