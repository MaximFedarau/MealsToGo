import React from 'react';
import { FlatList } from 'react-native';

import RestaurantItem from 'components/Restaurants/RestaurantItem/RestaurantItem.component';
import { Restaurant } from 'types/interfaces';

const RestaurantsList: React.FC = () => {
  const data: Restaurant[] = [
    {
      name: 'Food&Drink',
      address: '1234 Main Street, New York, NY',
      rating: 4.5,
      icon: 'https://picsum.photos/id/28/1920',
      photos: ['https://picsum.photos/1920', 'https://picsum.photos/1920'],
      isOpen: true,
    },
    {
      name: 'Coffee Bloom',
      address: '1235 Main Street, New York, NY',
      rating: 3.7,
      icon: 'https://picsum.photos/id/29/1920',
      photos: ['https://picsum.photos/1920', 'https://picsum.photos/1920'],
      isOpen: false,
    },
  ];
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <RestaurantItem {...item} />}
        keyExtractor={item => item.name}
      />
    </>
  );
};

export default RestaurantsList;
