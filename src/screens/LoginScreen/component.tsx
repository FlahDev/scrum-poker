// libs
import { Box } from '@mui/material'

// lib
import { useTheme } from 'lib/theme'

import { useCompose } from './compose'

import { LoginForm } from 'elements/auth/LoginForm'

export function LoginScreen() {
  const { handleSubmitForm } = useCompose()

  const { colors } = useTheme()

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      data-testid="test-loginScreen"
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
          <LoginForm onSubmit={handleSubmitForm} />
        </Box>
      </Box>
    </Box>
  )
}
