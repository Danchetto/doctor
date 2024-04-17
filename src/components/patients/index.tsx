'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useScript from '@/hooks/useScript';
import Script from 'next/script';
import TelegramButton from '@/components/ui/telegramButton';
import WhatsappButton from '@/components/ui/whatsappButton';

const Patients: React.FC = () => {
  const { t } = useTranslation();

  // useScript({ html: '(function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}})(document,"script","zl-widget-s");' });

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-16">
      <About />

      <div className="h-[1px] bg-gray-300 w-[60%] mt-10 lg:mt-16" />

      <div className="mt-10 lg:mt-16 mx-auto flex flex-col items-center">

        <div className="w-full lg:w-3/4">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            Запись на онлайн консультацию
          </div>
          <div>
            <div>В консультацию входит:</div>
            <ul className="list-disc mb-2">
              <li className="ml-6">
                видео звонок с врачом через защищенную платформу для медицинских телеконсультаций;
              </li>
              <li className="ml-6">сбор анамнеза, назначение лечения, рекомендации;</li>
              <li className="ml-6">оформление электронного рецепта / направления на анализы и исследования.</li>
            </ul>
            <div className="mb-3">
              В случае острого состояния онлайн консультации не провожу. Для того, чтобы определить смогу ли я вам
              помочь онлайн, опишите
              {' '}
              <span className="font-bold underline">кратко</span>
              {' '}
              вашу проблему.
            </div>
            <div>
              Стоимость -
              {' '}
              <span className="font-bold underline">€50</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/4 mt-10 lg:mt-20">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            Продлить рецепт
          </div>
          <div>
            <div className="mb-2">
              Если у вас уже есть рецепт, выписанный в Испании по испанским правилам, и который нужно обновить, я могу
              с
              этим помочь.
            </div>
            <div className="mb-3">
              Для этого опишите ситуацию и отправьте рецепт, в котором указаны имя фамилия, название препарата и
              дозировка.
            </div>
            <div>
              Стоимость -
              {' '}
              <span className="font-bold underline">€20</span>
            </div>
          </div>
        </div>

        {/* <div className="mb-10 mt-10 lg:min-w-[300px]"> */}
        {/*  <div className="flex mt-6 mb-6 gap-4 lg:hidden"> */}
        {/*    <TelegramButton /> */}
        {/*    <WhatsappButton /> */}
        {/*  </div> */}
        {/*  <div> */}
        {/*    <a */}
        {/*      id="zl-url" */}
        {/*      className="zl-url" */}
        {/*      href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia" */}
        {/*      rel="nofollow" */}
        {/*      data-zlw-doctor="petr-tuchin" */}
        {/*      data-zlw-type="big_with_calendar" */}
        {/*      data-zlw-opinion="false" */}
        {/*      data-zlw-hide-branding="true" */}
        {/*      data-zlw-saas-only="false" */}
        {/*    > */}
        {/*      Petr Tuchin - Doctoralia.es */}
        {/*    </a> */}
        {/*    <Script */}
        {/*      id="pat" */}
        {/*      dangerouslySetInnerHTML={{ __html: '!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");' }} */}
        {/*    /> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Patients;
