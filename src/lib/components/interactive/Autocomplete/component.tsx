// libs
import { Box } from '@mui/material'

import { Field } from '../Field'

import { AutocompleteProps } from './types'
import { useCompose, RemoveFromObject } from './compose'
import { StyledComponent } from './styles'

export function Autocomplete({
  selectItems = [],
  onChange,
  value,
  disabled = false,
  bottomBar = false,
  group = false,
  ...props
}: AutocompleteProps) {
  const {
    options,
    acValue,
    handleChangeAC,
    inputValue,
    setInputValue,
    handleGroup
  } = useCompose({
    selectItems,
    onChange,
    value,
    ...props
  })

  return (
    <Box data-testid="test-autocomplete">
      <StyledComponent
        disablePortal
        bottomBar={bottomBar}
        options={options}
        renderInput={(params) => {
          const { InputProps, ...rest } = RemoveFromObject(params, [
            'InputLabelProps'
          ])
          return (
            <Field
              forceProps={rest}
              inputProps={InputProps}
              {...(props as any)}
              value={inputValue}
              onBlur={undefined} // precisa ser undefined pq o evt seta como value do hook form o value do blur
            />
          )
        }}
        getOptionLabel={(option: any) => option.label}
        autoHighlight
        renderOption={(liProps: any, option: any) => (
          <li key={option.value} {...liProps}>
            {option.label}
          </li>
        )}
        // o valor do autocomplete eh controlado fora, mas tratado aqui
        value={acValue}
        onChange={handleChangeAC}
        // o valor interno do input eh controlado aqui
        inputValue={inputValue}
        onInputChange={(_: any, newInputValue: any) => {
          setInputValue(newInputValue)
        }}
        disabled={disabled}
        clearOnBlur
        groupBy={group ? handleGroup : undefined}
        data-testid="test-autocompleteField"
      />
    </Box>
  )
}
