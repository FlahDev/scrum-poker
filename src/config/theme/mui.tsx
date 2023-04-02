// libs
import { Children, useMemo } from 'react'
import { createTheme, Theme, ThemeProvider } from '@mui/material'

// lib
import { useTheme } from 'lib/theme'

export function MuiProvider({ children }: Children) {
  const theme = useTheme()

  const muiTheme = useMemo<Theme>(() => {
    return createTheme({
      palette: {
        primary: { main: theme.colors.primary },
        secondary: { main: theme.colors.secondary },
        success: { main: theme.colors.success },
        error: { main: theme.colors.error }
      },
      typography: {
        allVariants: {
          fontFamily: 'Inter'
        },
        button: {
          textTransform: 'none',
          fontSize: 14,
          fontWeight: 600
        }
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            elevation8: {
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }
          }
        }
      }
    })
  }, [theme.currentTheme])

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}
