// libs
import { isValid } from 'date-fns'

// shared

import { FormatTimeToAmerican } from 'shared/utils/parsers/date'

interface FieldMask {
  format?: string
  character?: string
  prefix?: string
  maxLength?: number
  isMoney?: boolean
}

export const TimeMaskImplicit = '##:##'

export const TimeAutoFill: FieldMask = {
  format: TimeMaskImplicit,
  character: '_'
}
export const TimeKeydownRegex = /[^\d:]*/
export const TimeRegex = /[0-2]\d:\d{2}/

export const isTimeValid = (value?: string, changeOrder = false): boolean => {
  if (!value) return false

  const parsed = String(value)

  if (!TimeRegex.test(parsed)) return false

  const splitted = parsed.split(':')

  if (splitted.length !== 2) return false

  if (+splitted[0] > 23) return false
  if (+splitted[1] > 59) return false

  let dateParsed: Date
  if (changeOrder) dateParsed = FormatTimeToAmerican(parsed)
  else dateParsed = new Date(value)

  return isValid(dateParsed)
}
