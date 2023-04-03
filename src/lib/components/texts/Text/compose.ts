// libs
import { useMemo } from 'react'

// lib
import { useTheme } from 'lib/theme'

import { TextStyles, TextProps } from './types'

export function useComposeTextStyles(
  {
    color,
    size,
    weight,
    cursor,
    customColor,
    decoration,
    extraStyles,
    fullWidth,
    breakWords,
    italic,
    centerX,
    centerY
  }: TextStyles,
  colors: ReturnType<typeof useTheme>['colors']
) {
  const dftStyles: Record<string, any> = {}

  if (color) dftStyles.color = colors[color]
  if (size) dftStyles.fontSize = `${size}px`
  if (weight) dftStyles.fontWeight = weight * 100
  if (cursor) dftStyles.cursor = cursor
  if (customColor) dftStyles.color = customColor
  if (decoration) dftStyles.textDecoration = decoration
  if (fullWidth) dftStyles.width = '100%'
  if (breakWords) dftStyles.wordBreak = 'break-all'
  if (italic) dftStyles.fontStyle = 'italic'
  if (centerX) dftStyles.textAlign = 'center'
  if (centerY) dftStyles.verticalAlign = 'middle'

  if (extraStyles)
    return {
      ...dftStyles,
      ...extraStyles
    }

  return dftStyles
}

export function useCompose({
  color,
  size,
  weight,
  cursor,
  customColor,
  decoration,
  extraStyles,
  style,
  fullWidth,
  breakWords,
  italic,
  centerX,
  centerY
}: TextProps) {
  const { colors } = useTheme()

  const parsedStyles = useComposeTextStyles(
    {
      color,
      size,
      weight,
      cursor,
      customColor,
      decoration,
      extraStyles,
      fullWidth,
      breakWords,
      italic,
      centerX,
      centerY
    },
    colors
  )

  const resolvedStyles = useMemo(() => {
    if (style) return { ...style, ...parsedStyles }

    return { ...parsedStyles }
  }, [parsedStyles, style])

  return { resolvedStyles }
}
