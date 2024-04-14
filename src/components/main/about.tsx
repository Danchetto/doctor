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
    <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-32 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-8">{t('name')}</h1>
        <div className="mb-2 text-xl underline underline-offset-4">{t('main_number')}</div>
        <div className="text-xl sm:max-w-[400px]">{t('main_description')}</div>
        <div className="flex mt-6 gap-4 h-6">
          <TelegramButton />
          <WhatsappButton />
        </div>
      </div>
      <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] relative">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
          src="/images/petr.jpg"
          alt="Logo"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default About;
