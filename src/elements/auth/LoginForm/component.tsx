// libs
import { Box, Grid, Button } from '@mui/material'

// lib
import { Field, BoldText } from 'lib/components'
import { useTheme } from 'lib/theme'

// assets
import PokerIcon from '@mui/icons-material/StyleRounded'

import { useCompose } from './compose'

import { LoginFormProps } from './types'

export function LoginForm(props: LoginFormProps) {
  const { handleSubmitForm, useField } = useCompose(props)

  const { colors } = useTheme()

  return (
    <Box data-testid="test-loginForm">
      <form onSubmit={handleSubmitForm}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                bgcolor={colors.primary}
                borderRadius={50}
              >
                <PokerIcon sx={{ color: colors.white, fontSize: '40px' }} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <BoldText
                size={22}
                weight={7}
                color="textPrimary"
                align="justify"
                text="Faça seu login utilizando seu email"
                bold="email"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Field
              {...useField('userEmail')}
              label="Email"
              placeholder="Insira seu email"
            />
          </Grid>
          <Grid item xs={12}>
            <Box pt={1}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disableElevation
                fullWidth
              >
                Entrar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <BoldText
              text="Não possui uma cadastro? Criar conta"
              align="center"
              bold="Criar conta"
              size={14}
              color="grey"
              boldProps={{
                decoration: 'underline',
                color: 'primary',
                weight: 6
              }}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
