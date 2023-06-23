// libs
import { Autocomplete } from '@mui/material'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface StyledACProps {
  bottomBar?: boolean
}

export const StyledComponent = styled(Autocomplete)<StyledACProps>`
  ${({ bottomBar, theme: { colors } }) =>
    css`
      input::placeholder {
        color: ${colors.placeholder};
        opacity: 1;
      }

      .Mui-disabled:not(label) {
        background: ${colors.grey};
      }

      ${bottomBar
        ? css`
            .MuiInputBase-root {
              border: none;
              border-bottom: 2px solid ${colors.secondaryLighter};
              border-radius: 0;
            }

            .MuiAutocomplete-endAdornment .Mui-disabled {
              color: ${colors.placeholder} !important;
            }

            .MuiIconButton-root:last-child {
              color: ${colors.secondaryLighter};
            }

            .MuiInput-underline:after {
              border-color: ${colors.secondary};
            }

            input {
              font-size: 18px;
              font-weight: 500;
            }

            input::placeholder {
              color: ${colors.grey};
              opacity: 1;
              font-size: 20px;
              font-weight: 500;
            }
          `
        : ''}
    `}
`
