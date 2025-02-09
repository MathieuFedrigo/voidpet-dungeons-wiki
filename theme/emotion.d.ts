import '@emotion/react'
import { colors } from './colors'
import { getTheme } from '.'

type ThemeType = ReturnType<typeof getTheme>

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
