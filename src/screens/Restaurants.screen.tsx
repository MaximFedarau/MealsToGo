import React from 'react';
import { Searchbar } from 'react-native-paper';
import { useAtom } from 'jotai';

import {
  SafeAreaContainer,
  SearchContainer,
  ContentContainer,
} from 'components/Defaults/Container/Container.component';
import { Spinner } from 'components/Defaults/Spinner/Spinner.component';
import RestaurantsList from 'components/Restaurants/RestaurantsList/RestaurantsList.component';
import { restaurantsAtom } from 'states/restaurants';
import { getRestaurants } from 'api/cities/getRestaurants';
import { COLORS } from 'constants/theme/colors';

const Restaurants: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');

  const [restaurants, setRestaurants] = useAtom(restaurantsAtom);

  React.useEffect(() => {
    getRestaurants('toronto').then(data => {
      setRestaurants(data?.results || []);
      setIsLoading(false);
    });
  }, [setRestaurants]);
  return (
    <SafeAreaContainer>
      <SearchContainer>
        <Searchbar value={searchText} onChangeText={setSearchText} />
      </SearchContainer>
      {isLoading ? (
        <Spinner size="large" color={COLORS.black} />
      ) : (
        <ContentContainer>
          <RestaurantsList>{restaurants}</RestaurantsList>
        </ContentContainer>
      )}
    </SafeAreaContainer>
  );
};

export default Restaurants;
