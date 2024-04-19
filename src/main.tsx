import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.tsx'

import Global from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
)
