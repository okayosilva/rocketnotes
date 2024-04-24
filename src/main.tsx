import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './hooks/authContext.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.tsx'

import Global from './styles/global.ts'
import { Routes } from './routes/index.tsx'

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
