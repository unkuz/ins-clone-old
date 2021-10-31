import { NextPage } from 'next';
import React from 'react';
import InBox from '@/layout/Inbox/InBox';

const InBoxPage: NextPage = () => {
  return (
    <div>
      <InBox header layout />
    </div>
  );
};

export default InBoxPage;
