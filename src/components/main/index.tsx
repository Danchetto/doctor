'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useRouter } from 'next/navigation';
import About from '@/components/main/about';
import Education from '@/components/main/education';
import React from 'react';
import FeatureCard from '@/components/main/featureCard';

// @ts-ignore
const Main: React.FC = () => {
  const { t } = useTranslation();
  const doctorFeatures = ['Как стать врачом в Испании?', 'Запись на консультацию', 'Помощь в омологации диплома'];
  const patientsFeatures = ['Запись на консультацию', 'Продлить  рецепт'];

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-16">
      <About />

      <div className="h-[1px] bg-gray-300 w-[60%] mt-10 lg:mt-20" />

      <div
        className="relative w-full mt-[50px] lg:mt-[100px] flex flex-col lg:flex-row justify-center gap-10 sm:gap-32"
      >
        <div className="h-auto">
          <FeatureCard title="Для пациентов" features={patientsFeatures} src="/patients" />
        </div>

        <div>
          <FeatureCard title="Для врачей" features={doctorFeatures} src="/doctors" />
        </div>
      </div>

      <div className="h-[50px] sm:h-[150px]" />

      <Education />
    </div>
  );
};

export default Main;
