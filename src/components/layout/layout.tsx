import React, { PropsWithChildren } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const Layout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-16 mb-20 grow relative">
        <div className="absolute -z-10 w-full h-full top-0 left-0 bg-gradientn" />
        {children}
      </div>
      <Footer />
    </div>

  );
};

export default Layout;
