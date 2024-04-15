import React from 'react';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import ArrowIcon from '@/components/icons/arrowIcon';
import { useRouter } from 'next/navigation';

interface Props {
    title: string;
    features: string[];
    src?: string;
}

const FeatureCard: React.FC<Props> = ({ title, features, src }) => {
  const router = useRouter();
  return (
    <div
      className="w-full h-full lg:max-w-[500px] lg:min-w-[400px] p-6 lg:p-10 flex flex-col rounded-3xl bg-white cursor-pointer transition-all hover:scale-[1.01] duration-700 ease-in-out"
      style={{ boxShadow: '0 10.512px 42.048px #1b49871f' }}
      onClick={src ? () => { router.push(src); } : undefined}
    >
      <div className="text-xl lg:text-3xl mb-6 font-bold">{title}</div>
      <div className="grow mb-6">
        {features.map((item) => (
          <div key={item} className="flex items-center mb-4 last:mb-0">
            <Image className="mr-2" src="/images/check.png" alt="Check" width={25} height={25} />
            <div>{item}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 flex items-center text-main font-medium m-auto cursor-pointer w-fit">
        Подробнее
        <ArrowIcon />
      </div>
    </div>
  );
};

export default FeatureCard;
