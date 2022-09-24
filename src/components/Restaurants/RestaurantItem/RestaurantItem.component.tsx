import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

import { Restaurant } from '../../../types/interfaces';
import { COLORS } from '../../../constants/colors';

const RestaurantItem = ({ name, icon }: Restaurant): ReactElement => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: icon }} style={styles.icon} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
  },
  icon: {
    padding: 16,
    backgroundColor: COLORS.white,
  },
});

export default RestaurantItem;
