import React from 'react';
import { Searchbar } from 'react-native-paper';

import {
  SafeAreaContainer,
  SearchContainer,
  ContentContainer,
} from 'components/Defaults/Container/Container.component';
import RestaurantsList from 'components/Restaurants/RestaurantsList/RestaurantsList.component';

const Restaurants: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  return (
    <SafeAreaContainer>
      <SearchContainer>
        <Searchbar value={searchText} onChangeText={setSearchText} />
      </SearchContainer>
      <ContentContainer>
        <RestaurantsList />
      </ContentContainer>
    </SafeAreaContainer>
  );
};

export default Restaurants;
