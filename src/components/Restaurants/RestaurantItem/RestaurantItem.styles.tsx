import styled from 'styled-components/native';
import { Card as RNPCard } from 'react-native-paper';

import { DefaultTheme } from 'styled-components/native';

export const Card = styled(RNPCard)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled(Card.Cover)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Rating = styled.View<{ rating: number; theme: DefaultTheme }>`
  justify-content: center;
  overflow: hidden;
  width: ${({ theme, rating }) => theme.margins.lg * rating}px;
`;
