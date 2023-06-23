// libs
import { Box, Grid, Button } from '@mui/material'

// lib
import { Field, BoldText } from 'lib/components'
import { useTheme } from 'lib/theme'

// assets
import PokerIcon from '@mui/icons-material/StyleRounded'

import { useCompose } from './compose'

import { RegisterUserFormProps } from './types'

export function RegisterUserForm(props: RegisterUserFormProps) {
  const { useField, handleSubmitForm } = useCompose(props)

  const { colors } = useTheme()

  return (
    <Box data-testid="test-registerUserForm">
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
                text="Faça seu cadastro de forma simples, fácil e rápida"
                bold="simples, fácil e rápida"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Field
              {...useField('userName')}
              label="Nome de usuário"
              placeholder="Insira seu nome"
            />
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
                Juntar-se à sala
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <BoldText
              text="Já possui uma conta? Entrar"
              align="center"
              bold="Entrar"
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
