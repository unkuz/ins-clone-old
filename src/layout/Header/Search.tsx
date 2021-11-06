import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useEffect, useState } from 'react';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearchPopUpShow = useAppSelector((state) => state.app.isShowSearchPopUp);
  const [search, setSearch] = useState('');
  const [turnSearch, setTurnSearch] = useState(false);
  useEffect(() => {
    if (search != '') {
      setTurnSearch(true);
    } else {
      setTurnSearch(false);
    }
  }, [search]);
  return (
    <>
      <div className="relative group">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="focus:outline-none w-full py-[7px] shadow-sm px-7 focus:border-indigo-500 md:w-[150px] lg:w-[300px] border-[1px] border-[#dbdbdb] bg-white z-50 rounded-md"
        />
        <p
          className={` ${
            turnSearch ? 'hidden text-gray-300' : 'text-gray-300'
          } absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2`}
        >
          Search
        </p>
      </div>
    </>
  );
};
