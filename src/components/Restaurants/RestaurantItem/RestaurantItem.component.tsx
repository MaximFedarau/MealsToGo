import React from 'react';

import {
  RestaurantInfo,
  RestaurantRating,
} from 'components/Defaults/Container/Container.component';
import {
  RestaurantTitle,
  RestaurantAddress,
} from 'components/Defaults/Text/Text.component';
import { Card, Icon, Rating } from './RestaurantItem.styles';
import { SIZES } from 'constants/sizes';
import { Restaurant } from 'types/interfaces';
import Star from 'assets/static/svgs/Star';

const RestaurantItem: React.FC<Restaurant> = ({
  name,
  icon,
  address,
  rating,
}) => {
  const ratingToArray = React.useCallback(() => {
    const truncatedRating = Math.trunc(rating); // 4.9 => 4
    const array = [...new Array(truncatedRating).fill(1)];
    if (truncatedRating !== rating) {
      array.push(rating - truncatedRating);
    }
    return array;
  }, [rating]);
  return (
    <Card>
      <Icon source={{ uri: icon }} />
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantRating>
          {ratingToArray().map((item, index) => (
            <Rating key={index} rating={item}>
              <Star size={SIZES.lg} />
            </Rating>
          ))}
        </RestaurantRating>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
    </Card>
  );
};

export default RestaurantItem;
