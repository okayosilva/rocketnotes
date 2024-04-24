import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './hooks/auth'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import Global from './styles/global'
import { Routes } from './routes/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
