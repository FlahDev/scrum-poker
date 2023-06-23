// types
import {
  CnpjMaskImplicit,
  PhoneMaskImplicit,
  MoneyMaskImplicit,
  CpfMaskImplicit,
  ZipcodeMaskImplicit,
  PhoneMaskImplicitAlternative
} from './parsers'

const replaceCharps = (value: string, pattern: string): string => {
  const formatted: string[] = []
  const patternArray = pattern.split('')
  const valueArray = value.split('')
  const maxIndex =
    patternArray.length > valueArray.length
      ? patternArray.length
      : valueArray.length

  let valueIndex = 0
  for (let i = 0; i < maxIndex; i++) {
    const currentPattern = patternArray[i]
    if (currentPattern) {
      if (currentPattern !== '#') formatted.push(currentPattern)
      else {
        const currentValue = valueArray[valueIndex]
        if (currentValue) formatted.push(currentValue)
        valueIndex++
      }
    }
  }

  return formatted.join('')
}

export const ParseCnpj = (value: string) =>
  ResolveNonNumber(replaceCharps(value, CnpjMaskImplicit))

export const ParsePhone = (value: string) => {
  value = value.replace(/\s/g, '')

  let parsed: string

  if (value.length === 10)
    parsed = replaceCharps(value, PhoneMaskImplicitAlternative)
  else parsed = replaceCharps(value, PhoneMaskImplicit)

  return ResolveNonNumber(parsed)
}

export const ParseMoney = (value: string) =>
  ResolveNonNumber(MoneyMaskImplicit(value))

export const ParseCpf = (value: string) =>
  ResolveNonNumber(replaceCharps(value, CpfMaskImplicit))

export const ParseZipcode = (value: string) =>
  ResolveNonNumber(replaceCharps(value, ZipcodeMaskImplicit))

function ResolveNonNumber(value: string): string {
  const lastChar = value[value.length - 1]

  if (value === '') return value

  if (/[\d.-/,]/g.test(lastChar)) return value

  const array = value.split('')
  array.pop()

  return ResolveNonNumber(array.join(''))
}

export const MaskMap = {
  phone: ParsePhone,
  money: ParseMoney,
  cpf: ParseCpf,
  cnpj: ParseCnpj,
  zipcode: ParseZipcode
}

export type MaskMapType = keyof typeof MaskMap & string
