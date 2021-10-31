import React from 'react';
import { NextPage } from 'next';
import Close from '@/assets/svg/close.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectedField, AppSelected } from '@/store/slice/appSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Select: NextPage = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      {selected === AppSelected.NEW_POST && (
        <div
          onClick={() => {
            dispatch(selectedField(AppSelected.HOME));
            router.push('/');
          }}
          className="absolute inset-0 w-screen h-screen bg-black/70 z-20 flex justify-center items-center"
        >
          <div className="absolute right-4 top-4">
            <Close className="cursor-pointer" />
          </div>
          <div className="w-[400px] h-[500px] border-[1px] border-ins-border flex flex-col bg-white">
            <p className="w-full h-[50px] flex justify-center items-center border-b-[1px] border-ins-border">
              Create new post
            </p>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div></div>
              <div>Drag photos and videos here</div>
              <div className="border-ins-border border-[1px] rounded-md px-10 py-1 bg-blue-500 text-white mt-5 cursor-pointer">
                <input type="file" id="input" className="hidden" />
                <label htmlFor="input" id="label">
                  Choose File
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Select;
