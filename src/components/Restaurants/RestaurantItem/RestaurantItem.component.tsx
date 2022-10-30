import React, { ReactElement } from 'react';

import {
  RestaurantTitle,
  RestaurantAddress,
} from 'components/Defaults/Text/Text.component';
import { Card, Icon } from './RestaurantItem.styles';
import { RestaurantInfo } from 'components/Defaults/Container/Container.component';
import { Restaurant } from 'types/interfaces';

const RestaurantItem = ({ name, icon, address }: Restaurant): ReactElement => {
  return (
    <Card>
      <Icon source={{ uri: icon }} />
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
    </Card>
  );
};

export default RestaurantItem;
