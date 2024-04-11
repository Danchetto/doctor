import React, { PropsWithChildren } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const Layout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-16 mb-20 grow">
        {children}
      </div>
      <Footer />
    </div>

  );
};

export default Layout;
