import React, { PropsWithChildren } from 'react';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import CheckIcon from '@/components/icons/checkIcon';

interface Props {
    title: string;
    features: string[];
}

const FeatureCard: React.FC<Props> = ({ title, features }) => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobileScreen();
  return (
    <div
      className="w-full h-full sm:w-[500px] py-10 px-10 flex flex-col rounded-xl bg-white hover:box hover:transition-all hover:scale-[1] duration-500 ease-out"
      style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }}
    >
      <div className="text-3xl mb-10">{title}</div>
      <div className="grow mb-10">
        {features.map((item) => (
          <div key={item} className="flex items-center mb-4 last:mb-0">
            <Image className="mr-2" src="/images/check.png" alt="Check" width={25} height={25} />
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 text-main font-bold m-auto border-main rounded-[30px] border-[1px] cursor-pointer w-fit">
        Подробнее
      </div>
    </div>
  );
};

export default FeatureCard;
