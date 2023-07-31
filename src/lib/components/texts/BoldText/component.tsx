// libs
import { Children } from 'react'
import { Box, Typography, Link } from '@mui/material'
import NextLink from 'next/link'

import { BoldTextProps } from './types'

import { useCompose } from './compose'

function DecideComponent({
  href,
  ...rest
}: Required<BoldTextProps>['boldProps']) {
  if (href)
    return <Link {...rest} href={href} component={NextLink} ref={undefined} />

  return <Typography {...rest} />
}

export function BoldText({
  bold,
  text,
  boldProps,
  weight,
  textProps,
  ...props
}: BoldTextProps) {
  const { boldStyles, index, normal, textStyles } = useCompose({
    bold,
    text,
    boldProps,
    weight,
    textProps,
    ...props
  })

  function RenderText({ children }: Children) {
    return (
      <DecideComponent
        align="left"
        component="p"
        {...(textProps as any)}
        style={textStyles}
        href={textProps?.href}
        data-testid="test-boldTextNormal"
      >
        {children}
      </DecideComponent>
    )
  }

  function RenderBold({ children }: Children) {
    return (
      <DecideComponent
        align="left"
        component="b"
        {...(textProps as any)}
        style={boldStyles}
        href={boldProps?.href}
        data-testid="test-boldText"
      >
        {children}
      </DecideComponent>
    )
  }

  if (index === 0) {
    return (
      <Box data-testid="test-boldText">
        <RenderText>
          <RenderBold>{bold}</RenderBold>
          {normal}
        </RenderText>
      </Box>
    )
  }

  if (index === text.length - 1) {
    return (
      <Box data-testid="test-boldText">
        <RenderText>
          {normal}
          <RenderBold>{bold}</RenderBold>
        </RenderText>
      </Box>
    )
  }

  const [initial, end] = text.split(bold)

  return (
    <Box data-testid="test-boldText">
      <RenderText>
        {initial}
        <RenderBold>{bold}</RenderBold>
        {end}
      </RenderText>
    </Box>
  )
}
