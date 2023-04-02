declare module 'react' {
  export interface Children {
    children: ReactNode
  }
}

// lib
import { Children } from 'react'
import { CssBaseline } from '@mui/material'

import { AppProvider } from './provider'

export function App({ children }: Children) {
  return (
    <AppProvider>
      <CssBaseline />
      {children}
    </AppProvider>
  )
}
