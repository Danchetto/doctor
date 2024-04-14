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
      link: '/',
    },
    {
      title: 'Для врачей',
      link: '/doctors',
    },
    {
      title: 'Для пациентов',
      link: '/patients',
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
    <header className="fixed sm:pr-20 z-10 top-0 left-0 w-screen h-16 flex items-center justify-center sm:justify-between bg-white" style={{ boxShadow: '0 8px 32px #1b498714' }}>
      <Image className="mt-4" src="/images/logo.png" alt="logo" height={150} width={350} />
      <div className="hidden sm:flex">
        {menuItems.map((item) => (
          <div
            key={item.title}
            className="p-4 m-1 cursor-pointer rounded hover:bg-blue-50 transition-all duration-300 ease-out"
            onClick={() => { router.push(item.link); }}
          >
            {item.title}
          </div>
        ))}
      </div>

    </header>
  );
};

export default Header;
