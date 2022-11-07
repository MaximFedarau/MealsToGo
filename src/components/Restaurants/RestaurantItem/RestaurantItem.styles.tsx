import styled from 'styled-components/native';
import { Card as RNPCard } from 'react-native-paper';

import { COLORS } from 'constants/theme/colors';

export const Card = styled(RNPCard)`
  margin: ${({ theme }) =>
    `${theme.sizes.sm / 2}px ${theme.sizes.sm / 2}px ${theme.sizes.md}px`};
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
