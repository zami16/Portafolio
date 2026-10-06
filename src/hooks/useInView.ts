import { useEffect, useRef, useState } from 'react';

/** Marca un elemento como visible la primera vez que entra en pantalla. */
export function useInView<T extends Element>(options: IntersectionObserverInit = { rootMargin: '0px 0px -20% 0px' }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
    // Las opciones son estáticas por diseño.
  }, [inView]);

  return [ref, inView] as const;
}
