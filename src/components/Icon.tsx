import Link from 'next/link';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  href?: string;
  size?: number;
}
export const Icon: React.FC<IProps> = ({ children, href, size }) => {
  if (!href) {
    return (
      <div style={{ width: size + 'px', height: size + 'px' }} className="cursor-pointer">
        {children}
      </div>
    );
  }
  return (
    <div style={{ width: size + 'px', height: size + 'px' }} className="cursor-pointer">
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    </div>
  );
};
