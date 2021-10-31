import React from 'react';
import { Story } from '@/components/Stories/Story';

export const StoriesWrapper = () => {
  return (
    <div className="w-screen sm:w-[615px] border-[1px] h-[100px] border-ins-border flex items-center space-x-3 pl-3 bg-black/20">
      <Story />
    </div>
  );
};
