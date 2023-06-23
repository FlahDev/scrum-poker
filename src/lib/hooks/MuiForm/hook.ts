// libs
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// lib
import { SelectFieldItem } from 'lib/components/interactive/Field'

import {
  UseMuiFormProps,
  ConstructSelectField,
  ConstructTextField
} from './types'

export function useMuiForm<Obj extends Record<string, any>>(
  params?: UseMuiFormProps
) {
  type FieldName = keyof Obj & string

  const { schema } = params || {}

  const {
    register,
    handleSubmit: nativeSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
    ...props
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    reValidateMode: 'onBlur',
    mode: 'onBlur'
  })

  // atualização de estado forçada, com validação de valor != null e undefined
  const setIsValid = (obj: Partial<Obj>, validate = false) => {
    Object.keys(obj).forEach((key) => {
      const value = obj[key]

      if (value !== null && value !== undefined) {
        const resolveValidations = validate
          ? { shouldValidate: true }
          : undefined
        setValue(key, value, resolveValidations)
      }
    })
  }

  // to text fields
  const useField = (name: FieldName): ConstructTextField => {
    const registered = register(name)

    const error = errors[name]
    const errMessage = error?.message ? String(error.message) : ''

    return {
      ...registered,
      error: Boolean(error),
      helperText: errMessage,
      value: watch(name),
      onChange: (value: string) => setValue(name, value as any)
    }
  }

  // to specific fields (e.g. date and time)
  const useCustomField = (name: FieldName) => {
    const registered = register(name)

    const error = errors[name]
    const errMessage = error?.message ? String(error.message) : ''

    return {
      ...registered,
      error: Boolean(error),
      helperText: errMessage,
      value: watch(name),
      onChange: undefined,
      onBlur: (evt: any) => {
        setValue(name, evt?.target?.value as any, {
          shouldValidate: true
        })
      }
    }
  }

  // to select and autocomplete
  const useSelectField = (name: FieldName): ConstructSelectField => {
    const { value, ...construct } = useField(name)

    const parsedValue: SelectFieldItem | undefined = value as any

    return {
      ...construct,
      value: parsedValue,
      onChange: (value: SelectFieldItem | undefined) =>
        setValue(name, value as any)
    }
  }

  // a useState like inside hook form
  function useFormState<T>(
    name: FieldName,
    initialValue: T
  ): [repository: T, increment: (value: T) => void] {
    // add no escopo do hook form
    useField(name)
    // vinculo imutável
    const repository: T = watch(name) || (initialValue as any)
    // setValue
    const increment = (value: T) => setIsValid({ [name]: value } as any)
    // necessário para a renderização inicial
    return [repository || initialValue, increment]
  }

  // to checkbox, radio and switch
  const useBooleanField = (name: FieldName, dftValue?: boolean) => {
    const watchValue = watch(name)
    const value =
      dftValue !== undefined && watchValue === undefined ? dftValue : watchValue

    const isUndefined = value === undefined
    const err = errors[name]
    const resolveHelperText = err?.message ? String(err.message) : ''

    return {
      ...register(name),
      helperText: isUndefined ? resolveHelperText : '',
      error: isUndefined ? Boolean(err) : false,
      onChange: (evt: boolean) => setValue(name, evt as any),
      value
    }
  }

  // gets a array with keys, a array with no-keys and reset the fields
  const removeFieldsValue = (keys: string[], omit?: FieldName[]) => {
    const arr = omit || []
    keys.forEach((field) => {
      if (!arr.includes(field))
        setValue(field, '' as any, {
          shouldValidate: false,
          shouldDirty: true,
          shouldTouch: true
        })
    })
  }
  // use to reset fields in the form archive
  const resetFields = (
    fields: FieldName[] | FieldName | 'ALL',
    omit?: FieldName[] | FieldName
  ) => {
    const resolveProp = omit || []
    const resolvedOmit = Array.isArray(resolveProp)
      ? resolveProp
      : [resolveProp]

    if (Array.isArray(fields)) return removeFieldsValue(fields, resolvedOmit)

    if (fields === 'ALL') {
      const allValues: Obj = getValues() as any

      return removeFieldsValue(Object.keys(allValues), resolvedOmit)
    }

    return removeFieldsValue([fields], resolvedOmit)
  }

  const useWatch = <K extends FieldName>(field: K): Obj[K] =>
    watch(field as any)
  const useHasError = <K extends FieldName>(field: K): string | undefined => {
    return errors[field]?.message as any
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (
    exec: (evt: Obj) => void
  ): ReturnType<typeof nativeSubmit> => {
    return nativeSubmit(exec as any)
  }

  return {
    useField,
    useBooleanField,
    useCustomField,
    useFormState,
    useSelectField,
    useWatch,
    useHasError,
    handleSubmit,
    setIsValid,
    resetFields,
    isValid,
    native: {
      ...props,
      watch,
      errors,
      getValues,
      setValue
    }
  }
}
