// libs
import { Box, Button } from '@mui/material'

// lib
import { Text } from 'lib/components'

import { VoteProps } from './types'

import { useCompose } from './compose'

export function Vote({ label, value, onClick, isActive }: VoteProps) {
  const { handleClick } = useCompose({ value, onClick })

  return (
    <Box data-testid="test-vote">
      <Button
        variant={isActive ? 'contained' : 'outlined'}
        color="secondary"
        onClick={handleClick}
      >
        <Box
          width="70px"
          height="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={isActive ? 'white' : 'secondary'} size={20} weight={6}>
            {label}
          </Text>
        </Box>
      </Button>
    </Box>
  )
}
