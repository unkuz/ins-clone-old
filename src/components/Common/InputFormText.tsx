import React from 'react';

export const InputFormText = (props: any) => {
  return (
    <input
      {...props}
      className="border-[1px] border-ins-border focus:outline-none w-[230px] py-2 px-3 focus:border-indigo-600"
    />
  );
};
