import Link from 'next/link';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  href?: string;
  size?: number;
}
export const Icon: React.FC<IProps> = ({ children, size }) => {
  return (
    <div style={{ width: size + 'px', height: size + 'px' }} className="cursor-pointer">
      {children}
    </div>
  );
};
