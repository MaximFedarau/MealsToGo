import styled from 'styled-components/native';
import { Text } from 'react-native'; // we inherit it, because we want to extend it & its types

export const DefaultText = styled(Text)`
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RestaurantTitle = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.primary};
`;

export const RestaurantAddress = styled(DefaultText)`
  font-family: ${({ theme }) => theme.fonts.families.secondary};
`;
