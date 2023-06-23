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
        MuiTextField: {
          styleOverrides: {
            root: {
              paddingRight: '10px',
              fontFamily: 'Inter',
              minWidth: '200px'
            }
          }
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: theme.colors.textPrimary,
              fontSize: '14px',
              paddingLeft: '5px'
            },
            shrink: {
              transform: 'translate(0, -2.5px) scale(1)'
            },
            outlined: {
              color: theme.colors.grey
            },
            asterisk: {
              color: theme.colors.error
            }
          }
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              fontFamily: 'Inter',
              border: `1px solid ${theme.colors.grey}`,
              color: theme.colors.textPrimary,
              padding: '.2rem',
              paddingRight: '5px',
              paddingLeft: '10px',
              borderRadius: '4px',
              '&::before': {
                width: '0'
              }
            },
            inputMultiline: {
              height: '100%'
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              border: '1px solid #D4D8D9'
            },
            input: {
              padding: '.5rem 0'
            },
            adornedEnd: {
              paddingRight: '0'
            },
            notchedOutline: {
              border: 'none'
            }
          }
        },
        MuiStepper: {
          styleOverrides: {
            root: {
              padding: 'none'
            }
          }
        },
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
