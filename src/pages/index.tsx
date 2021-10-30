import { CardFeed } from '@/components/CardFeed/CardFeed';
import { Feed } from '@/components/Feed/Feed';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Feed />

        <CardFeed />
      </div>
      <div className=" hidden xl:block  sm:fixed top-24 right-52 border-[1px] border-ins-border">
        <div className="w-[300px] h-[500px] flex flex-col relative">
          <div className="w-11/12 mx-auto">
            <div className="w-full h-[70px] flex justify-between items-center border-b-[1px] border-ins-border">
              <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                <Image layout="fill" alt="" src="https://picsum.photos/seed/picsum/200/300" />
              </div>
              <div>Cuxknothz</div>
              <div>Switch</div>
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
                <div className="text-blue-500 font-bold">Follow</div>
              </div>
            </div>
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
                <div className="text-blue-500 font-bold">Follow</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[30px] absolute bottom-0 border-t-[1px] border-ins-border flex justify-center items-center">
            <p className="mx-auto">© 2021 Cuzknothz</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
