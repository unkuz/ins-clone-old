import React from 'react';
import Image from 'next/image';

export const SideBar: React.FC = () => {
  return (
    <div className="hidden xl:block absolute top-[80px] right-[170px] border-[1px] border-ins-border">
      <div className="w-[315px] h-[500px] flex flex-col relative">
        <div className="w-11/12 mx-auto">
          <div className="w-full h-[70px] flex justify-between items-center border-b-[1px] border-ins-border">
            <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
              <Image layout="fill" alt="" src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div>Cuxknothz</div>
            <div className="text-blue-500 font-bold">Switch</div>
          </div>
        </div>
        <div>
          <div className="w-11/12 mx-auto py-1">
            <div className="flex justify-between items-center">
              <div className="scale-75">
                <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                  <Image layout="fill" alt="" src="https://picsum.photos/seed/picsum/200/300" />
                </div>
              </div>
              <div className="bg-yellow-600">
                <p className="font-bold">jksdgfjksdhjkfhghdsjkaf</p>
                <p>Suggest for you</p>
              </div>
              <div className="text-blue-500 font-bold cursor-pointer">Follow</div>
            </div>
          </div>
        </div>
        <div className="w-full h-[30px] absolute bottom-0 border-t-[1px] border-ins-border flex justify-center items-center">
          <p className="mx-auto">© 2021 Cuzknothz</p>
        </div>
      </div>
    </div>
  );
};
