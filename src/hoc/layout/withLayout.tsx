import React from 'react';
import { Header } from '@/layout/Header/Header';

export const withLayout = (WrappedComponent: any) => {
  const WithLayout = ({ header, footer, layout }: any) => {
    return (
      <>
        {header && <Header />}
        {header && <div className="sm:h-[80px]"></div>}
        {layout ? (
          <div className="w-full md:w-[600px] lg:w-[950px] mx-auto">
            <WrappedComponent />
          </div>
        ) : (
          <WrappedComponent />
        )}

        {footer && <div className="w-full h-[100px]"></div>}
      </>
    );
  };
  return WithLayout;
};
