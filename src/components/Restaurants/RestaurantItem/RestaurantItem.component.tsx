import React from 'react';

import {
  RestaurantInfo,
  RestaurantRating,
  Rating,
} from 'components/Defaults/Container/Container.component';
import {
  RestaurantTitle,
  RestaurantAddress,
  RestaurantRating as RestaurantRatingText,
} from 'components/Defaults/Text/Text.component';
import { Card, Icon } from './RestaurantItem.styles';
import { SIZES } from 'constants/theme/sizes';
import { COLORS } from 'constants/theme/colors';
import { Restaurant } from 'types/restaurants';
import Star from 'assets/static/svgs/Star';

const RestaurantItem: React.FC<Restaurant> = ({
  name,
  icon,
  vicinity,
  rating,
  openingHours,
}) => {
  const ratingToArray = React.useCallback(() => {
    const truncatedRating = Math.trunc(rating); // 4.9 => 4
    const array: number[] = [...new Array(truncatedRating).fill(1)];
    if (truncatedRating !== rating) {
      array.push(rating - truncatedRating);
    }
    return array;
  }, [rating]);

  const ratingColor = React.useMemo(() => {
    if (rating >= 4.5) {
      return COLORS.success;
    }
    if (rating >= 3.5) {
      return COLORS.yellow;
    }
    return COLORS.lightGray;
  }, [rating]);
  return (
    <Card>
      <Icon isOpen={openingHours.openNow} source={{ uri: icon }} />
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantRating>
          <RestaurantRatingText>{rating.toFixed(1)}</RestaurantRatingText>
          {ratingToArray().map((item, index) => (
            <Rating key={index} rating={item}>
              <Star size={SIZES.xl} color={ratingColor} />
            </Rating>
          ))}
        </RestaurantRating>
        <RestaurantAddress>{vicinity}</RestaurantAddress>
      </RestaurantInfo>
    </Card>
  );
};

export default RestaurantItem;
