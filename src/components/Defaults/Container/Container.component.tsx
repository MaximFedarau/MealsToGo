import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.sizes.md}px;
`;

export const SearchContainer = styled.View`
  margin: ${({ theme }) =>
    `${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px ${
      theme.sizes.md
    }px ${theme.sizes.md}px`};
`;

export const RestaurantInfo = styled.View`
  padding: ${({ theme }) => theme.sizes.md}px;
`;

export const RestaurantRating = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.sizes.sm}px 0;
`;

export const Rating = styled.View<{ rating: number }>`
  height: ${({ theme }) => theme.sizes.xl}px;
  width: ${({ theme, rating }) => theme.sizes.xl * rating}px;
  margin-right: ${({ theme }) => theme.sizes.sm / 4}px; /* gap */
  padding-top: ${({ theme }) =>
    theme.sizes.xl / theme.sizes.md}px; /* centering icon */
  overflow: hidden;
`;
