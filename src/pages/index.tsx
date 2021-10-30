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
      <div className=" hidden xl:block  sm:fixed top-24 right-12 border-[1px] border-ins-border">
        <div className="w-[300px] h-[500px] flex flex-col">
          <div className="w-full h-[80px] flex justify-evenly items-center bg-indigo-600">
            <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
              <Image layout="fill" alt="" src="https://placekitten.com/200/200" />
            </div>
            <div>Cuxknothz</div>
            <div>Switch</div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="scale-75 flex-1">
                <div className="h-[45px] w-[45px] overflow-hidden rounded-full relative">
                  <Image layout="fill" alt="" src="https://placekitten.com/200/200" />
                </div>
              </div>
              <div className="flex-1 bg-yellow-600">
                <p className="font-bold">jksdgfjksdhjkfhghdsjkaf</p>
                <p>jksdgfjksdhjkfhghdsjkaf</p>
              </div>
              <div className="flex-1">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
