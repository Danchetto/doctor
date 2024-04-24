'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React from 'react';
import Script from 'next/script';

const Patients: React.FC = () => {
  const { t } = useTranslation();

  // useScript({ html: '(function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}})(document,"script","zl-widget-s");' });

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-8 sm:pt-16">
      <About />

      <div className="h-[1px] bg-gray-300 w-[60%] mt-10 lg:mt-16" />

      <div className="mt-10 lg:mt-16 mx-auto flex flex-col items-center">

        <div className="w-full lg:w-[1000px]">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            Онлайн-консультация
          </div>
          <div>
            <div className="font-medium">Может быть полезна в следующих случаях:</div>
            <ul className="list-disc mb-2 mt-2">
              <li className="ml-6">
                для оценки и интерпретации симптомов;
              </li>
              <li className="ml-6">для расшифровки результатов исследований и анализов;</li>
              <li className="ml-6">для контроля эффективности терапии и коррекции лечения при необходимости;</li>
              <li className="ml-6">
                при наличии хронических заболеваний, требующих постоянного контроля со стороны
                врача.
              </li>
            </ul>
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="font-medium">При каких симптомах необходима онлайн-консультация?</div>
            <ul className="list-disc mb-2 mt-2">
              <li className="ml-6">
                общее недомогание, усталость, снижение работоспособности;
              </li>
              <li className="ml-6">головная боль, головокружение;</li>
              <li className="ml-6">простудные и респираторные симптомы (кашель, насморк, боль в горле);</li>
              <li className="ml-6">подозрение на инфекцию мочевыводящих путей;</li>
              <li className="ml-6">повышенная температура тела;</li>
              <li className="ml-6">боли в животе, нарушения пищеварения;</li>
              <li className="ml-6">незначительные травмы и ушибы;</li>
              <li className="ml-6">подозрение на аллергические реакции;</li>
              <li className="ml-6">повышение или снижение артериального давления;</li>
              <li className="ml-6">контроль хронических заболеваний (гипертоническая болезнь, сахарный диабет и т.д.)</li>
            </ul>
          </div>
        </div>

        <div className="w-full mt-10 lg:mt-20 lg:w-[1000px]">
          <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium">
            В консультацию входит:
          </div>
          <div>
            {/* <div className="font-medium">В консультацию входит:</div> */}
            <ul className="list-disc mb-2 mt-2">
              <li className="ml-6">
                видео звонок с врачом через защищенную платформу для медицинских телеконсультаций;
              </li>
              <li className="ml-6">сбор анамнеза, назначение лечения, рекомендации;</li>
              <li className="ml-6">оформление электронного рецепта / направления на анализы и исследования.</li>
            </ul>
            <div className="mb-2">
              В случае острого состояния онлайн консультации не провожу. Для того, чтобы определить смогу ли я вам
              помочь онлайн, опишите
              {' '}
              <span className="font-bold">кратко</span>
              {' '}
              вашу проблему.
            </div>
            <div className="mb-3">
              Продолжительность -
              {' '}
              <b className="font-bold">30 минут</b>
            </div>
            <div>
              Стоимость -
              {' '}
              <span className="font-bold">€50</span>
            </div>
          </div>
        </div>

        {/* <div className="w-full lg:w-[1000px] mt-10 lg:mt-20"> */}
        {/*  <div className="text-2xl lg:text-4xl mb-5 lg:mb-8 font-medium"> */}
        {/*    Продлить рецепт */}
        {/*  </div> */}
        {/*  <div> */}
        {/*    <div className="mb-2"> */}
        {/*      Если у вас уже есть рецепт, выписанный в Испании по испанским правилам, и который нужно обновить, я могу */}
        {/*      с */}
        {/*      этим помочь. */}
        {/*    </div> */}
        {/*    <div className="mb-3"> */}
        {/*      Для этого опишите ситуацию и отправьте рецепт, в котором указаны имя фамилия, название препарата и */}
        {/*      дозировка. */}
        {/*    </div> */}
        {/*    <div> */}
        {/*      Стоимость -*/}
        {/*      {' '} */}
        {/*      <span className="font-bold">€20</span> */}
        {/*    </div> */}
        {/*  </div> */}
        {/* </div> */}

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
