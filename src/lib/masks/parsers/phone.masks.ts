// libs
import { validatePhone } from 'validations-br'

export const PhoneMaskImplicit = '(##) #####-####'
export const PhoneMaskImplicitAlternative = '(##) ####-####'

export const PhoneKeydownRegex = /[^\d() -]*/
export const PhoneRegex = /(\(?\+?\d{2}\)?)? ?\(\d{2}\) ?\d{4}\d?-\d{4}/
export const PhoneRegexAlternative =
  /(\(?\+?\d{2}\)?)? ?\(\d{2}\) ?\d{4}?-\d{4}/

export const isPhoneValid = (value?: string): boolean => {
  if (!value) return false

  const parsed = String(value)

  if (!PhoneRegexAlternative.test(parsed) && !PhoneRegex.test(parsed))
    return false

  return true
}

export const isPhoneAllowed = (value: string): boolean => {
  if (value) {
    const parsed = String(value)
    return isPhoneValid(parsed) && validatePhone(parsed)
  }

  return false
}
