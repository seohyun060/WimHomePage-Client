import { useCallback, useRef } from 'react';

export function usePointer() {
  let positionX = 0;
  let positionY = 0;
  let positionMX = 0;
  let positionMY = 0;
  const speed = 0.06;

  const pointerRef = useRef<HTMLDivElement>(null);

  const pointerHandler = useCallback((e: MouseEvent) => {
    positionX = e.clientX;
    positionY = e.clientY;
  }, []);

  const pointerAnimation = useCallback(() => {
    const pointer = pointerRef.current;
    if (!pointer) return;

    positionMX += (positionX - positionMX) * speed;
    positionMY += (positionY - positionMY) * speed;
    pointer.style.transform = `translate(${positionMX - 50}px, ${
      positionMY - 50
    }px)`;

    requestAnimationFrame(pointerAnimation);
  }, []);

  return {
    pointerRef,
    pointerHandler,
    pointerAnimation,
  };
}
