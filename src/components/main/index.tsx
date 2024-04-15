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
    <div className="flex min-h-screen flex-col items-center px-6 sm:px-24 pt-16 sm:pt-24">
      <About />

      <div className="relative w-full mt-[100px] lg:mt-[200px] flex flex-col lg:flex-row justify-center gap-10 sm:gap-32">
        <div className="h-auto">
          <FeatureCard title="Для пациентов" features={patientsFeatures} src="/patients" />
        </div>

        <div>
          <FeatureCard title="Для врачей" features={doctorFeatures} src="/doctors" />
        </div>
      </div>

      <div className="h-[80px] sm:h-[200px]" />

      <Education />

      {/* <div className="mb-10"> */}
      {/*  /!* <a id="zl-url" className="zl-url" href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia" rel="nofollow" data-zlw-doctor="petr-tuchin" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Petr Tuchin - Doctoralia.es</a> *!/ */}
      {/*  <div dangerouslySetInnerHTML={{ __html: '<a id="zl-url" class="zl-url" href="https://www.doctoralia.es/petr-tuchin/medico-general/valencia" rel="nofollow" data-zlw-doctor="petr-tuchin" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Petr Tuchin - Doctoralia.es</a><script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>' }} /> */}
      {/* </div> */}
    </div>
  );
};

export default Main;
