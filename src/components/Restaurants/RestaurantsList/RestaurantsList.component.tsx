import React from 'react';
import { FlatList } from 'react-native';

import RestaurantItem from 'components/Restaurants/RestaurantItem/RestaurantItem.component';
import { Restaurant } from 'types/interfaces';

const RestaurantsList: React.FC = () => {
  const data: Restaurant[] = [
    {
      name: 'Restaurant 1',
      address: 'Address 1',
      rating: 3.5,
      icon: 'https://picsum.photos/200',
      photos: ['https://picsum.photos/200', 'https://picsum.photos/200'],
      isOpenNow: true,
      isOpenTemporarily: true,
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RestaurantItem {...item} />}
      keyExtractor={item => item.name}
    />
  );
};

export default RestaurantsList;
