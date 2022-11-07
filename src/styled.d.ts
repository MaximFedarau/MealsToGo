// ! Important
import 'styled-components/native';

import { COLORS } from 'constants/colors';
import { FONTS } from 'constants/fonts';
import { SIZES } from 'constants/sizes';

/* Custom type for styled-components/native DefaultTheme */
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    fonts: typeof FONTS;
    sizes: typeof SIZES;
  }
}
