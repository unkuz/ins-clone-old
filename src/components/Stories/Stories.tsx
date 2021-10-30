import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Stories = () => {
  return (
    <div className="">
      <div className="bg-yellow-500 p-[3px] rounded-full inline-block">
        <a className="bg-white p-[1px] rounded-full z-10 flex">
          <div className="relative w-[55px] h-[55px] rounded-full overflow-hidden">
            <Image layout="fill" className="object-cover" alt="" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
        </a>
      </div>
      <div className="flex justify-center">
        <p className="mx-auto">abcnjdkjf</p>
      </div>
    </div>
  );
};
