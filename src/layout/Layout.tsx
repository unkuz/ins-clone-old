import React from 'react';
import { HeadMeta } from '@/layout/HeadMeta';
import { Header } from '@/layout/Header/Header';
import { TaskBar } from '@/layout/TaskBar/TaskBar';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-xs w-full relative">
      <HeadMeta />
      <Header />
      <div className="w-[600px] h-[20px]"></div>
      <div className="w-9/12 mx-auto">{children}</div>
      <TaskBar />
      <div className="w-full h-[100px]"></div>
    </div>
  );
};
