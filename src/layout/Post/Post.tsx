/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { NextPage } from 'next';
import Close from '@/assets/svg/close.svg';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectedField, AppSelected } from '@/store/reducers/appSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withLayout } from '@/hoc/layout/withLayout';

const Post: NextPage = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.app.selected);
  const router = useRouter();
  const inputUpload = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>();
  const [caption, setCaption] = useState('');
  const handleUpload = () => {
    if (inputUpload.current) {
      inputUpload.current.click();
    }
  };
  const addImageToPost = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const reader = new FileReader();
    if (fileList) {
      reader.readAsDataURL(fileList[0]);
    }
    reader.onload = (readerEvent) => {
      const dataUri = readerEvent.target?.result;
      if (dataUri) {
        setSelectedFile(dataUri);
      }
    };
  };
  const handlePostToFireBase = () => {
    console.log(caption);
  };
  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      {selected === AppSelected.NEW_POST && (
        <div className="absolute inset-0 w-screen h-screen bg-black/70 z-30 flex justify-center items-center">
          <div
            onClick={() => {
              dispatch(selectedField(AppSelected.HOME));
              router.push('/');
            }}
            className="absolute right-4 top-4"
          >
            <Close className="cursor-pointer" />
          </div>
          <div className="z-50 w-full md:w-[400px] md:h-[550px] border-[1px] border-ins-border flex flex-col bg-white">
            <p className="w-full h-[50px] flex justify-center items-center border-b-[1px] border-ins-border">
              Create new post
            </p>
            <div className="h-[30px]"></div>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div>
                {selectedFile && (
                  <img
                    // src={selectedFile}
                    alt=""
                    className={`object-cover w-[300px] h-[300px]`}
                    onClick={() => setSelectedFile((prev) => null)}
                  />
                )}
              </div>
              <div>
                {selectedFile && (
                  <>
                    <div className="mt-3 mb-3 text-blue-400 w-full flex justify-center items-center">
                      <p className="">Write a caption...</p>
                    </div>
                    <textarea
                      value={caption}
                      onChange={(e) => {
                        setCaption((prev) => e.target.value);
                      }}
                      className="resize-none w-[300px] h-[50px] border-ins-border border-[1px] focus:outline-none scrollbar-thin scrollbar-thumb-black"
                    ></textarea>
                  </>
                )}
              </div>
              <div>
                <input
                  type="file"
                  id="input"
                  className="z-50 hidden"
                  ref={inputUpload}
                  onChange={addImageToPost}
                />
                {!selectedFile && (
                  <div
                    onClick={handleUpload}
                    className="border-ins-border border-[1px] rounded-md px-10 py-1 bg-blue-500 text-white mt-5 cursor-pointer"
                  >
                    Selected Image
                  </div>
                )}
                {selectedFile && (
                  <div
                    onClick={handlePostToFireBase}
                    className="border-ins-border mb-5 border-[1px] rounded-md px-32 md:px-10 py-2 md:py-1 bg-blue-500 text-white mt-5 cursor-pointer"
                  >
                    Post
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default withLayout(Post);
