import React, { ReactElement } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import Restaurants from 'screens/Restaurants.screen';
import { THEME } from 'constants/theme';

const App = (): ReactElement | null => {
  const [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald/Oswald-Regular.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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
