import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Emoji from '@/assets/svg/emoji.svg';
import AddPhotos from '@/assets/svg/add_photos.svg';
import Like from '@/assets/svg/like.svg';
import { withLayout } from '@/hoc/layout/withLayout';

const InBox: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <div className="h-screen">
        <div className="w-11/12 h-5/6 border-[1px] border-ins-border flex ">
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
          <div className="w-4/6 h-full relative ">
            <div className="w-full h-[55px] flex justify-center items-center border-[1px]">iklfhjklsahjkf</div>
            <div className="h-full w-full">
              <div className=" absolute bottom-[10px] mx-auto w-full">
                <div className="w-11/12 mx-auto h-[50px] rounded-full border-[1px] border-ins-border ">
                  <div className="w-11/12 h-full mx-auto flex items-center justify-between ">
                    <div className="flex w-[450px] space-x-3 cursor-pointer">
                      <Emoji />
                      <input type="text" className="focus:outline-none w-[340px]" placeholder="Messenge..." />
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-[20px] h-[20px] cursor-pointer">
                        <AddPhotos />
                      </div>
                      <div className="w-[20px] h-[20px] cursor-pointer">
                        <Like />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withLayout(InBox);
