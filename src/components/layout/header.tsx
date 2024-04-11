'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/hooks/useLocale';

const Header: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const menuItems = [
    {
      title: 'Обо мне',
      link: '/about',
    },
    {
      title: 'Для врачей',
      link: '/about',
    },
    {
      title: 'Для пациентов',
      link: '/about',
    },
  ];

  const handleChangeLang = () => {
    if (locale === 'ru') {
      router.push('/es/');
    } else {
      router.push('/ru/');
    }
  };

  return (
    <header className="fixed z-10 top-0 left-0 w-screen h-16 flex items-center bg-white" style={{ boxShadow: '0 -6px 10px 5px rgba(0,0,0,0.5)' }}>
      <Image className="ml-6" src="/images/logo.png" alt="logo" width={80} height={50} />
      {menuItems.map((item) => (
        <div key={item.title} className="p-4 m-1 cursor-pointer rounded hover:bg-blue-50 transition-all duration-300 ease-out">{item.title}</div>
      ))}
    </header>
  );
};

export default Header;
