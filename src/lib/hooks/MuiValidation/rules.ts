// libs
import * as yup from 'yup'

// lib
import { isPhoneAllowed } from 'lib/masks'

import { RulesArguments } from './types'

export const phone = (
  errMessage = 'Telefone em formato inválido',
  args?: RulesArguments
): yup.StringSchema => {
  const schema = yup
    .string()
    .test('phone test case', errMessage, (value): boolean => {
      const parsedValue = String(value || '')

      if (args?.notRequired && !value) return true

      if (parsedValue) return isPhoneAllowed(parsedValue)

      return false
    })

  return schema
}

export const id = (
  errMessage = 'Valor inválido selecionado',
  args?: RulesArguments
): yup.StringSchema => {
  const schema = yup
    .string()
    .test('id test case', errMessage, (value): boolean => {
      const parsedValue = String(value || '')

      if (args?.notRequired && !value) return true

      if (parsedValue) {
        const numberParsed = +parsedValue
        if (typeof numberParsed !== 'number') return false

        if (numberParsed <= 0) return false

        return true
      }

      return false
    })

  return schema
}

export const text = (
  errMessage = 'Insira um texto válido',
  args?: RulesArguments
): yup.StringSchema => {
  const schema = yup
    .string()
    .test('phone test case', errMessage, (value): boolean => {
      const parsedValue = String(value || '')

      if (args?.notRequired && !value) return true

      if (parsedValue) return parsedValue.length < 200

      return false
    })

  return schema
}
