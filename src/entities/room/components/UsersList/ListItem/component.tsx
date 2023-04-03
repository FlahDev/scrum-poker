// libs
import { Box, Grid, CircularProgress } from '@mui/material'

// lib
import { Text } from 'lib/components'
import { useTheme } from 'lib/theme'

import { ListItemProps } from './types'

// import { useCompose } from './compose'

export function ListItem({ userName, userVote }: ListItemProps) {
  // const {} = useCompose()
  const { colors } = useTheme()

  return (
    <Box
      p={0.5}
      borderBottom={`1px solid ${colors.disabled}`}
      data-testid="test-listItem"
    >
      <Grid container>
        <Grid item xs={12}>
          <Box
            p={1}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" flexWrap="wrap">
              <Text color="primary" size={16} weight={6} fullWidth>
                {userName}
              </Text>
              <Text color="grey" size={14} weight={5} fullWidth>
                Aguardando voto...
              </Text>
            </Box>
            {userVote ? String(userVote) : <CircularProgress size={20} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
