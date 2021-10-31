import React from 'react';
import { HeadMeta } from '@/layout/HeadMeta';
import { Header } from '@/layout/Header/Header';
import { TaskBar } from '@/layout/TaskBar/TaskBar';
import { SearchPopUp } from '@/components/SearchPopUp/SearchPopUp';
import { useAppSelector } from '@/store/hooks';

export const Layout: React.FC = ({ children }) => {
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  return (
    <div className="text-xs w-full relative">
      <HeadMeta />
      {isSearchPopUpShow && <SearchPopUp />}
      <Header />
      <div className="w-full sm:w-[950px] mx-auto">{children}</div>
      <TaskBar />
      <div className="w-full h-[100px]"></div>

      {/* PopUp */}
    </div>
  );
};
