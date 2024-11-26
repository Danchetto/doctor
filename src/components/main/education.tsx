import React, { PropsWithChildren } from 'react';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';
import Stages from '@/components/ui/stages';

const Education: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile } = useIsMobileScreen();

  const educationItems = [
    {
      title: 'ПМГМУ им. Сеченова Лечебное дело',
      description: '2014 – 2020',
    },
    {
      title: 'Магистратура по Клинической медицине AMIR, UDIMA. Valencia, España',
      description: '2020 – 2023',
    },
  ];

  const workItems = [
    {
      title: 'Врач скорой помощи Ambulancias COVASA, Valencia',
      description: '2024',
    },
    {
      title: 'Врач отделения ургентной медицины Hospital Recoletas Zamora, España',
      description: '2024',
    },
    {
      title: 'Врач отдела согласований Best Doctor',
      description: '2023',
    },
    {
      title: 'Преподаватель топографической анатомии Sechenov Universkill',
      description: '2021',
    },
    {
      title: 'Врач-терапевт Городская поликлиника №219',
      description: '2020',
    },
    {
      title: 'Медицинский брат в ковидном отделении',
      description: '2020',
    },
  ];

  return (
    <div className="w-full">

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start">
        <div className="text-2xl lg:text-4xl mb-6 lg:pr-24 basis-1/2 text-right">Опыт работы</div>
        <div className="basis-1/2">
          <Stages items={workItems} />
        </div>
      </div>

      <div className="mt-10 lg:mt-20 w-full flex flex-col lg:flex-row items-center lg:items-start">
        <div className="text-2xl lg:text-4xl mb-6 lg:pr-24 basis-1/2 text-right">Образование</div>
        <div className="basis-1/2">
          <Stages items={educationItems} />
        </div>
      </div>

    </div>
  );
};

export default Education;
