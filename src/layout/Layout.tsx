import React from 'react';
import { HeadMeta } from '@/layout/HeadMeta';
import { Header } from '@/layout/Header/Header';
import { TaskBar } from '@/layout/TaskBar/TaskBar';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-xs w-full">
      <HeadMeta />
      <Header />
      <div className="w-9/12 mx-auto">{children}</div>
      <TaskBar />
    </div>
  );
};
