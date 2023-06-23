export const CpfMaskImplicit = '###.###.###-##'

export const CpfRegex = /\d{3}.?\d{3}.?\d{3}-?\d{2}/
export const CpfKeydownRegex = /[^\d.-]*/
export const CpfReplaceRegex = /[^\d]*/g

export function cpfDigitValidation(cpf = '') {
  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf == '') return false

  if (cpf.length !== 11) return false

  const char = cpf[0]
  if (cpf.split('').every((eChar) => eChar === char)) return false

  // Valida 1o digito
  let add = 0

  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)

  let rev = 11 - (add % 11)

  if (rev == 10 || rev == 11) rev = 0
  if (rev != parseInt(cpf.charAt(9))) return false

  // Valida 2o digito
  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)

  rev = 11 - (add % 11)

  if (rev == 10 || rev == 11) rev = 0
  if (rev != parseInt(cpf.charAt(10))) return false

  return true
}

export function isCpfValid(cpf?: string): boolean {
  if (!cpf) return false

  if (CpfRegex.test(cpf)) return cpfDigitValidation(cpf)

  return false
}

export const CpfMatrixRegex = /\d{2}.?\d{3}.?\d{3}\/?0001-?\d{2}/
