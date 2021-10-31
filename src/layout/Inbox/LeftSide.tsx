import React from 'react';
import Image from 'next/image';

export const LeftSide = () => {
  return (
    <div>
      <div className="w-5/12 h-full border-r-[1px] border-ins-border">
        <div className="w-full h-[55px] flex justify-center items-center border-b-[1px] border-ins-border ">
          Cuzknothz
        </div>
        <div className="w-full h-full">
          <div className="border-[1px] cursor-pointer">
            <div className="w-11/12 mx-auto flex items-center space-x-3 py-2 ">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image alt="" layout="fill" src="https://picsum.photos/seed/picsum/200/300" />
              </div>
              <div className="flex flex-col">
                <p>Cuzknoth</p>
                <p>Active 1 decade ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
