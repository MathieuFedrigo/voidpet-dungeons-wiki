import "@emotion/react";

import { getTheme } from ".";

type ThemeType = ReturnType<typeof getTheme>;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
