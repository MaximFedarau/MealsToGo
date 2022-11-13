import React from 'react';
import { FlatList } from 'react-native';

import RestaurantItem from 'components/Restaurants/RestaurantItem/RestaurantItem.component';
import { Restaurant } from 'types/restaurants';

const RestaurantsList: React.FC<{ children: Restaurant[] }> = ({
  children,
}) => {
  return (
    <FlatList
      data={children}
      renderItem={({ item }) => <RestaurantItem {...item} />}
      keyExtractor={({ name }) => name}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RestaurantsList;
