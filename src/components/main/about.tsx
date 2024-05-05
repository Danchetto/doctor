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
    <div className="w-full lg:max-w-[900px]">
      <div className="flex flex-row gap-2 lg:gap-32 items-center justify-between w-full">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8">{t('name')}</h1>
          <div className="mb-1 lg:text-xl">{t('main_number')}</div>
          <div className="lg:text-xl lg:max-w-[400px]">{t('main_description')}</div>
        </div>
        <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] relative min-w-[100px]">
          <Image
            className="relative drop-shadow-[0_0_0rem_#00000070] rounded-full scale-125"
            src="/images/petr2.png"
            alt="Logo"
            fill
            priority
          />
        </div>
      </div>

      <div className="flex gap-2 mt-2 lg:mt-0">
        <a href="https://t.me/drspain" target="_blank" rel="noreferrer">
          <Image src="/images/telegram.png" alt="telegram" width={20} height={20} />
        </a>
        <a href="https://www.instagram.com/dr.petr.tuchin" target="_blank" rel="noreferrer">
          <Image src="/images/instagram.png" alt="instagram" width={20} height={20} />
        </a>
      </div>

      <div className="flex flex-wrap mt-6 gap-4">
        <TelegramButton />
        {/* <WhatsappButton/> */}
      </div>

      {/* <div className="w-full p-3 border-[1px] border-gray-300 mt-4"> */}
      {/*  <div className="text-center font-medium">ЗАПИСЬ</div> */}
      {/*  <div className="flex flex-wrap mt-2 gap-4"> */}
      {/*    <TelegramButton /> */}
      {/*    <WhatsappButton /> */}
      {/*  </div> */}
      {/* </div> */}

    </div>
  );
};

export default About;
