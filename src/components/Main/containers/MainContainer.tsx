import { usePointer } from '@hooks/usePointer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Main from '../Main';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigate();
  const { pointerRef, pointerAnimation, pointerHandler } = usePointer();

  const onButtonClicked = useCallback(() => {
    navigate('/contact-detail');
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('mousemove', pointerHandler);
    pointerAnimation();
    return () => {
      window.removeEventListener('mousemove', pointerHandler);
    };
  }, []);

  return <Main pointerRef={pointerRef} onButtonClicked={onButtonClicked} />;
};

export default MainContainer;
