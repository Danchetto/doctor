'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React from 'react';
import Script from 'next/script';

const Doctors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-16 sm:pt-24">
      <About />

      <div className="w-full lg:w-3/4 mt-20 lg:mt-40">
        <div className="text-2xl lg:text-4xl text-center mb-10">
          Запись на консультацию по омологации диплома
        </div>
        <div>
          <div className="font-bold mb-2">
            Личная консультация -
            {' '}
            <span className="font-[900] underline">€50</span>
          </div>
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
          <div>
            Продолжительность -
            {' '}
            <b className="font-[900] underline">1 год!</b>
            {' '}
            (после онлайн консультации в течение одного года Вы можете ко мне обращаться за помощью)
          </div>
        </div>

        <div className="mb-10 mt-10">
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

      {/* <div className="w-full lg:w-3/4 mt-20 lg:mt-40"> */}
      {/*  <div className="text-2xl lg:text-4xl text-center mb-10"> */}
      {/*    Как стать врачом в Испании? */}
      {/*  </div> */}
      {/*   <div> */}
      {/*    <div className="font-bold mb-2">Продлить рецепт - 15€</div> */}
      {/*    <div className="mb-2"> */}
      {/*      Если у вас уже есть рецепт, выписанный в Испании по испанским правилам, и который нужно обновить, я могу с */}
      {/*      этим помочь */}
      {/*    </div> */}
      {/*    <div> */}
      {/*      Для этого опишите ситуацию и отправьте рецепт, в котором указаны имя фамилия, название препарата и дозировка */}
      {/*    </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

export default Doctors;
