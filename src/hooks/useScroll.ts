import { useCallback, useRef } from 'react';

export function useScroll() {
  const rootRef = useRef<HTMLDivElement>(null);

  const wheelHandler = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const windowHeight = window.innerHeight;
    const { pageY, clientY, deltaY } = e;

    const currentPage = Math.floor((pageY - clientY) / windowHeight);

    if (deltaY > 100)
      window.scrollTo({
        top: windowHeight * (currentPage + 1),
        behavior: 'smooth',
      });

    if (deltaY < -100)
      window.scrollTo({
        top: windowHeight * (currentPage - 1),
        behavior: 'smooth',
      });
  }, []);

  return { rootRef, wheelHandler };
}
