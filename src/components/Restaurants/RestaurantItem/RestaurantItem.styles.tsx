import styled from 'styled-components/native';
import { Card as RNPCard } from 'react-native-paper';

export const Card = styled(RNPCard)`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled(Card.Cover)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Rating = styled.View<{ rating: number }>`
  justify-content: center;
  width: ${({ theme, rating }) => theme.sizes.lg * rating}px;
  overflow: hidden;
`;
