import { atom } from 'jotai';

import { Restaurant } from 'types/restaurants';

export const restaurantsAtom = atom<Restaurant[]>([]);
