// libs
import { useMemo } from 'react'

// lib
import { useTheme } from 'lib/theme'

import { useComposeTextStyles } from '../Text'

import { BoldTextProps } from './types'

export function useCompose({
  weight,
  text,
  bold,
  boldProps,
  textProps
}: BoldTextProps) {
  const { colors } = useTheme()

  const normal = text.replace(bold, '')
  const index = text.indexOf(bold)

  const boldStyles = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const parsed = useComposeTextStyles(
      {
        ...boldProps,
        weight: weight || boldProps?.weight
      },
      colors
    )

    const styleResolve = boldProps?.style ? { ...boldProps.style } : {}

    return {
      ...parsed,
      ...styleResolve
    }
  }, [boldProps, weight])

  const textStyles = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const parsed = textProps ? useComposeTextStyles(textProps, colors) : {}

    const styleResolve = textProps?.style ? { ...textProps.style } : {}

    return {
      ...parsed,
      ...styleResolve
    }
  }, [boldProps, weight])

  return {
    normal,
    index,
    boldStyles,
    textStyles
  }
}
