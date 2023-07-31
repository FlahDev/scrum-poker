import '@emotion/react'

// lib
import { ColorsTheme, FontTheme } from 'lib/theme'

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsTheme
    font: FontTheme
  }
}
