import React from 'react';
import { Header } from '@/layout/Header/Header';

export const withHeader = (WrappedComponent: any) => {
  const WithHeader = () => {
    return (
      <>
        <Header />
        <WrappedComponent />
      </>
    );
  };
  return WithHeader;
};
