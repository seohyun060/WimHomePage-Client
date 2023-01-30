import { usePointer } from '@hooks/usePointer';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Main from '../Main';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '@components/App';

const MainContainer = () => {
  const navigate = useNavigate();
  const { pointerRef, pointerAnimation, pointerHandler } = usePointer();
  const {
    changeMode,
    headerMode: { isBlur },
  } = useContext(HomeContext);

  const rootRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const onButtonClicked = useCallback(() => {
    navigate('/contact-detail');
  }, [navigate]);

  const mainScrollHandler = useCallback(() => {
    const scrollTop = window.scrollY;
    const screenHeight = window.innerHeight;

    if (scrollTop > screenHeight * 2) return;

    const pointer = pointerRef.current;
    const background = backgroundRef.current;
    const main = mainRef.current;

    const scroll = scrollRef.current;

    if (!(pointer && background && main && scroll)) return;

    main.style.transform = `translate(0,${-scrollTop / 3}px)`;
    main.style.opacity = `${1 - scrollTop / screenHeight}`;

    scroll.style.transform = `translate(0,${scrollTop / 2}px)`;
    scroll.style.opacity = `${1 - scrollTop / screenHeight}`;

    if (scrollTop > screenHeight * 1.5) {
      pointer.style.visibility = 'hidden';
    } else {
      pointer.style.visibility = 'visible';
    }
  }, []);

  const headerObserverCallback = (entries: IntersectionObserverEntry[]) => {
    console.log('entry');

    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);

      if (entry.intersectionRatio < 0.4) {
        changeMode('isBlur', true);
      } else {
        changeMode('isBlur', false);
      }
    });
  };

  const observer = new IntersectionObserver(headerObserverCallback, {
    threshold: new Array(11).fill(0).map((v, i) => i * 0.1),
  });

  useEffect(() => {
    window.addEventListener('mousemove', pointerHandler);
    window.addEventListener('scroll', mainScrollHandler);
    pointerAnimation();

    if (!mainRef.current) return;

    observer.observe(mainRef.current);
    return () => {
      window.removeEventListener('mousemove', pointerHandler);
      window.removeEventListener('scroll', mainScrollHandler);
    };
  }, []);

  return (
    <Main
      rootRef={rootRef}
      pointerRef={pointerRef}
      backgroundRef={backgroundRef}
      mainRef={mainRef}
      scrollRef={scrollRef}
      onButtonClicked={onButtonClicked}
    />
  );
};

export default MainContainer;
