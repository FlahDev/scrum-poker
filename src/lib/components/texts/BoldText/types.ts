// libs
import { TypographyProps } from '@mui/material'

import { TextStyles, TextProps } from '../Text'

type BoldTextTypographyProps = Omit<
  TypographyProps,
  'children' | 'component' | 'color'
> &
  TextProps & {
    href?: string
  }

export interface BoldTextProps extends TextStyles {
  text: string
  bold: string
  textProps?: BoldTextTypographyProps
  boldProps?: BoldTextTypographyProps
  weight?: TextStyles['weight']
}
