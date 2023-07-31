// libs
import {
  Box,
  Typography,
  MenuItem,
  InputAdornment,
  TextFieldProps
} from '@mui/material'

// lib
import { useTheme } from 'lib/theme'
import { MaskApplier } from 'lib/masks'
import { ComposeTextStyles } from '../../texts/Text'

import { FieldProps, SelectFieldItem } from './types'

export function useCompose({
  maxLength,
  isRequired,
  regex,
  selectItems,
  label,
  fullWidth = true,
  mask,
  inputProps,
  forceProps,
  startAdornment,
  endAdornment,
  ...props
}: FieldProps) {
  const { colors } = useTheme()

  const start = startAdornment ? (
    <InputAdornment position="start">{startAdornment}</InputAdornment>
  ) : undefined
  const end = endAdornment ? (
    <InputAdornment position="end">{endAdornment}</InputAdornment>
  ) : undefined

  // called when 'regex' props is defined and block characters to be pressed
  const handleBlockCharacters = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    const key: string = evt.key
    const currentValue = String(props.value || '')

    // sempre permitir backspace
    if (key !== 'Backspace' && key.length === 1 && !evt.ctrlKey) {
      // verificação de max length
      if ((maxLength || currentValue.length + 1) > currentValue.length) {
        // verificação de regex
        if (regex) {
          const keyReplaced = String(evt.key).replace(regex, '')
          if (keyReplaced === '') return evt.preventDefault()
        }
      } else return evt.preventDefault()
    }
  }

  // throw the next state to out-of-component
  const handleChangeOut = (value: string | SelectFieldItem) => {
    if (props.onChange) {
      if (mask && typeof value === 'string') {
        const removedMask = value.replace(/[^0-9]/gi, '')
        const parsed = MaskApplier(removedMask, mask)
        return props.onChange(parsed as any, props.name)
      }

      props.onChange(value as any, props.name)
    }
  }

  // manage the native-field-event-value and parse it to the next state
  const handleChangeIn = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const evtValue = evt.target.value as any

    if (typeof selectItems === 'object') {
      const parsedEvtValue: SelectFieldItem | undefined = evtValue

      if (parsedEvtValue) handleChangeOut(parsedEvtValue)
    } else {
      const parsedEvtValue = String(evtValue || '')

      handleChangeOut(parsedEvtValue)
    }
  }

  // called when a 'ctrl + v' is pressed or when the 'paste' option is right-clicked, make the same as a onPress + onChange process
  const handlePaste = (evt: React.ClipboardEvent<HTMLDivElement>) => {
    if (selectItems) return evt.preventDefault()

    const evtData = evt.clipboardData.getData('text')
    if (!evtData) return evt.preventDefault()

    if (maxLength) {
      if (String(evtData).length > maxLength) return evt.preventDefault()
    }

    if (regex) {
      const parsed = String(evtData).replace(regex, '')
      if (!parsed) {
        return evt.preventDefault()
      }

      if (parsed !== evtData) {
        handleChangeOut(parsed)
        return evt.preventDefault()
      }
    }
  }

  // render the select list-item when the 'selectItems' prop is defined
  function RenderMenu({ selectItems }: Pick<FieldProps, 'selectItems'>) {
    if (!selectItems) return <Box data-testid="test-renderMenuInField" />

    return (
      <Box data-testid="test-renderMenuInField">
        {selectItems.map((selectItem, key) => (
          <MenuItem key={key} value={selectItem.value}>
            {selectItem.label}
          </MenuItem>
        ))}
      </Box>
    )
  }

  // render the label with a red '*' when the 'isRequired' prop is defined
  function RenderLabel({ label }: Pick<FieldProps, 'label'>) {
    return (
      <Box display="flex" data-testid="test-renderLabelInField">
        {label}
        <Box color={colors.error}>*</Box>
      </Box>
    )
  }

  const fieldLogic: TextFieldProps = {
    InputLabelProps: { shrink: true },
    label: isRequired ? <RenderLabel label={label} /> : label,

    variant: 'standard',
    fullWidth,
    color: 'secondary' as any,
    ...props,

    InputProps: {
      startAdornment: start,
      endAdornment: end,
      ...inputProps
    } as any,
    ...(forceProps as any),
    select: Boolean(selectItems),
    SelectProps: {
      renderValue: selectItems
        ? RenderSelectItem(props.value, selectItems, props.placeholder)
        : undefined
    },
    onKeyPress: regex ? handleBlockCharacters : undefined,
    children: selectItems ? (
      <RenderMenu selectItems={selectItems} />
    ) : undefined,
    type: 'text',
    onChange: handleChangeIn,
    onPaste: handlePaste,
    value: props.value || ''
  }

  return {
    fieldLogic
  }
}

//? https://github.com/mui/material-ui/issues/11069
function RenderSelectItem(
  value: any,
  options: SelectFieldItem[] = [],
  placeholder?: string
) {
  const nonValue = value === 'undefined'

  return function RenderElement(selected: any) {
    const nonSelected = selected === 'undefined'

    if ((nonSelected || nonValue) && Boolean(placeholder))
      return (
        <Typography style={ComposeTextStyles({ color: 'placeholder' })}>
          {placeholder}
        </Typography>
      )

    if (value && options)
      return (
        <Typography>
          {options.find((item) => item.value === selected)?.label || null}
        </Typography>
      )
    else return null
  }
}
