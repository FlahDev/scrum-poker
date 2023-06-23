// libs
import { StandardTextFieldProps, TextFieldProps } from '@mui/material'

// lib
import { MaskMapType } from 'lib/masks'

export interface SelectFieldItem<T = undefined | string> {
  value: T extends undefined ? string : T
  label: string
  groupName?: string
}

interface StringFieldProps {
  onChange?: (value: string, name: string) => void
  selectItems?: undefined
}

interface ArrayFieldProps {
  selectItems: SelectFieldItem[]
  onChange?: (value: SelectFieldItem, name: string) => void
}

type ExtendableProps = Omit<
  StandardTextFieldProps,
  'select' | 'children' | 'inputProps' | 'onChange'
>

type PropsConcat = ExtendableProps & (StringFieldProps | ArrayFieldProps)

export type FieldProps = PropsConcat & {
  name: string
  value?: SelectFieldItem | string
  isRequired?: boolean
  fullWidth?: boolean
  mask?: MaskMapType
  regex?: RegExp
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  CustomField?: (props: TextFieldProps) => JSX.Element
  maxLength?: number
  inputProps?: TextFieldProps['inputProps']
  forceProps?: TextFieldProps['inputProps']
  useNull?: boolean
}

export type ExtendableTextFieldProps = Omit<
  FieldProps,
  'value' | 'onChange' | 'selectItems'
> &
  StringFieldProps & {
    value?: string | undefined
  }
