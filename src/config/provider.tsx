// libs
import 'react-toastify/dist/ReactToastify.css'
import { Children } from 'react'
import { ToastContainer } from 'react-toastify'

import { ThemeProvider } from 'lib/theme/provider'

import { MuiProvider, EmotionProvider } from './theme'

export function AppProvider({ children }: Children) {
  return (
    <ThemeProvider>
      <MuiProvider>
        <EmotionProvider>
          <ToastContainer pauseOnHover={false} />
          {children}
        </EmotionProvider>
      </MuiProvider>
    </ThemeProvider>
  )
}
