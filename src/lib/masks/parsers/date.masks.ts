// libs
import { isValid } from 'date-fns'

// shared
import { FormatToAmerican } from 'shared/utils/parsers/date'

export const DateMaskImplicit = '##/##/####'

export const DateKeydownRegex = /[^\d/]*/
export const DateRegex = /[0-3]\d\/[0-3]\d\/[1-2][0-5]\d{2}/ // allows to the next 500 years

export const isDateValid = (value?: string, changeOrder = false): boolean => {
  if (!value) return false

  const parsed = String(value)

  if (!DateRegex.test(parsed)) return false

  if (parsed.split('/').length !== 3) return false

  let dateParsed: Date
  if (changeOrder) dateParsed = FormatToAmerican(parsed)
  else dateParsed = new Date(value)

  return isValid(dateParsed)
}
