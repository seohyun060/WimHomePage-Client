import React from 'react';
import Header from '../Header';

type Props = { page: number };

const HeaderContainer = (props: Props) => {
  return <Header {...props} />;
};

export default HeaderContainer;
