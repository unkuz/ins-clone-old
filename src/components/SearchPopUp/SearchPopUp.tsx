import React from 'react';
import { toogleSearch } from '@/store/slice/appSlice';
import { useAppDispatch } from '@/store/hooks';

export const SearchPopUp = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="absolute bg-white z-40 top-[55px] right-1/2 transform translate-x-1/2 w-[400px] h-[300px] border border-ins-border">
        <p className="ml-4 mt-4">Recent</p>
      </div>
      {/* exit */}
      <div className="absolute inset-0 z-50" onClick={() => dispatch(toogleSearch())}></div>
    </>
  );
};
