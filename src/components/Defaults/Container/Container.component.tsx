import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
`;

export const ContentContainer = styled.View`
  flex-grow: 1;
  padding: ${({ theme }) => theme.paddings.md}px;
`;

export const SearchContainer = styled.View`
  margin: ${({ theme }) => theme.margins.md}px;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantInfo = styled.View`
  padding: ${({ theme }) => theme.paddings.md}px;
`;

export const RestaurantRating = styled.View`
  flex-direction: row;
`;
