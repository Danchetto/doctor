import React, { PropsWithChildren } from 'react';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import TelegramButton from '@/components/ui/telegramButton';
import WhatsappButton from '@/components/ui/whatsappButton';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobileScreen();

  return (
    <div className="w-full max-w-full lg:max-w-[900px]">
      <div className="flex flex-row gap-2 lg:gap-32 items-center justify-between -mr-10 sm:-mr-10 overflow-hidden">
        <div className="w-1/2">
          <h1 className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-16">{t('name')}</h1>
          <div className="mb-1 lg:text-xl text-xs">{t('main_number')}</div>
          <div className="lg:text-xl text-xs lg:max-w-[400px] pr-2">{t('main_description')}</div>

          <div className="flex gap-2 mt-2">
            <a href="https://t.me/drspain" target="_blank" rel="noreferrer">
              <Image src="/images/telegram.png" alt="telegram" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/dr.petr.tuchin" target="_blank" rel="noreferrer">
              <Image src="/images/instagram.png" alt="instagram" width={20} height={20} />
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex mt-12 gap-4">
              <TelegramButton applyText />
              {/* <WhatsappButton applyText /> */}
            </div>
          </div>
        </div>

        <div className="relative w-1/2">
          <div className="absolute inset-0 w-full h-full" />
          <Image
            className="object-contain w-full sm:w-[300px] float-right"
            src="/images/petr.jpg"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vh"
          />
        </div>

      </div>

      <div
        className="lg:hidden w-full p-6 bg-white max-w-[375px] rounded-2xl border-gray-300 shadow-neon mt-10 lg:mt-16"
      >
        <div className="text-center font-medium">Онлайн запись</div>
        <div className="flex flex-wrap justify-center items-center mt-4 gap-2 lg:gap-4">
          <TelegramButton />
          {/* <WhatsappButton /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
