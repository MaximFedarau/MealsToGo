import React, { ReactElement } from 'react';

import { RestaurantTitle } from 'components/Defaults/Text/Text.component';
import { Card, Icon } from './RestaurantItem.styles';
import { Restaurant } from 'types/interfaces';

const RestaurantItem = ({ name, icon }: Restaurant): ReactElement => {
  return (
    <Card>
      <Icon source={{ uri: icon }} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </Card>
  );
};

export default RestaurantItem;
