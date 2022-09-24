import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  View,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantsList from 'components/Restaurants/RestaurantsList/RestaurantsList.component';
import { COLORS } from 'constants/colors';

const Restaurants = (): ReactElement => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchContainer}
      />
      <View style={styles.contentContainer}>
        <RestaurantsList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    margin: 16,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    padding: 16,
    flexGrow: 1,
  },
});

export default Restaurants;
