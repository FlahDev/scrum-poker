// libs
import { TypographyProps } from '@mui/material'

// lib
import { ColorsOptions } from 'lib/theme'

export interface TextStyles {
  color?: ColorsOptions
  size?: number
  weight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  decoration?: 'underline' | 'overline' | 'none' | 'line-through'
  cursor?: 'default' | 'pointer' | 'help'
  customColor?: string
  extraStyles?: Record<string, any>
  fullWidth?: boolean
  breakWords?: boolean
  italic?: boolean
  centerX?: boolean
  centerY?: boolean
  align?: 'left' | 'right' | 'center' | 'justify'
}

export type TextProps = TextStyles & Omit<TypographyProps, 'color'>
