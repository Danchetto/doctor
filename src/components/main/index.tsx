'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import Education from '@/components/main/education';
import React from 'react';
import FeatureCard from '@/components/main/featureCard';
import YouTube from 'react-youtube';

// @ts-ignore
const Main: React.FC = () => {
  const doctorFeatures = ['Как стать врачом в Испании', 'Запись на консультацию'];
  const patientsFeatures = ['В каких случаях необходима онлайн консультация?', 'Что входит в онлайн консультацию?'];

  const videoOpts = {
    // height: '390',
    // width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-16">
      <About />

      <div className="h-[1px] bg-gray-300 w-[100%] mt-10 lg:mt-20" />

      <div className="xl:w-[60%] mt-10 lg:mt-20 lg:text-xl text-justify">
        Я - врач общей практики и занимаюсь диагностикой и лечением заболеваний дыхательных путей, сердца, желудочно-кишечного тракта и других органов и систем.

        Оказываю первичную профессиональную помощь и даю рекомендации по лечению, направляю к узким специалистам при необходимости и
        {' '}
        <span className="font-bold">курирую ваше лечение на русском языке!</span>
      </div>

      <div
        className="relative w-full mt-[80px] lg:mt-[100px] flex flex-col lg:flex-row justify-center gap-10 sm:gap-32"
      >
        <div className="h-auto lg:w-1/3">
          <FeatureCard title="Для пациентов" features={patientsFeatures} src="/patients" />
        </div>

        <div className="lg:w-1/3">
          <FeatureCard title="Для врачей" features={doctorFeatures} src="/doctors" />
        </div>
      </div>

      <div className="h-[50px] sm:h-[150px]" />

      <Education />

      <div className="mt-10">
        <YouTube className="mb-10" iframeClassName="w-[320px] h-[195px] sm:w-[448px] sm:h-[273px] lg:w-[640px] lg:h-[390px]" videoId="N_WZ5sVYpjk" opts={videoOpts} />
        <YouTube className="mb-10" iframeClassName="w-[320px] h-[195px] sm:w-[448px] sm:h-[273px] lg:w-[640px] lg:h-[390px]" videoId="Pk5oMdivvNM" opts={videoOpts} />
        <YouTube iframeClassName="w-[320px] h-[195px] sm:w-[448px] sm:h-[273px] lg:w-[640px] lg:h-[390px]" videoId="sweiEGVd3gU" opts={videoOpts} />
      </div>
    </div>
  );
};

export default Main;
