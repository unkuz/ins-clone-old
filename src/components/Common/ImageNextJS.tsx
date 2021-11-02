// Cuzknothz
import Image from 'next/image';
import React from 'react';

interface IProps {
  src: string;
  width: number | 'full';
  height: number;
  alt?: string;
  circle?: boolean;
  pointer?: boolean;
  quality?: boolean;
}

export const ImageNextJS: React.FC<IProps> = ({ src, width, height, alt, circle, pointer, quality }) => {
  return (
    <div
      style={{ width: `${width === 'full' ? '100%' : width + 'px'}`, height: height + 'px' }}
      className={`${circle ? 'rounded-full overflow-hidden' : ''} ${pointer ? 'cursor-pointer' : ''} relative`}
    >
      {quality && <Image quality={100} src={src} layout="fill" className="object-cover" alt={alt} />}
      <Image src={src} layout="fill" className="object-cover" alt={alt} />
    </div>
  );
};
