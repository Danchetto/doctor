'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React from 'react';
import Script from 'next/script';

const Doctors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-0 sm:pt-16 overflow-hidden">
      <About />

      <div className="h-[1px] bg-gray-300 w-[60%] mt-10 lg:mt-16" />

      <div className="w-full lg:w-3/4 mt-10 lg:mt-16">
        <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
          Запись на онлайн консультацию по омологации диплома
        </div>
        <div>
          <div>На личной консультации мы разберём все вопросы, которые Вас интересуют:</div>
          <ul className="list-disc mb-2">
            <li className="ml-6">экзамен MIR;</li>
            <li className="ml-6">омологация диплома;</li>
            <li className="ml-6">академии для подготовки;</li>
            <li className="ml-6">различные курсы, которые предлагают академии;</li>
            <li className="ml-6">программы Máster;</li>
            <li className="ml-6">варианты работы без резидентуры;</li>
            <li className="ml-6">личный план действий и многое другое.</li>
          </ul>
          <div className="mb-3">
            Продолжительность -
            {' '}
            <b className="font-bold">60-90 минут</b>
          </div>
          <div>
            Стоимость -
            {' '}
            <span className="font-bold">€60</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/4 mt-10 lg:mt-20">
        <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
          Как стать врачом в Испании
        </div>
        <div>
          <ol className="ml-4">
            <li className="list-decimal font-medium">
              Омологировать (подтвердить) диплом о высшем
              медицинском образовании
            </li>
            <div>
              Процесс подтверждения диплома занимает около 2-3-х лет. Для начала процесса необходимо собрать
              документы, сдать экзамен DELE B2 и подать заявление в Министерство Университетов.
            </div>
            <li className="list-decimal font-medium mt-1">
              Закончить резидентуру MIR
            </li>
            <div>
              Для того, чтобы получить специализацию, необходимо сдать экзамен MIR и закончить резидентуру (4-5 лет в
              зависимости от специальности)
            </div>
            <li className="list-decimal font-medium mt-1">
              Без прохождения резидентуры работать как Médico
              General
            </li>
            <div>
              Все подробности разбираем на консультации.
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
