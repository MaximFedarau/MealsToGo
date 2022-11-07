import styled from 'styled-components/native';
import { Card as RNPCard } from 'react-native-paper';

import { COLORS } from 'constants/colors';

export const Card = styled(RNPCard)`
  margin: ${({ theme }) =>
    `${theme.sizes.sm / 2}px ${theme.sizes.sm / 2}px ${theme.sizes.lg}px`};
  border-radius: ${({ theme }) => theme.sizes.md}px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Icon = styled(Card.Cover)<{ isOpen?: boolean }>`
  margin: ${({ theme }) => theme.sizes.sm}px;
  border-radius: ${({ theme }) => theme.sizes.md}px;
  background-color: ${COLORS.white};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)};
`;

export const Rating = styled.View<{ rating: number }>`
  height: ${({ theme }) => theme.sizes.xl}px;
  width: ${({ theme, rating }) => theme.sizes.xl * rating}px;
  margin-right: ${({ theme }) => theme.sizes.sm / 4}px; /* gap */
  padding-top: ${({ theme }) =>
    theme.sizes.xl / theme.sizes.md}px; /* centering icon */
  overflow: hidden;
`;
