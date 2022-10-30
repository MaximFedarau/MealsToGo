import styled, { DefaultTheme } from 'styled-components/native';

export const DefaultText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const RestaurantTitle = styled(DefaultText)`
  padding: 16px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.fonts.primary};
`;
