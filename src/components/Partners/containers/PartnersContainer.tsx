import images from '@assets/images';
import React from 'react';
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

  return <Partners partners={partners} />;
};

export default PartnersContainer;
