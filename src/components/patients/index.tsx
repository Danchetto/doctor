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

  useScript({ html: '(function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}})(document,"script","zl-widget-s");' });

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-24">
      <About />

      <div className="lg:flex mt-10 lg:mt-40">

        <div>
          <div className="w-full lg:w-3/4">
            <div className="text-2xl lg:text-4xl mb-5 lg:mb-10">
              Запись на консультацию
            </div>
            <div>
              <div className="font-bold mb-2">
                Личная консультация (30 минут) -
                {' '}
                <span className="font-[900] underline">€50</span>
              </div>
              <div>В консультацию входит:</div>
              <ul className="list-disc mb-2">
                <li className="ml-6">видео звонок с врачом через защищенную платформу для медицинских телеконсультаций;</li>
                <li className="ml-6">сбор анамнеза, назначение лечения, рекомендации;</li>
                <li className="ml-6">оформление электронного рецепта / направления на анализы и исследования.</li>
              </ul>
              <div>
                В случае острого состояния онлайн консультации не провожу. Для того, чтобы определить смогу ли я вам помочь онлайн, опишите
                {' '}
                <span className="font-[900] underline">кратко</span>
                {' '}
                вашу проблему.
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 mt-10 lg:mt-20">
            <div className="text-2xl lg:text-4xl mb-5 lg:mb-10">
              Продлить рецепт
            </div>
            <div>
              <div className="font-bold mb-2">
                Продлить рецепт -
                {' '}
                <span className="font-[900] underline">€15</span>
              </div>
              <div className="mb-2">
                Если у вас уже есть рецепт, выписанный в Испании по испанским правилам, и который нужно обновить, я могу
                с
                этим помочь.
              </div>
              <div>
                Для этого опишите ситуацию и отправьте рецепт, в котором указаны имя фамилия, название препарата и
                дозировка.
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 mt-10 lg:min-w-[300px]">
          <div className="flex mt-6 mb-6 gap-4 lg:hidden">
            <TelegramButton />
            <WhatsappButton />
          </div>
          <div>
            <a
              id="zl-url"
              className="zl-url"
              href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia"
              rel="nofollow"
              data-zlw-doctor="petr-tuchin"
              data-zlw-type="big_with_calendar"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
              data-zlw-saas-only="false"
            >
              Petr Tuchin - Doctoralia.es
            </a>
            <Script
              dangerouslySetInnerHTML={{ __html: '!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Patients;
