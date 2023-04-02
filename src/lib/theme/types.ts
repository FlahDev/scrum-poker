export interface ColorsTheme {
  // primary
  primary: string
  primaryDarker: string
  backgroundPrimary: string
  pastelPrimary: string
  buttonPrimary: string
  // secondary
  secondary: string
  secondaryLighter: string
  pastelSecondary: string
  // status
  success: string
  pastelSuccess: string
  error: string
  pastelError: string
  // default
  white: string
  black: string
  // text
  textPrimary: string
  // greys
  grey: string
  placeholder: string
  disabled: string
}

export type ThemeOptions = 'LIGHT' | 'DARK'

export type ColorsOptions = keyof ColorsTheme & string

export interface FontTheme {
  family: string
  color: string
  size: string
}
