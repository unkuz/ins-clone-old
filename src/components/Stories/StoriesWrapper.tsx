import React from 'react';
import { Story } from '@/components/Stories/Story';

export const StoriesWrapper = () => {
  return (
    <div className="w-screen border-t-0 sm:border-t-[1px] sm:w-[600px] border-[1px] h-[100px] border-ins-border flex items-center space-x-3 pl-3 overflow-scroll scrollbar-hide">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};
