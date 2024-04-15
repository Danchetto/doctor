import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Router } from 'next/router';

const useScript = ({ src, html }: { src?: string; html?: string }) => {
  const router = useRouter();
  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    setTimeout(() => {
      script = document.createElement('script');
      const id = Math.random();
      script.id = `${id}`;

      if (src) {
        script.src = src;
      }

      if (html) {
        script.innerHTML = html;
      }

      script.defer = true;

      console.log('add script:', id);
      document.body.appendChild(script);
    }, 0);

    return () => {
      console.log('destroy script');
      if (script?.id) {
        document.body.removeChild(script as HTMLScriptElement);
      }
    };
  }, [router]);
};

export default useScript;
