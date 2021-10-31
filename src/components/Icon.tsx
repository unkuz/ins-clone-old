import React, { ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
  children: ReactNode;
  href?: string;
  size?: string;
}
export const Icon: React.FC<IProps> = ({ children, href, size }) => {
  if (!href) {
    return (
      <>
        <div className={`${size === 'l' ? 'w-[22px]' : 'w-[21px]'} cursor-pointer`}>{children}</div>
      </>
    );
  }
  return (
    <div className={`${size === 'l' ? 'w-[22px]' : 'w-[21px]'} cursor-pointer select-none`}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
