import images from '@assets/images';
import React from 'react';
import { useState } from 'react';
import Partners from '../Partners';

const PartnersContainer = () => {
  const [partners, setPartners] = useState([
    images.partners.logo1,
    images.partners.logo2,
    images.partners.logo3,
    images.partners.logo4,
    images.partners.logo5,
    images.partners.logo6,
    images.partners.logo7,
    images.partners.logo8,
    images.partners.logo9,
    images.partners.logo10,
    images.partners.logo11,
  ]);

  return <Partners partners={partners} />;
};

export default PartnersContainer;
