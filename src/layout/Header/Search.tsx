import React from 'react';

import { toogleSearch } from '@/store/slice/appSlice';
import { useAppDispatch } from '@/store/hooks';
import { SearchPopUp } from '@/components/SearchPopUp/SearchPopUp';
import { useAppSelector } from '@/store/hooks';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  return (
    <>
      <input
        className="focus:outline-none w-full py-1 px-4 focus:border-indigo-500 md:w-[150px] lg:w-[200px] border-[1px] border-[#dbdbdb] bg-white z-50"
        placeholder="Search"
      />
    </>
  );
};
