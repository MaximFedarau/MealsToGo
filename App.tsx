import React, { ReactElement } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Restaurants from 'screens/Restaurants.screen';
import { THEME } from 'constants/theme';

const App = (): ReactElement => {
  return (
    <>
      <StatusBar style="dark" />
      <ThemeProvider theme={THEME}>
        <Restaurants />
      </ThemeProvider>
    </>
  );
};

export default App;
