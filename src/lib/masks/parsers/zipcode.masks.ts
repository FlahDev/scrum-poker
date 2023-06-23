export const ZipcodeMaskImplicit = '#####-###'

export const ZipCodeRegex = /\d{5}-\d{3}/
export const ZipCodeKeydownRegex = /[^\d-]*/gi

export const isZipcodeValid = (zipcode?: string): boolean => {
  if (!zipcode) return false

  if (zipcode.length !== 9) return false

  if (!ZipCodeRegex.test(zipcode)) return false

  zipcode = zipcode.replace(/[-]*/gi, '')

  const char = zipcode[0]
  if (zipcode.split('').every((letter) => letter === char)) return false

  return true
}
