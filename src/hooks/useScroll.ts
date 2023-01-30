import { useCallback, useEffect, useRef, useState } from 'react';

export function useScroll() {
  const [page, setPage] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);

  const onPageChanged = useCallback((page: number) => {
    setPage(page);
  }, []);

  const wheelHandler = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const windowHeight = window.innerHeight;
    const { pageY, clientY, deltaY } = e;

    const currentPage = Math.floor((pageY - clientY) / windowHeight);

    if (deltaY > 100) {
      setPage(currentPage + 1);
    }
    if (deltaY < -100) {
      setPage(currentPage - 1);
    }
  }, []);

  const scrollHandler = useCallback(() => {
    const { scrollY, innerHeight } = window;

    const currentPage = Math.floor(scrollY / innerHeight);

    // setPage(currentPage);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * page,
      behavior: 'smooth',
    });
  }, [page]);

  return { rootRef, wheelHandler, page, onPageChanged, scrollHandler };
}
