declare module 'react' {
  export interface Children {
    children: ReactNode
  }
}

// lib
import { Children } from 'react'
import { CssBaseline } from '@mui/material'

import { AuthProvider } from 'auth/provider'

import { AppProvider } from './provider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App({ children }: Children) {
  return (
    <AppProvider>
      <ToastContainer />
      <CssBaseline />
      <AuthProvider>{children}</AuthProvider>
    </AppProvider>
  )
}
