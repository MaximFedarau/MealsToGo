import styled, { DefaultTheme } from 'styled-components/native';

export const DefaultText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.lg}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RestaurantTitle = styled(DefaultText)`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.families.primary};
`;

export const RestaurantAddress = styled(DefaultText)`
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.fonts.families.secondary};
`;
