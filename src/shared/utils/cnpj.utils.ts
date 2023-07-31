const CnpjRegex = /\d{2}.?\d{3}.?\d{3}\/?\d{4}-?\d{2}/

function cnpjDigitValidation(cnpj = '') {
  cnpj = cnpj?.replace(/[^\d]+/g, '') || ''

  if (cnpj === '') {
    return false
  }

  if (cnpj.length !== 14) return false

  const char = cnpj[0]
  if (cnpj.split('').every((eChar) => eChar === char)) return false

  let size = cnpj.length - 2
  let numbers = cnpj.substring(0, size)
  const digits = cnpj.substring(size)
  let sum = 0
  let pos = size - 7
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(0))) {
    return false
  }

  size = size + 1
  numbers = cnpj.substring(0, size)
  sum = 0
  pos = size - 7
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(1))) {
    return false
  }

  return true
}

export function isCnpjValid(cnpj?: string): boolean {
  if (!cnpj) return false

  if (CnpjRegex.test(cnpj)) return cnpjDigitValidation(cnpj)

  return false
}

export const CnpjMatrixRegex = /\d{2}.?\d{3}.?\d{3}\/?0001-?\d{2}/
export function isCnpjFromMatrix(cnpj?: string): boolean {
  if (!isCnpjValid(cnpj)) return false

  return CnpjMatrixRegex.test(String(cnpj || ''))
}
