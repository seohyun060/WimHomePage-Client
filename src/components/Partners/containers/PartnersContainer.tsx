import images from '@assets/images';
import { HeaderContext } from '@components/App';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import Partners from '../Partners';

const PartnersContainer = () => {
  const [partners, setPartners] = useState([
    images.partnersLogo.logo1,
    images.partnersLogo.logo2,
    images.partnersLogo.logo3,
    images.partnersLogo.logo4,
    images.partnersLogo.logo5,
    images.partnersLogo.logo6,
    images.partnersLogo.logo7,
    images.partnersLogo.logo8,
    images.partnersLogo.logo9,
    images.partnersLogo.logo10,
    images.partnersLogo.logo11,
    images.partnersLogo.logo12,
  ]);

  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const { changeMode } = useContext(HeaderContext);

  const partnersScrollHandler = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.9) {
          entry.target.classList.add('visible');
        } else if (entry.intersectionRatio < 0.1) {
          entry.target.classList.remove('visible');
        }
      });
    },
    [],
  );

  const observer = new IntersectionObserver(partnersScrollHandler, {
    threshold: new Array(11).fill(0).map((v, i) => i * 0.1),
  });

  useEffect(() => {
    if (!rootRef.current) return;

    const headerObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const top = entry.boundingClientRect.top;
        const height = entry.boundingClientRect.height;

        if (top <= 30 && Math.abs(top - 30) <= height) {
          changeMode('isBlack', true);
        } else {
          changeMode('isBlack', false);
        }
      });
    };

    const headerObserver = new IntersectionObserver(headerObserverCallback, {
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
    });

    headerObserver.observe(rootRef.current);

    mainRef.current?.childNodes.forEach((v) => observer.observe(v as Element));

    return () => {
      headerObserver.disconnect();
    };
  }, []);

  return <Partners partners={partners} rootRef={rootRef} mainRef={mainRef} />;
};

export default PartnersContainer;
