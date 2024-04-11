import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useIsMobileScreen = (): {
  isTablet: boolean;
  isMobile: boolean;
  isVerySmall: boolean;
} => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsTablet(window.innerWidth < 1440);
      setIsMobile(window.innerWidth < 768);
      setIsVerySmall(window.innerWidth < 450);
    };
    window.addEventListener('resize', debounce(updateSize, 50));
    updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return { isTablet, isMobile, isVerySmall };
};

export default useIsMobileScreen;
