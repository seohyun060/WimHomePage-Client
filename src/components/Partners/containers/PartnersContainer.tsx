import images from '@assets/images';
import React, { useCallback, useEffect, useRef } from 'react';
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

  const mainRef = useRef<HTMLDivElement>(null);

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
    mainRef.current?.childNodes.forEach((v) => observer.observe(v as Element));
  }, []);

  return <Partners partners={partners} mainRef={mainRef} />;
};

export default PartnersContainer;
