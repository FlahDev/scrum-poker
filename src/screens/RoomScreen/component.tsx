// libs
import { useState } from 'react'
import { Box, Grid } from '@mui/material'

// entities
import { Vote, VotesMap, UsersList } from 'entities/room'

// import { useCompose } from './compose'

export function RoomScreen() {
  // const {} = useCompose()

  const [currentVote, setCurrentVote] = useState<string>('')

  return (
    <Box pt={2} data-testid="test-roomScreen">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              columnGap="1rem"
              rowGap="1rem"
              data-testid="test-roomScreen"
            >
              {Object.entries(VotesMap).map(([key, value]) => (
                <Vote
                  key={key}
                  label={key}
                  value={value}
                  onClick={setCurrentVote}
                  isActive={value === currentVote}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <UsersList />
        </Grid>
      </Grid>
    </Box>
  )
}
