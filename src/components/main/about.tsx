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
    <div>
      <div className="flex flex-row gap-2 lg:gap-32 lg:items-center">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-8">{t('name')}</h1>
          <div className="mb-2 lg:text-xl underline underline-offset-4">{t('main_number')}</div>
          <div className="lg:text-xl sm:max-w-[400px]">{t('main_description')}</div>
        </div>
        <div className="w-[100px] h-[100px] sm:w-[300px] sm:h-[300px] mt-4 sm:mt-0 relative min-w-[100px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
            src="/images/petr.jpg"
            alt="Logo"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex flex-wrap mt-6 gap-4">
        <TelegramButton />
        <WhatsappButton />
      </div>
    </div>
  );
};

export default About;
