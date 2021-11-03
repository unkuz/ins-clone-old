import React from 'react';
import Image from 'next/image';

export const RandomImage: React.FC = () => {
  return (
    <Image
      src={`https://avatars.dicebear.com/api/human/chris.svg`}
      alt=""
      layout="fill"
      className="object-cover"
    />
  );
};
