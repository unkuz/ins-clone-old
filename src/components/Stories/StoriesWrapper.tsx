import React from 'react';
import { Stories } from '@/components/Stories/Stories';

export const StoriesWrapper = () => {
  return (
    <div className="w-[600px] border-[1px] border-ins-border h-[100px] flex items-center space-x-3 pl-3">
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
      <Stories />
    </div>
  );
};
