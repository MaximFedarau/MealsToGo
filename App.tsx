import React, { ReactElement } from 'react';
import { StatusBar } from 'expo-status-bar';

import Restaurants from './src/screens/Restaurants.screen';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar style="dark" />
      <Restaurants />
    </>
  );
};

export default App;
