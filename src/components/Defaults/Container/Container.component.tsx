import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.sizes.md}px;
`;

export const SearchContainer = styled.View`
  margin: ${({ theme }) => theme.sizes.md}px;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const RestaurantInfo = styled.View`
  padding: ${({ theme }) => theme.sizes.md}px;
`;

export const RestaurantRating = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.sizes.sm}px 0;
`;
