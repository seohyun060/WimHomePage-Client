import { useCallback, useEffect, useRef, useState } from 'react';

export function useScroll() {
  const [page, setPage] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);

  const wheelHandler = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const windowHeight = window.innerHeight;
    const { pageY, clientY, deltaY } = e;

    const currentPage = Math.floor((pageY - clientY) / windowHeight);

    if (deltaY > 100) {
      window.scrollTo({
        top: windowHeight * (currentPage + 1),
        behavior: 'smooth',
      });
      setPage(currentPage + 1);
    }
    if (deltaY < -100) {
      window.scrollTo({
        top: windowHeight * (currentPage - 1),
        behavior: 'smooth',
      });
      setPage(currentPage - 1);
    }
  }, []);

  return { rootRef, wheelHandler, page };
}
