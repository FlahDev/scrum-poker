import { MaskApplier } from '../applier'

// receive a money-masked string and return a number without mask chars
export const parseMoneyToApi = (value: string): number => {
  const parsedValue = String(value || '0')

  const onlyNumberAndComma = parsedValue.replace(/[^\d^,]/gi, '')

  const parsedComma = onlyNumberAndComma.replace(',', '.')

  const parsedNumber = Number(parsedComma).toFixed(2)

  return +parsedNumber
}

// receive a number and return a money-masked string
export const parseApiNumberToFrontMoney = (value: number) => {
  const numberValue = +String(value || '0')

  const parsedValue = numberValue.toFixed(2)

  return MaskApplier(parsedValue, 'money')
}
