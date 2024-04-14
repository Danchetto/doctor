'use client';

import { useTranslation } from '@/hooks/useTranslation';
import About from '@/components/main/about';
import React from 'react';

const Patients: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-16 sm:pt-24">
      <About />

      <div className="w-full lg:w-3/4 mt-20 lg:mt-40">
        <div className="text-4xl text-center mb-10">
          Запись на консультацию
        </div>
        <div>
          <div className="font-bold mb-2">Личная консультация (30 минут) - 50€</div>
          <div>В консультацию входит:</div>
          <ul className="list-disc mb-2">
            <li className="ml-6">аудио или видео звонок с врачом</li>
            <li className="ml-6">сбор анамнеза, назначение лечения, рекомендации</li>
            <li className="ml-6">оформление электронного рецепта / направления на анализы и исследования</li>
          </ul>
          <div>
            В случае острого состояния онлайн консультации не провожу. Для того, чтобы определить смогу ли я вам
            помочь онлайн, опишите КРАТКО вашу проблему.
          </div>
        </div>

        <div className="mb-10 mt-10">
          <div
            dangerouslySetInnerHTML={{ __html: '<a id="zl-url" class="zl-url" href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia" rel="nofollow" data-zlw-doctor="petr-tuchin" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Petr Tuchin - Doctoralia.es</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>' }}
          />
        </div>
      </div>

      <div className="w-full lg:w-3/4 mt-20 lg:mt-40">
        <div className="text-4xl text-center mb-10">
          Продлить рецепт
        </div>
        <div>
          <div className="font-bold mb-2">Продлить рецепт - 15€</div>
          <div className="mb-2">
            Если у вас уже есть рецепт, выписанный в Испании по испанским правилам, и который нужно обновить, я могу с
            этим помочь
          </div>
          <div>
            Для этого опишите ситуацию и отправьте рецепт, в котором указаны имя фамилия, название препарата и дозировка
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
