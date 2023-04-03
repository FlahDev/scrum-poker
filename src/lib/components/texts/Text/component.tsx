// libs
import { Typography } from '@mui/material'

import { TextProps } from './types'

import { useCompose } from './compose'

export function Text({ color, customColor, ...props }: TextProps) {
  const { resolvedStyles } = useCompose({ ...props, color, customColor })

  return (
    <Typography data-testid="test-text" {...props} style={resolvedStyles} />
  )
}
