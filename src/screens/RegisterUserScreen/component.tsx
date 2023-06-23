// libs
import { Box } from '@mui/material'

// lib
import { useTheme } from 'lib/theme'

import { RegisterUserForm } from 'elements/user/RegisterUserForm'

import { useCompose } from './compose'

export function RegisterUserScreen() {
  const { handleSubmitForm } = useCompose()

  const { colors } = useTheme()

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      data-testid="test-registerUserScreen"
    >
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{ width: '500px' }}
          bgcolor={colors.white}
          p={4}
          borderRadius={6}
        >
          <RegisterUserForm onSubmit={handleSubmitForm} />
        </Box>
      </Box>
    </Box>
  )
}
