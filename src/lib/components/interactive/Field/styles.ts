// libs
import { InputBase, TextField } from '@mui/material'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const NullField = styled(InputBase)`
  border: none;
  input {
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const StyledTextField = styled(TextField)`
  ${({ theme: { colors } }) => css`
    input::placeholder {
      color: ${colors.placeholder};
      opacity: 1;
    }

    .Mui-disabled:not(label) {
      background: ${colors.grey};
      border-color: ${colors.disabled};
    }

    .MuiInput-multiline {
      padding-left: 1rem;
      padding-top: 1rem;
    }

    .MuiAutocomplete-endAdornment .Mui-disabled {
      background: none;
    }
  `}
`

export const NullTextField = styled(TextField)`
  ${({ theme: { colors } }) => css`
    .MuiInputBase-root {
      background: none;
      border: none;
    }
    input::placeholder {
      color: ${colors.placeholder};
      opacity: 0.5;
    }

    .Mui-disabled:not(label) {
      border: none;
    }
  `}
`
