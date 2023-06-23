export const MoneyMaskImplicit = (value: string) => {
  const replaced = value.replace(/[^\d]/gi, '')

  const length = replaced.length

  const decimals = replaced.substring(length - 2)

  const spliced = replaced.substring(0, length - 2)

  // invertido para termos 1.234 e nao 4.321
  const array = spliced
    .split('')
    .reverse()
    .join('')
    .split(/(\d\d\d)/gi)

  const filtered = array.filter((item) => item.length > 0)

  const joined = filtered
    // necessario para termos 123 e nao 321
    .map((item) => item.split('').reverse().join(''))
    // revertendo o revers (lol)
    .reverse()
    .join('.')

  return `${joined},${decimals}`
}

export const MoneyKeydownRegex = /[^\d.,]*/
export const MoneyRegex = /(\d{1,3}\.)*\d{1,3},\d\d/g

export const isMoneyValid = (value?: string): boolean => {
  const parsed = String(value)
  return MoneyRegex.test(parsed)
}
