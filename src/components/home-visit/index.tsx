'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React from 'react';
import Script from 'next/script';

const Patients: React.FC = () => {
  const { t } = useTranslation();

  // useScript({ html: '(function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}})(document,"script","zl-widget-s");' });

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-16 overflow-hidden">
      <About />

      <div className="h-[1px] bg-gray-300 w-[60%] mt-10 lg:mt-16" />

      <div className="mt-10 lg:mt-16 mx-auto flex flex-col items-center">

        <div className="w-full lg:w-[1000px]">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            Выезд врача на дом (город Валенсия)
          </div>
          <div>
            <div className="font-medium">Что входит в услугу:</div>
            <ul className="list-disc mb-2 mt-2">
              <li className="ml-6">
                Осмотр и диагностика на месте
              </li>
              <li className="ml-6">
                Сбор анамнеза и назначение лечения
              </li>
              <li className="ml-6">
                Рекомендации по дальнейшим шагам для быстрого выздоровления
              </li>
              <li className="ml-6">
                Электронный рецепт или направление на анализы/исследования при необходимости
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full mt-10 lg:mt-20 lg:w-[1000px]">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            Почему это удобно?
          </div>
          <div>
            <div>Вам не нужно выходить из дома, особенно если чувствуете недомогание. Я приеду к вам и проведу полноценную консультацию, как в клинике.</div>
            <div className="mt-3 underline underline-offset-2">
              Стоимость -
              {' '}
              <span className="font-bold">180€</span>
              {/* <div className="font-bold">250€ (выходные и праздничные дни)</div> */}
            </div>
          </div>
        </div>

        <div className="mb-10 mt-10 lg:min-w-[300px]">
          {/* <div className="flex mt-6 mb-6 gap-4 lg:hidden"> */}
          {/*  <TelegramButton /> */}
          {/*  <WhatsappButton /> */}
          {/* </div> */}
          <div>
            <a
              id="zl-url"
              className="zl-url"
              href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia"
              rel="nofollow"
              data-zlw-doctor="petr-tuchin"
              data-zlw-type="certificate"
              data-zlw-opinion="false"
              data-zlw-hide-branding="true"
              data-zlw-saas-only="false"
            >
              Petr Tuchin - Doctoralia.es
            </a>
            <Script
              id="pat"
              dangerouslySetInnerHTML={{ __html: '!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
