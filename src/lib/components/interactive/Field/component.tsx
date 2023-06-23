// libs
import { Box } from '@mui/material'

import { FieldProps } from './types'

import { useCompose } from './compose'
import { NullTextField, StyledTextField } from './styles'

export function Field({ CustomField, ...props }: FieldProps) {
  const { fieldLogic } = useCompose(props)

  if (CustomField)
    return (
      <Box data-testid="test-field">
        <CustomField data-testid="test-defaultField" {...fieldLogic} />
      </Box>
    )

  if (props.useNull)
    return (
      <Box data-testid="test-field">
        <NullTextField data-testid="test-defaultNullField" {...fieldLogic} />
      </Box>
    )

  return (
    <Box width="100%" data-testid="test-field">
      <StyledTextField data-testid="test-defaultStyledField" {...fieldLogic} />
    </Box>
  )
}
