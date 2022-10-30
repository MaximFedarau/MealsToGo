// ! Important
import 'styled-components/native';

import { COLORS } from 'constants/colors';
import { FONTS } from 'constants/fonts';
import { MARGINS } from 'constants/margins';
import { PADDINGS } from 'constants/paddings';

/* Custom type for styled-components/native DefaultTheme */
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof COLORS;
    fonts: typeof FONTS;
    margins: typeof MARGINS;
    paddings: typeof PADDINGS;
  }
}
