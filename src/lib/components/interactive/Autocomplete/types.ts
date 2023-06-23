import { FieldProps, SelectFieldItem } from '../Field'

export interface AutocompleteProps
  extends Omit<
    FieldProps,
    'autoComplete' | 'value' | 'onChange' | 'selectItems'
  > {
  filterMode?: 'linear' | 'search'
  bottomBar?: boolean
  group?: boolean
  selectItems: SelectFieldItem[]
  value?: SelectFieldItem
  onChange?: (value: SelectFieldItem, name: string) => void
}
