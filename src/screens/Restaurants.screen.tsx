import React, { ReactElement } from 'react';
import { Searchbar } from 'react-native-paper';

import {
  Container,
  SearchContainer,
  ContentContainer,
} from 'components/Defaults/Container/Container.component';

import RestaurantsList from 'components/Restaurants/RestaurantsList/RestaurantsList.component';

const Restaurants = (): ReactElement => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <Container>
      <SearchContainer>
        <Searchbar value={searchText} onChangeText={setSearchText} />
      </SearchContainer>

      <ContentContainer>
        <RestaurantsList />
      </ContentContainer>
    </Container>
  );
};

export default Restaurants;
