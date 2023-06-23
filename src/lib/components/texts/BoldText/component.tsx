// libs
import { Children } from 'react'
import { Box, Typography } from '@mui/material'

import { BoldTextProps } from './types'

import { useCompose } from './compose'

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
      <Typography
        align="left"
        component="p"
        {...(textProps as any)}
        style={textStyles}
        data-testid="test-boldTextNormal"
      >
        {children}
      </Typography>
    )
  }

  function RenderBold({ children }: Children) {
    return (
      <Typography
        align="left"
        component="b"
        {...(textProps as any)}
        style={boldStyles}
        data-testid="test-boldText"
      >
        {children}
      </Typography>
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
