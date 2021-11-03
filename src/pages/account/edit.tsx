import { NextPage } from 'next';
import React from 'react';
import EditProfile from '@/layout/EditProfile/EditProfile';

const EditPage: NextPage = () => {
  return (
    <div>
      <EditProfile />
    </div>
  );
};

export default React.memo(EditPage);
