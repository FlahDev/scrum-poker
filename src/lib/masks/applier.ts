// types
import { DefaultReplaceRegex } from './parsers/common.mask'

import {
  ParseCnpj,
  ParsePhone,
  ParseMoney,
  ParseCpf,
  ParseZipcode,
  MaskMapType
} from './resolve'

export const MaskApplier = (value: string, mask: MaskMapType): string => {
  value = String(value || '').replace(DefaultReplaceRegex, '')

  switch (mask) {
    case 'cnpj':
      return ParseCnpj(value)

    case 'phone':
      return ParsePhone(value)

    case 'money':
      return ParseMoney(value)

    case 'cpf':
      return ParseCpf(value)

    case 'zipcode':
      return ParseZipcode(value)

    default:
      return value
  }
}
export const MaskApplierInvalids = (
  value: string | null | undefined,
  mask: MaskMapType
): string => {
  if (!value) return ''

  return MaskApplier(value, mask)
}

export const DynamicMask = (mask: MaskMapType, evt: any): string => {
  const value = evt?.target?.value || null
  if (value) {
    const parsed = String(value)
    return MaskApplier(parsed, mask)
  }
  return ''
}
