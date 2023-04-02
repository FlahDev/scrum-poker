// libs
import { Children, useState, useMemo } from 'react'

import { ThemeContext } from './context'

import { ColorsTheme, ThemeOptions } from './types'

import { WhiteColorsTheme, DarkColorsTheme, FontThemeSettings } from './colors'

export function ThemeProvider({ children }: Children) {
  const [theme, setTheme] = useState<ThemeOptions>('LIGHT')

  const themeColors = useMemo<ColorsTheme>(() => {
    switch (theme) {
      case 'LIGHT':
        return WhiteColorsTheme
      case 'DARK':
        return DarkColorsTheme
      default:
        return WhiteColorsTheme
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        changeTheme: setTheme,
        currentTheme: theme,
        colors: themeColors,
        font: FontThemeSettings
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
