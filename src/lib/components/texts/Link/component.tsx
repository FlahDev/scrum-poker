// libs
import { Link as MuiLink } from '@mui/material'
import NextLink from 'next/link'

import { LinkProps } from './types'

import { useComposeTextProps } from '../Text'

export function Link({ color, customColor, ...props }: LinkProps) {
  const { resolvedStyles } = useComposeTextProps({
    ...props,
    color,
    customColor
  })

  return (
    <MuiLink
      data-testid="test-link"
      {...props}
      style={resolvedStyles}
      ref={undefined}
      component={NextLink}
    />
  )
}
