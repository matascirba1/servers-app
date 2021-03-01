import React, { FunctionComponent } from 'react';
import Menu from './components/Menu';
import ServersList from './components/ServersList';

const Servers: FunctionComponent = () => {
  return (
    <>
      <Menu />
      <ServersList />
    </>
  );
};

export default Servers;
