// libs
import { useMemo, useEffect, useState } from 'react'

import { SelectFieldItem } from '../Field'

import { AutocompleteProps } from './types'

export function useCompose({
  selectItems = [],
  onChange,
  value: outValue,
  ...props
}: Omit<AutocompleteProps, 'disabled' | 'bottomBar' | 'group'>) {
  const [inputValue, setInputValue] = useState<string>('')

  const options = useMemo(() => {
    return [...selectItems]
  }, [selectItems])

  // o evento onchange do autocomplete eh tratado e passado pra fora
  const handleChangeAC = (_: any, nextValue: any | null) => {
    const parsed: SelectFieldItem = nextValue
    if (onChange) onChange(parsed as any, props.name)
  }

  const acValue = useMemo<SelectFieldItem | null>(() => {
    if (outValue) {
      return (
        selectItems.find((option) => option.value === outValue.value) || null
      )
    }

    return null
  }, [outValue, selectItems])

  useEffect(() => {
    const currentValue = acValue?.label
    if (currentValue) setInputValue(currentValue)
  }, [acValue])

  const handleGroup = (evt: any) => {
    const parsed: SelectFieldItem = evt

    if (parsed?.groupName) return parsed.groupName

    return defaultGroupName
  }

  return {
    options,
    acValue,
    inputValue,
    handleGroup,
    setInputValue,
    handleChangeAC
  }
}

const defaultGroupName = 'Sem grupo'

export function RemoveFromObject<
  T extends Record<any, any>,
  R extends keyof T & string
>(obj: T, array: R[]): { [K in Exclude<keyof T, R>]: T[K] } {
  const validKeys = Object.keys(obj).filter(
    (item) => !array.includes(item as R)
  )
  return validKeys.reduce(
    (prev, next) => ({ ...prev, ...{ [next]: obj[next] } }),
    {}
  ) as any
}
