// lib
import { SelectFieldItem } from 'lib/components/interactive/Field'

export interface UseMuiFormProps {
  schema?: any
}

type OnChangeText = (value: string, name: string) => void
type OnChangeSelect = (value: SelectFieldItem, name: string) => void

interface ConstructField {
  helperText?: string
  error?: boolean
  name: string
}

export interface ConstructTextField extends ConstructField {
  onChange?: OnChangeText
  value?: string
}

export interface ConstructSelectField extends ConstructField {
  onChange?: OnChangeSelect
  value?: SelectFieldItem
}
