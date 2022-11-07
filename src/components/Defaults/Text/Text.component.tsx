import styled from 'styled-components/native';
import { Text } from 'react-native'; // we inherit it, because we want to extend it & its types

export const DefaultText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RestaurantTitle = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families['primary-bold']};
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']}px;
`;

export const RestaurantAddress = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
`;

export const RestaurantRating = styled(DefaultText)`
  margin-right: ${({ theme }) => theme.sizes.sm}px; /* gap */
  font-family: ${({ theme }) => theme.fonts.families.primary};
`;
