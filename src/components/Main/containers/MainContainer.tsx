import { usePointer } from '@hooks/usePointer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Main from '../Main';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigate();
  const { pointerRef, pointerAnimation, pointerHandler } = usePointer();

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

  useEffect(() => {
    window.addEventListener('mousemove', pointerHandler);
    window.addEventListener('scroll', mainScrollHandler);
    pointerAnimation();

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
