import React, { useEffect, useState } from 'react';
import Header from '../Header';
type Props = {
    page:number;
  location: string;
};
const HeaderContainer = ({ location , page}: Props) => {
  const [headerColor, setHeaderColor] = useState('');

  useEffect(() => {
    if (location === 'http://localhost:3000/#partners') {
      setHeaderColor('-black');
    } else {
      setHeaderColor('');
    }
    console.log(location);
  }, [location, headerColor]);

  return <Header headerColor={headerColor} page={page} />;
};

export default HeaderContainer;
