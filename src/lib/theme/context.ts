// libs
import { createContext } from 'react'

import { ColorsTheme, ThemeOptions, FontTheme } from './types'
import { WhiteColorsTheme } from './colors'

interface ThemeContext {
  colors: ColorsTheme
  currentTheme: ThemeOptions
  changeTheme: (theme: ThemeOptions) => void
  font: FontTheme
}

const themeContextInitialState: ThemeContext = {
  colors: WhiteColorsTheme,
  currentTheme: 'LIGHT',
  changeTheme: () => {
    return
  },
  font: {
    family: 'Roboto',
    color: WhiteColorsTheme.textPrimary,
    size: '16px'
  }
}

const ThemeContext = createContext<ThemeContext>(themeContextInitialState)
ThemeContext.displayName = 'ThemeContext'

export { ThemeContext }
