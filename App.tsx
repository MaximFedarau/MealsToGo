import React, { ReactElement } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';

import Restaurants from 'screens/Restaurants.screen';
import { THEME } from 'constants/theme/theme';
import { SCREENS } from 'constants/screens';
import Hamburger from 'assets/static/svgs/Hamburger';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const RestaurantsIcon: React.FC<TabBarIconProps> = ({ color, size }) => (
  <Hamburger size={size} color={color} />
);

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: THEME.colors.black,
              tabBarInactiveTintColor: THEME.colors.darkGray,
            }}>
            <Tab.Screen
              name={SCREENS.RESTAURANTS}
              component={Restaurants}
              options={{
                tabBarIcon: RestaurantsIcon,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
