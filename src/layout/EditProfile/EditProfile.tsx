import React from 'react';

const EditProfile = () => {
  return (
    <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-30 ">
      <div className="w-screen md:w-[400px] mx-auto border-[1px] border-ins-border bg-white  rounded-lg overflow-hidden shadow-lg">
        {/* top */}
        <div className="w-full h-[50px] flex justify-around items-center border-b-[1px] border-ins-border">
          <p className="">Edit Profile</p>
        </div>
        {/* edit info */}
        <div className="h-[350px]  ">
          <div className="w-5/6 h-full mx-auto flex flex-col justify-between">
            {/* name */}
            <div className="w-full h-[50px] flex items-center justify-between">
              <p>Name :</p>
              <input className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm" />
            </div>
            <div className="w-full h-[50px] flex items-center justify-between">
              <p>Username :</p>
              <input className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm" />
            </div>
            <div className="w-full h-[50px] flex items-center justify-between">
              <p>Email :</p>
              <input className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm" />
            </div>
            <div className="w-full h-[50px] flex items-center justify-between">
              <p>Bio :</p>
              <textarea className="w-[195px] py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm" />
            </div>
            <div className="w-full h-[50px] flex items-center justify-between">
              <p>Gender :</p>
              <input className="py-2 px-6 focus:outline-none border-[1px] focus:border-indigo-400 rounded-md shadow-sm" />
            </div>
          </div>
        </div>
        <div className="w-full h-[50px] border-t-[1px] border-ins-border cursor-pointer bg-white hover:bg-blue-300 flex justify-center items-center">
          Submit
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
