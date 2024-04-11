import { usePathname } from 'next/navigation';
import ru from '../../public/locales/ru/common.json';
import es from '../../public/locales/es/common.json';

const LOCALES = {
  ru,
  es,
};
// eslint-disable-next-line import/prefer-default-export
export const useLocale = () => {
  const pathname = usePathname();

  return pathname.match(new RegExp(`^/(${Object.keys(LOCALES).join('|')})`))?.[1] as keyof typeof LOCALES | undefined;
};
