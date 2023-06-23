export function FormatFileName(
  name: string,
  size = 20,
  endMessage?: string
): string {
  if (name.length > size) {
    const splitted = name.split('.')
    const lastIndex = splitted[splitted.length - 1]

    const substr = name.substring(0, size)

    return `${substr}...${endMessage || lastIndex}`
  }

  return name
}

export const FirstCharacterUppercase = (text: string): string => {
  const splitted = text.split('')

  if (splitted.length > 1) {
    const first = splitted[0]

    splitted.shift()

    return first.toUpperCase().concat(splitted.join(''))
  }

  return text.toUpperCase()
}
