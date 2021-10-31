import React from 'react';
import { Story } from '@/components/Stories/Story';

export const StoriesWrapper = () => {
  return (
    <div className="w-full sm:w-[615px] border-[1px] border-ins-border h-[100px] flex items-center space-x-3 pl-3">
      <Story />
    </div>
  );
};
