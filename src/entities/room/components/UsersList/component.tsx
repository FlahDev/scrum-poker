// libs
import { Box, Grid } from '@mui/material'

// lib
import { BoldText } from 'lib/components'
import { useTheme } from 'lib/theme'

import { ListItem } from './ListItem'

// import { useCompose } from './compose'

export function UsersList() {
  // const {} = useCompose()
  const { colors } = useTheme()

  return (
    <Box
      p={1}
      width="100%"
      border={`1px solid ${colors.grey}`}
      sx={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
      data-testid="test-usersList"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BoldText
            text="Sala de Deutrana"
            bold="Deutrana"
            textProps={{
              color: 'textPrimary',
              size: 16,
              weight: 5
            }}
            boldProps={{
              color: 'secondary',
              size: 16,
              weight: 7
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ListItem userName="Fulano" />
        </Grid>
      </Grid>
    </Box>
  )
}
