// libs
import { useMemo } from 'react'

// lib
import { useTheme } from 'lib/theme'

import { ComposeTextStyles } from '../Text'

import { BoldTextProps } from './types'

export function useCompose({
  weight,
  text,
  bold,
  boldProps = {},
  textProps = {},
  ...props
}: BoldTextProps) {
  const { colors } = useTheme()

  const normal = text.replace(bold, '')
  const index = text.indexOf(bold)

  const boldStyles = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const parsed = ComposeTextStyles(
      {
        ...props,
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
  }, [boldProps, weight, props])

  const textStyles = useMemo(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const parsed = ComposeTextStyles({ ...props, ...textProps }, colors)

    const styleResolve = textProps?.style ? { ...textProps.style } : {}

    return {
      ...parsed,
      ...styleResolve
    }
  }, [boldProps, props])

  return {
    normal,
    index,
    boldStyles,
    textStyles
  }
}
