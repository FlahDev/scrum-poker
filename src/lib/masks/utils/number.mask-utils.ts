// receive a string and return a number or undefined if the string is empty
export const NumberOrUndefined = (value?: string) => {
  const parsedValue = String(value)

  if (!parsedValue) return undefined

  return +parsedValue
}
