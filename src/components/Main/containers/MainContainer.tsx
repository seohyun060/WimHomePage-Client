import { usePointer } from '@hooks/usePointer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Main from '../Main';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigate();
  const { pointerRef, pointerAnimation, pointerHandler } = usePointer();

  const backgroundRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
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
    const title = titleRef.current;
    const desc = descRef.current;
    const button = buttonRef.current;
    const scroll = scrollRef.current;

    if (!(pointer && background && main && title && desc && button && scroll))
      return;

    title.style.transform = `translate(0,${-scrollTop / 3}px)`;
    title.style.opacity = `${1 - scrollTop / screenHeight}`;

    desc.style.transform = `translate(0,${-scrollTop / 3}px)`;
    desc.style.opacity = `${1 - scrollTop / screenHeight}`;

    button.style.transform = `translate(0,${-scrollTop / 3}px)`;
    button.style.opacity = `${1 - scrollTop / screenHeight}`;

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
      pointerRef={pointerRef}
      backgroundRef={backgroundRef}
      mainRef={mainRef}
      titleRef={titleRef}
      descRef={descRef}
      buttonRef={buttonRef}
      scrollRef={scrollRef}
      onButtonClicked={onButtonClicked}
    />
  );
};

export default MainContainer;
