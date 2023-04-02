// libs
import { Children } from 'react'
import { ThemeProvider, Global, css } from '@emotion/react'

import { useTheme, ColorsTheme, FontTheme } from 'lib/theme'

export function EmotionProvider({ children }: Children) {
  const theme = useTheme()

  return (
    <ThemeProvider theme={{ colors: theme.colors, font: theme.font }}>
      <Global styles={CSSReset(theme.colors, theme.font)} />
      {children}
    </ThemeProvider>
  )
}

const CSSReset = (colors: ColorsTheme, fonts: FontTheme) => css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.backgroundPrimary};
  }

  body,
  html,
  #root {
    font-family: ${fonts.family};
    color: ${fonts.color};
    font-size: ${fonts.size};
  }
`
