import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

const InBox: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="w-11/12 h-5/6 border-[1px] border-ins-border flex ">
        <div className="w-2/6 h-full border-r-[1px] border-ins-border">
          <div className="w-full h-[50px] flex justify-center items-center border-b-[1px] border-ins-border ">From</div>
          <div className="w-full h-full">
            <div className="flex items-center justify-around bg-[#efefef] py-3">
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image alt="" layout="fill" src="http://placekitten.com/200/200" />
              </div>
              <div className="flex flex-col">
                <p>Cuzknoth</p>
                <p>Active 1 decade ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/6 h-full ">
          <div className="w-full h-[65px] flex justify-center items-center ">From</div>
        </div>
      </div>
    </div>
  );
};
export default InBox;
