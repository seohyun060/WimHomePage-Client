import { usePointer } from '@hooks/usePointer';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Main from '../Main';

const MainContainer = () => {
  const { pointerRef, pointerAnimation, pointerHandler } = usePointer();

  useEffect(() => {
    window.addEventListener('mousemove', pointerHandler);
    pointerAnimation();
    return () => {
      window.removeEventListener('mousemove', pointerHandler);
    };
  }, []);

  return <Main pointerRef={pointerRef} />;
};

export default MainContainer;
