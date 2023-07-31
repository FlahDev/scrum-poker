// libs
import 'react-toastify/dist/ReactToastify.css'
import { Children } from 'react'
import { ToastContainer } from 'react-toastify'
import { ApolloProvider } from '@apollo/client'

import { ThemeProvider } from 'lib/theme/provider'

import { ApolloClientInstance } from 'api/graphql/api'

import { MuiProvider, EmotionProvider } from './theme'

export function AppProvider({ children }: Children) {
  return (
    <ThemeProvider>
      <MuiProvider>
        <EmotionProvider>
          <ApolloProvider client={ApolloClientInstance}>
            <ToastContainer pauseOnHover={false} />
            {children}
          </ApolloProvider>
        </EmotionProvider>
      </MuiProvider>
    </ThemeProvider>
  )
}
