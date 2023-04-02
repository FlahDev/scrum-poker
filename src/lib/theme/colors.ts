import { ColorsTheme, FontTheme } from './types'

export const WhiteColorsTheme: ColorsTheme = {
  // primary
  primary: '#E04712',
  primaryDarker: '#B8380C',
  backgroundPrimary: '#F1F5F7',
  pastelPrimary: '#FCF4F4',
  buttonPrimary: '#E04712',
  // secondary
  secondary: '#144882',
  secondaryLighter: '#0081B4',
  pastelSecondary: '#E8F7FF',
  // default
  white: '#fff',
  black: '#333',
  // status
  success: '#00C54F',
  pastelSuccess: '#CCF3DC',
  error: '#E25050',
  pastelError: '#FFEAEA',
  // grey
  grey: '#9E9E9E',
  placeholder: '#d4d8d9',
  disabled: '#dfdfdf',
  // text
  textPrimary: '#77787B'
}

export const DarkColorsTheme: ColorsTheme = {
  ...WhiteColorsTheme,
  white: WhiteColorsTheme.black,
  black: WhiteColorsTheme.white
}

export const FontThemeSettings: FontTheme = {
  color: WhiteColorsTheme.textPrimary,
  family: 'Inter, sans-serif',
  size: '14px'
}
