import React, { PropsWithChildren } from 'react';

import { useTranslation } from '@/hooks/useTranslation';
import useIsMobileScreen from '@/hooks/useIsMobileScreen';

interface Props {
  items: { title: string; description: string }[];
  rigth?: boolean;
}

const Stages: React.FC<Props> = (props) => {
  const { items, rigth } = props;
  const { t } = useTranslation();
  const { isMobile } = useIsMobileScreen();

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.title} className="relative">
          {index < items.length - 1 && (
            <div className="absolute w-full h-full inset-0">
              <div
                className={`h-full ${rigth ? 'mr-[6px]' : 'ml-[6px]'} mt-2 border-main border-[4px] border-b-0 border-t-0 ${rigth ? 'border-l-0' : 'border-r-0'}`}
                style={{
                  borderImageSlice: 1,
                }}
              />
            </div>
          )}

          <div className={`flex pb-8 ${rigth ? 'flex-row-reverse justify-between' : ''}`}>
            <div className="min-w-4 h-4 mt-1 rounded-full bg-main" />

            <div className={`${rigth ? 'mr-6 text-left float-left' : 'ml-6'}`}>
              <div className="title-normal mb-1">
                {item.title}
              </div>
              <div className="label-normal">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stages;
